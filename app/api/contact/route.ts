import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import sanitizeHtml from 'sanitize-html';
import { verifyCsrfToken } from '../csrf/route';

// レートリミッターの設定（IPアドレスごとに1時間に5回まで）
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'contact_form',
  points: 5, // 許可されるリクエスト数
  duration: 60 * 60, // 1時間（秒単位）
});

// Zodバリデーションスキーマ
const contactFormSchema = z.object({
  name: z.string().min(1, 'お名前は必須です').max(100, 'お名前は100文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  company: z.string().max(100, '会社名は100文字以内で入力してください').optional(),
  phone: z.string().regex(/^(\d{2,4}-?\d{2,4}-?\d{3,4})?$/, '有効な電話番号を入力してください').optional().or(z.literal('')),
  subject: z.string().optional(),
  message: z.string().min(1, 'お問い合わせ内容は必須です').max(2000, 'お問い合わせ内容は2000文字以内で入力してください'),
  csrfToken: z.string().min(1, 'CSRFトークンは必須です'),
});

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
  csrfToken: string;
}

// CORS設定を関数外に移動
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-domain.com' // 本番環境のドメインに置き換え
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin || '') ? (origin || allowedOrigins[0]) : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const corsHeaders = getCorsHeaders(origin);

    // OPTIONSリクエストの処理（CORSプリフライト）
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    // IPアドレスを取得
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    try {
      // レートリミットチェック
      await rateLimiter.consume(ip);
    } catch (rejRes: any) {
      return NextResponse.json(
        { error: 'リクエストが多すぎます。しばらく時間をおいて再度お試しください。' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(rejRes.msBeforeNext / 1000).toString(),
            ...corsHeaders
          }
        }
      );
    }

    // リクエストボディの取得
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: '無効なJSON形式です' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Zodバリデーション
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(err => err.message);
      return NextResponse.json(
        { error: errorMessages.join(', ') },
        { status: 400, headers: corsHeaders }
      );
    }

    const validatedData = validationResult.data;

    // CSRFトークンの検証
    if (!verifyCsrfToken(request, validatedData.csrfToken)) {
      return NextResponse.json(
        { error: '無効なリクエストです' },
        { status: 403, headers: corsHeaders }
      );
    }

    // XSS対策：ユーザー入力をサニタイズ
    const sanitizeOptions = {
      allowedTags: [], // HTMLタグを全て除去
      allowedAttributes: {},
    };

    const sanitizedData = {
      name: sanitizeHtml(validatedData.name, sanitizeOptions),
      email: validatedData.email, // メールアドレスはサニタイズせずバリデーション済み
      company: validatedData.company ? sanitizeHtml(validatedData.company, sanitizeOptions) : undefined,
      phone: validatedData.phone ? sanitizeHtml(validatedData.phone, sanitizeOptions) : undefined,
      subject: validatedData.subject ? sanitizeHtml(validatedData.subject, sanitizeOptions) : undefined,
      message: sanitizeHtml(validatedData.message, sanitizeOptions),
    };

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 管理者宛メール
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `【お問い合わせ】${sanitizedData.subject || '件名なし'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C3765; border-bottom: 2px solid #0C3765; padding-bottom: 10px;">
            新しいお問い合わせが届きました
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">お名前:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">メールアドレス:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.email}</td>
              </tr>
              ${sanitizedData.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">会社名:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.company}</td>
              </tr>
              ` : ''}
              ${sanitizedData.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">電話番号:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">件名:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.subject || '件名なし'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #0C3765; margin-bottom: 10px;">お問い合わせ内容:</h3>
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${sanitizedData.message}</div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>このメールは自動送信されています。</p>
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          </div>
        </div>
      `,
    };

    // 自動返信メール
    const autoReplyOptions = {
      from: process.env.SMTP_FROM,
      to: sanitizedData.email,
      subject: 'お問い合わせありがとうございます',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C3765; border-bottom: 2px solid #0C3765; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>

          <p style="color: #333; line-height: 1.6;">
            ${sanitizedData.name} 様
          </p>

          <p style="color: #333; line-height: 1.6;">
            この度は、お問い合わせいただきありがとうございます。<br>
            以下の内容でお問い合わせを承りました。
          </p>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">お名前:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">メールアドレス:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.email}</td>
              </tr>
              ${sanitizedData.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">会社名:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.company}</td>
              </tr>
              ` : ''}
              ${sanitizedData.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">電話番号:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">件名:</td>
                <td style="padding: 8px 0; color: #666;">${sanitizedData.subject || '件名なし'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #0C3765; margin-bottom: 10px;">お問い合わせ内容:</h3>
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${sanitizedData.message}</div>
          </div>

          <p style="color: #333; line-height: 1.6;">
            担当者が内容を確認の上、営業日2日以内にご連絡いたします。<br>
            お急ぎの場合は、お電話にてお問い合わせください。
          </p>

          <div style="background-color: #0C3765; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px;">お電話でのお問い合わせ</h3>
            <p style="margin: 0; font-size: 18px; font-weight: bold;">03-1234-5678</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">平日 9:00-18:00</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>※このメールは自動送信されています。このメールに返信いただいても対応できませんのでご了承ください。</p>
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          </div>
        </div>
      `,
    };

    // メール送信
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      {
        status: 200,
        headers: corsHeaders
      }
    );

  } catch (error: any) {
    console.error('メール送信エラー:', error);
    // エラーログに機密情報を含めない
    const isRateLimitError = error?.message?.includes('Rate limit');
    const safeErrorMessage = isRateLimitError ? 'レート制限を超えました' : 'メール送信に失敗しました';

    return NextResponse.json(
      { error: safeErrorMessage },
      {
        status: 500,
        headers: getCorsHeaders(request.headers.get('origin'))
      }
    );
  }
}

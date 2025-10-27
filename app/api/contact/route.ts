import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // バリデーション
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

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
      subject: `【お問い合わせ】${body.subject || '件名なし'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C3765; border-bottom: 2px solid #0C3765; padding-bottom: 10px;">
            新しいお問い合わせが届きました
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">お名前:</td>
                <td style="padding: 8px 0; color: #666;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">メールアドレス:</td>
                <td style="padding: 8px 0; color: #666;">${body.email}</td>
              </tr>
              ${body.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">会社名:</td>
                <td style="padding: 8px 0; color: #666;">${body.company}</td>
              </tr>
              ` : ''}
              ${body.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">電話番号:</td>
                <td style="padding: 8px 0; color: #666;">${body.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">件名:</td>
                <td style="padding: 8px 0; color: #666;">${body.subject || '件名なし'}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0C3765; margin-bottom: 10px;">お問い合わせ内容:</h3>
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${body.message}</div>
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
      to: body.email,
      subject: 'お問い合わせありがとうございます',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C3765; border-bottom: 2px solid #0C3765; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p style="color: #333; line-height: 1.6;">
            ${body.name} 様
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            この度は、お問い合わせいただきありがとうございます。<br>
            以下の内容でお問い合わせを承りました。
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">お名前:</td>
                <td style="padding: 8px 0; color: #666;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">メールアドレス:</td>
                <td style="padding: 8px 0; color: #666;">${body.email}</td>
              </tr>
              ${body.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">会社名:</td>
                <td style="padding: 8px 0; color: #666;">${body.company}</td>
              </tr>
              ` : ''}
              ${body.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">電話番号:</td>
                <td style="padding: 8px 0; color: #666;">${body.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">件名:</td>
                <td style="padding: 8px 0; color: #666;">${body.subject || '件名なし'}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0C3765; margin-bottom: 10px;">お問い合わせ内容:</h3>
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${body.message}</div>
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
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
}

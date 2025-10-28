import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

// CSRFトークンの有効期限（5分）
const TOKEN_EXPIRY = 5 * 60 * 1000;

// メモリ内トークンストア（本番環境ではRedisなどの外部ストアを使用）
const tokenStore = new Map<string, { token: string; expiry: number }>();

export async function GET(request: NextRequest) {
  try {
    // セッションIDとしてIPアドレスを使用（本番環境では適切なセッション管理）
    const sessionId = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown';

    // ランダムなCSRFトークンを生成
    const token = randomBytes(32).toString('hex');
    const expiry = Date.now() + TOKEN_EXPIRY;

    // トークンをストアに保存
    tokenStore.set(sessionId, { token, expiry });

    // 古いトークンをクリーンアップ
    for (const [key, value] of tokenStore.entries()) {
      if (value.expiry < Date.now()) {
        tokenStore.delete(key);
      }
    }

    return NextResponse.json(
      { csrfToken: token },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );

  } catch (error) {
    console.error('CSRFトークン生成エラー:', error);
    return NextResponse.json(
      { error: 'CSRFトークンの生成に失敗しました' },
      { status: 500 }
    );
  }
}

// CSRFトークンの検証関数（他のAPIで使用）
export function verifyCsrfToken(request: NextRequest, token: string): boolean {
  const sessionId = request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown';

  const stored = tokenStore.get(sessionId);
  if (!stored) return false;

  // トークンの有効期限チェック
  if (stored.expiry < Date.now()) {
    tokenStore.delete(sessionId);
    return false;
  }

  // トークンの一致チェック
  if (stored.token !== token) return false;

  // 使用済みトークンは削除（1回のみ使用可能）
  tokenStore.delete(sessionId);
  return true;
}

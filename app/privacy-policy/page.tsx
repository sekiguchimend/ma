import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-screen">
        {/* ホームに戻るボタン */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-[13px] sm:text-[14px] font-medium text-white transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </a>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center min-h-[calc(100vh-12rem)]">
            {/* Left Content */}
            <div className="relative pt-2 sm:pt-4 md:pt-6 text-center lg:text-left lg:flex-1">
              <h1 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold mb-3 sm:mb-4 md:mb-5 leading-[1.4] tracking-tight">
                <span className="text-[#4A90E2]">p</span>rivacy<br />
                プライバシーポリシー
              </h1>

              <div className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] mb-6 sm:mb-7 md:mb-8 leading-[1.6] opacity-95">
                <p className="mb-4">
                  個人情報の取り扱いについて
                </p>
                <p>
                  当社がお客様から取得した個人情報を適切に管理いたします。
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white rounded-[16px] p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[600px] lg:flex-shrink-0">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C3765] mb-4 sm:mb-5 md:mb-6">
                プライバシーポリシー
              </h2>

              <div className="prose prose-sm max-w-none text-gray-700">
                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">1. 個人情報の収集について</h3>
                <p className="mb-4">
                  当社では、お客様からのお問い合わせやサービス提供のために、以下の個人情報を収集する場合があります：
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>お名前</li>
                  <li>メールアドレス</li>
                  <li>会社名</li>
                  <li>電話番号</li>
                  <li>その他お問い合わせ内容に含まれる情報</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">2. 個人情報の利用目的</h3>
                <p className="mb-4">
                  収集した個人情報は、以下の目的で利用いたします：
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>お問い合わせへの対応</li>
                  <li>サービスの提供</li>
                  <li>関連する情報のご案内</li>
                  <li>法令遵守のための記録保持</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">3. 個人情報の第三者提供</h3>
                <p className="mb-4">
                  当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>法令に基づく場合</li>
                  <li>お客様の同意がある場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">4. 個人情報の安全管理</h3>
                <p className="mb-4">
                  当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">5. お問い合わせ窓口</h3>
                <p className="mb-4">
                  個人情報の取り扱いに関するお問い合わせは、以下の窓口までお願いいたします：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>メール：</strong>contact@example.com</p>
                  <p><strong>電話：</strong>03-1234-5678</p>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  本プライバシーポリシーは、2024年10月28日に制定されました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

import Footer from '../components/Footer';

export default function TermsOfServicePage() {
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
                <span className="text-[#4A90E2]">t</span>erms<br />
                利用規約
              </h1>

              <div className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] mb-6 sm:mb-7 md:mb-8 leading-[1.6] opacity-95">
                <p className="mb-4">
                  サービス利用条件について
                </p>
                <p>
                  当社サービスの利用にあたってのルールと条件を定めています。
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white rounded-[16px] p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[600px] lg:flex-shrink-0">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C3765] mb-4 sm:mb-5 md:mb-6">
                利用規約
              </h2>

              <div className="prose prose-sm max-w-none text-gray-700">
                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">1. 適用範囲</h3>
                <p className="mb-4">
                  本利用規約は、当社が提供する全てのサービス（以下「本サービス」といいます）の利用に関して適用されます。
                  お客様が本サービスを利用することにより、本利用規約に同意したものとみなされます。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">2. サービスの提供</h3>
                <p className="mb-4">
                  当社は、本サービスの内容を予告なく変更または中止する場合があります。
                  また、システムメンテナンス等により、一時的にサービスを停止する場合があります。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">3. 利用者の責任</h3>
                <p className="mb-4">
                  お客様は、本サービスの利用にあたって、以下の行為を行ってはならないものとします：
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>他の利用者または第三者の権利を侵害する行為</li>
                  <li>当社の業務を妨害する行為</li>
                  <li>虚偽の情報を提供する行為</li>
                  <li>その他当社が不適切と判断する行為</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">4. 免責事項</h3>
                <p className="mb-4">
                  当社は、本サービスの利用により生じたお客様の損害について、一切の責任を負いません。
                  ただし、当社の故意または重大な過失による場合はこの限りではありません。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">5. 個人情報の取り扱い</h3>
                <p className="mb-4">
                  お客様の個人情報の取り扱いについては、別途定めるプライバシーポリシーに従います。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">6. 規約の変更</h3>
                <p className="mb-4">
                  当社は、必要に応じて本利用規約を変更することができます。
                  変更後の利用規約は、当社ウェブサイトに掲載した時点で効力を生じます。
                </p>

                <h3 className="text-lg font-semibold text-[#0C3765] mt-6 mb-3">7. お問い合わせ</h3>
                <p className="mb-4">
                  本利用規約に関するお問い合わせは、以下の窓口までお願いいたします：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>メール：</strong>contact@example.com</p>
                  <p><strong>電話：</strong>03-1234-5678</p>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  本利用規約は、2024年10月28日に制定されました。
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

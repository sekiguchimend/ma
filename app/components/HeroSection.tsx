'use client';

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-[600px] lg:min-h-[600px] md:min-h-[700px] sm:min-h-[800px]">
      {/* Person Image - Mobile: top right, Desktop: centered */}
      <div className="absolute top-[202px] right-4 w-[200px] h-[220px] sm:top-[180px] sm:right-4 sm:w-[200px] sm:h-[220px] md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:ml-8 md:w-[420px] md:h-[480px] lg:w-[520px] lg:h-[580px] pointer-events-none z-10 md:z-0">
        <img
          src="/woman2.png"
          alt="女性の画像"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="relative pt-4 sm:pt-6 md:pt-8 text-center lg:text-left flex-1">
            <h1 className="text-[54px] sm:text-[64px] md:text-[76px] lg:text-[92px] font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.4] tracking-tight">
              アプリ事業を<br />
              売却・買収する<br />
              <span className="text-[92px] sm:text-[108px] md:text-[128px] lg:text-[158px] inline-block leading-[1]">最</span>適解
            </h1>

            {/* Badge */}
            <div className="relative inline-block">
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center bg-white rounded-[40px] px-10 sm:px-14 md:px-16 lg:px-20 py-3 sm:py-3.5 md:py-4 mb-6 sm:mb-7 md:mb-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <span className="font-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-[#323232]">今すぐ無料査定</span>
              </button>
              {/* Five.png Badge */}
              <img
                src="/five.png"
                alt="最短5分"
                className="absolute -top-6 -left-4 w-[50px] h-[50px] sm:-top-7 sm:-left-5 sm:w-[60px] sm:h-[60px] md:-top-8 md:-left-6 md:w-[70px] md:h-[70px]"
              />
            </div>

            {/* Footer Text */}
            <p className="text-[11px] leading-[1.6] opacity-95 max-w-[600px] lg:mx-0 mx-auto relative z-10">
              ※アプリ・SaaS・Webサービスに特化したM&A支援で豊富な実績<br />
              IT企業としての総合技術力でコードレビュー・セキュリティチェックまで一括対応<br />
              お問い合わせから30分以内に初回返信で迅速対応
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 lg:w-[400px] w-[300px]">
            <img
              src="/App Exit.png"
              alt="App Exit Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

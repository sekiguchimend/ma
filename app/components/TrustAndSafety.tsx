export default function TrustAndSafety() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative">
      {/* Back Image - Bottom Left */}
      <div className="absolute top-1 left-0 w-[120px] h-[120px] sm:top-2 sm:left-0.5 sm:w-[160px] sm:h-[160px] md:top-2.5 md:left-1 md:w-[200px] md:h-[200px] lg:top-3 lg:left-1 lg:w-[240px] lg:h-[240px] pointer-events-none z-10">
        <img
          src="/back.png"
          alt="背景装飾"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Title and App Icons */}
          <div>
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.3] mb-8 sm:mb-10 md:mb-12 text-center relative z-20">
              企業が選ぶ<br />
              AppExit
            </h2>

            {/* App Icon Stack Placeholder */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] h-[200px] sm:h-[230px] md:h-[250px] lg:h-[280px] flex items-center justify-center mx-auto">
              <img
                src="/app.png"
                alt="AppExitロゴ"
                className="w-[200px] sm:w-[230px] md:w-[250px] lg:w-[280px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Feature 1 */}
            <div>
              <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-2 sm:mb-2.5 md:mb-3 flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <span className="inline-flex items-center justify-center w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] text-[#0C3765] flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 18h16M6 18V9M18 18V9M8 21V12h8v9M12 2l10 7H2l10-7z"/>
                  </svg>
                </span>
                自社開発実績による品質担保
              </h3>
              <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] pl-[28px] sm:pl-[34px] md:pl-[40px]">
                自社でもアプリ・システム開発を行っているため、技術的な品質評価やセキュリティチェックを適切に実施できます。企業様の大切な資産を正確に評価いたします。
              </p>
              <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] mt-1.5 sm:mt-2 pl-[28px] sm:pl-[34px] md:pl-[40px]">
                自社開発実績：50件以上のアプリ・システム開発経験
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-2 sm:mb-2.5 md:mb-3 flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <span className="inline-flex items-center justify-center w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] text-[#0C3765] flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 26">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/>
                  </svg>
                </span>
                POC〜本格事業化まで柔軟対応
              </h3>
              <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] pl-[28px] sm:pl-[34px] md:pl-[40px]">
                概念実証（POC）段階から本格的な事業化まで、企業の成長フェーズに合わせた柔軟な料金体系とサポートを提供。予算に応じて最適なプランをご提案します。
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-2 sm:mb-2.5 md:mb-3 flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <span className="inline-flex items-center justify-center w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] text-[#0C3765] flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2.5-1.5 6.5 0 9m0 0c1.5 2.5 1.5 6.5 0 9m0-9c-1.5-2.5-1.5-6.5 0-9m0 18c1.5-2.5 1.5-6.5 0-9"/>
                  </svg>
                </span>
                迅速対応・丸投げ可能
              </h3>
              <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] pl-[28px] sm:pl-[34px] md:pl-[40px]">
                最短24時間以内の打ち合わせ設定で迅速対応。企業様のリソース不足にも対応し、プロジェクト全体を丸投げいただくことも可能です。専任チームが責任を持ってサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

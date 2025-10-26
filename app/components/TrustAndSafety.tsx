export default function TrustAndSafety() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      {/* Back Image - Bottom Left */}
      <div className="absolute top-3 left-1 w-[240px] h-[240px] pointer-events-none z-10">
        <img
          src="/back.png"
          alt="背景装飾"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-[450px_1fr] gap-16 items-center">
          {/* Left - Title and App Icons */}
          <div>
            <h2 className="text-[42px] lg:text-[48px] font-bold leading-[1.3] mb-12 text-center relative z-20">
              企業が選ぶ<br />
              AppExit
            </h2>

            {/* App Icon Stack Placeholder */}
            <div className="relative w-[380px] h-[280px] flex items-center justify-center">
              <img
                src="/app.png"
                alt="AppExitロゴ"
                className="w-[280px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-10">
            {/* Feature 1 */}
            <div>
              <h3 className="font-bold text-[24px] mb-3 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-[32px] h-[32px] text-[#0C3765]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 18h16M6 18V9M18 18V9M8 21V12h8v9M12 2l10 7H2l10-7z"/>
                  </svg>
                </span>
                自社開発実績による品質担保
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                自社でもアプリ・システム開発を行っているため、技術的な品質評価やセキュリティチェックを適切に実施できます。企業様の大切な資産を正確に評価いたします。
              </p>
              <p className="text-gray-500 text-[13px] mt-2 pl-[40px]">
                自社開発実績：50件以上のアプリ・システム開発経験
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="font-bold text-[24px] mb-3 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-[32px] h-[32px] text-[#0C3765]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 26">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/>
                  </svg>
                </span>
                POC〜本格事業化まで柔軟対応
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                概念実証（POC）段階から本格的な事業化まで、企業の成長フェーズに合わせた柔軟な料金体系とサポートを提供。予算に応じて最適なプランをご提案します。
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="font-bold text-[24px] mb-3 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-[32px] h-[32px] text-[#0C3765]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2.5-1.5 6.5 0 9m0 0c1.5 2.5 1.5 6.5 0 9m0-9c-1.5-2.5-1.5-6.5 0-9m0 18c1.5-2.5 1.5-6.5 0-9"/>
                  </svg>
                </span>
                迅速対応・丸投げ可能
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                最短24時間以内の打ち合わせ設定で迅速対応。企業様のリソース不足にも対応し、プロジェクト全体を丸投げいただくことも可能です。専任チームが責任を持ってサポートします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

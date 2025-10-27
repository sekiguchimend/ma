export default function ScrollingMarquee() {
  return (
    <section className="py-4 sm:py-5 md:py-6 overflow-hidden -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 mb-4 sm:mb-6 md:mb-8 relative z-10">
      <div className="relative flex">
        {/* 無限ループアニメーション - 4セット繰り返し */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Item 1セット */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-3 md:px-4">
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">自社開発実績による品質担保</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">セキュリティチェック体制</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">POC〜本格事業化まで対応</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">最短24時間で打ち合わせ</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">丸投げ対応可能</span>
            </div>
          </div>
          {/* Item 2セット */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-3 md:px-4">
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">自社開発実績による品質担保</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">セキュリティチェック体制</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">POC〜本格事業化まで対応</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">最短24時間で打ち合わせ</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">丸投げ対応可能</span>
            </div>
          </div>
          {/* Item 3セット */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-3 md:px-4">
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">自社開発実績による品質担保</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">セキュリティチェック体制</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">POC〜本格事業化まで対応</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">最短24時間で打ち合わせ</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">丸投げ対応可能</span>
            </div>
          </div>
          {/* Item 4セット */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-3 md:px-4">
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">自社開発実績による品質担保</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">セキュリティチェック体制</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">POC〜本格事業化まで対応</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">最短24時間で打ち合わせ</span>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[10px] md:rounded-[12px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-sm border border-gray-200">
              <span className="text-[#0C3765] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">丸投げ対応可能</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

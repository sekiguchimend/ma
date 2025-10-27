export default function ThreeReasons() {
  return (
    <section id="reasons" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-[#F2F4F8] to-[#E8ECF1]">
      <div className="container mx-auto px-4">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          AppExitが選ばれる<span className="text-[#0C3765]">3</span>つの理由
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">1.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">アプリ特化型M&A</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mb-2">
                    アプリ・SaaS・Webサービスに
                  </div>
                  <div className="relative inline-block">
                    <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold font-noto-sans-jp relative z-20 text-[#0C3765]">特化</span>
                    {/* 黄色い下線 - 文字幅に合わせる */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                  </div>
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mt-2">
                    豊富な実績で最適な<br />買い手候補を提案
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">2.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">総合技術力</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mb-2">
                    コードレビューから移管まで
                  </div>
                  <div className="relative inline-block">
                    <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold font-noto-sans-jp relative z-20 text-[#0C3765]">一括対応</span>
                    {/* 黄色い下線 - 文字幅に合わせる */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                  </div>
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mt-2">
                    専門エンジニアによる<br />技術面の事前診断
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-2 md:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">3.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">迅速対応</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mb-2">
                    お問い合わせから
                  </div>
                  <div className="flex flex-row items-baseline justify-center gap-1">
                    <div className="relative inline-block">
                      <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold font-noto-sans-jp relative z-20 text-[#0C3765]">30</span>
                      <span className="text-[20px] sm:text-[24px] md:text-3xl font-bold font-noto-sans-jp relative z-20 text-[#0C3765]">分以内</span>
                      {/* 黄色い下線 - 文字幅に合わせる */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                    </div>
                  </div>
                  <div className="text-[16px] sm:text-[18px] md:text-xl font-medium text-gray-700 mt-2">
                    初回返信をお約束<br />完全無料相談
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

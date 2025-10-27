export default function ThreeReasons() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-[#F2F4F8] to-[#E8ECF1]">
      <div className="container mx-auto px-4">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          AppExitが選ばれる<span className="text-[#0C3765]">3</span>つの理由
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">1.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">迅速開発・納品</h3>
            </div>
             <div className="flex justify-center">
               <div className="w-full h-full flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2">

                 <div className="text-center">
                   <div className="flex flex-row items-baseline justify-center gap-1">
                     <span className="text-[24px] sm:text-[32px] md:text-4xl font-bold font-noto-sans-jp">最短</span>
                     <div className="relative">
                       <span className="text-[48px] sm:text-[56px] md:text-7xl font-bold font-noto-sans-jp relative z-20">2</span>
                       <span className="text-[24px] sm:text-[32px] md:text-4xl font-bold font-noto-sans-jp relative z-20">週間</span>
                       {/* 黄色い下線 - 2週間のみ */}
                       <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                     </div>
                   </div>
                   <div className="text-[20px] sm:text-[24px] md:text-3xl font-bold font-noto-sans-jp mt-0.5 sm:mt-1">
                     以内納品
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">2.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">高い成約実績</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="text-center">
                  <div className="flex flex-row items-baseline justify-center gap-1">
                    <span className="text-[24px] sm:text-[32px] md:text-4xl font-bold font-noto-sans-jp">成約率</span>
                    <div className="relative">
                      <span className="text-[48px] sm:text-[56px] md:text-7xl font-bold font-noto-sans-jp relative z-20">7</span>
                      <span className="text-[24px] sm:text-[32px] md:text-4xl font-bold font-noto-sans-jp relative z-20">倍UP</span>
                      {/* 黄色い下線 - 7倍UPのみ */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                    </div>
                  </div>
                  <div className="text-[20px] sm:text-[24px] md:text-3xl font-bold font-noto-sans-jp mt-0.5 sm:mt-1">
                    事例多数
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-300 sm:col-span-2 md:col-span-1">
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-[32px] sm:text-[40px] md:text-5xl font-bold text-[#0C3765]">3.</span>
              <h3 className="text-[16px] sm:text-[18px] md:text-xl font-bold pt-1 sm:pt-1.5 md:pt-2">
                迅速対応・<br />
                丸投げ可能
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="text-center">
                  <div className="flex flex-row items-baseline justify-center gap-1">
                    <div className="relative">
                      <span className="text-[48px] sm:text-[56px] md:text-7xl font-bold font-noto-sans-jp relative z-20">24</span>
                      <span className="text-[24px] sm:text-[32px] md:text-4xl font-bold font-noto-sans-jp relative z-20">時間以内</span>
                      {/* 黄色い下線 - 24時間以内のみ */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-2.5 md:h-3 bg-yellow-400/70 z-10"></div>
                    </div>
                  </div>
                  <div className="text-[20px] sm:text-[24px] md:text-3xl font-bold font-noto-sans-jp mt-0.5 sm:mt-1">
                    迅速対応
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

export default function ThreeReasons() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F2F4F8] to-[#E8ECF1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          AppExitが選ばれる<span className="text-[#0C3765]">3</span>つの理由
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-5xl font-bold text-[#0C3765]">1.</span>
              <h3 className="text-xl font-bold pt-2">迅速開発・納品</h3>
            </div>
             <div className="flex justify-center">
               <div className="w-full h-full flex flex-col items-center justify-center gap-2">

                 <div className="text-center">
                   <div className="flex flex-row items-baseline justify-center gap-1">
                     <span className="text-4xl font-bold font-noto-sans-jp">最短</span>
                     <div className="relative">
                       <span className="text-7xl font-bold font-noto-sans-jp relative z-20">2</span>
                       <span className="text-4xl font-bold font-noto-sans-jp relative z-20">週間</span>
                       {/* 黄色い下線 - 2週間のみ */}
                       <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400/70 z-10"></div>
                     </div>
                   </div>
                   <div className="text-3xl font-bold font-noto-sans-jp mt-1">
                     以内納品
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-5xl font-bold text-[#0C3765]">2.</span>
              <h3 className="text-xl font-bold pt-2">高い成約実績</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="text-center">
                  <div className="flex flex-row items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold font-noto-sans-jp">成約率</span>
                    <div className="relative">
                      <span className="text-7xl font-bold font-noto-sans-jp relative z-20">7</span>
                      <span className="text-4xl font-bold font-noto-sans-jp relative z-20">倍UP</span>
                      {/* 黄色い下線 - 7倍UPのみ */}
                      <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400/70 z-10"></div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-noto-sans-jp mt-1">
                    事例多数
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-5xl font-bold text-[#0C3765]">3.</span>
              <h3 className="text-xl font-bold pt-2">
                迅速対応・<br />
                丸投げ可能
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <div className="text-center">
                  <div className="flex flex-row items-baseline justify-center gap-1">
                    <div className="relative">
                      <span className="text-7xl font-bold font-noto-sans-jp relative z-20">24</span>
                      <span className="text-4xl font-bold font-noto-sans-jp relative z-20">時間以内</span>
                      {/* 黄色い下線 - 24時間以内のみ */}
                      <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400/70 z-10"></div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-noto-sans-jp mt-1">
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

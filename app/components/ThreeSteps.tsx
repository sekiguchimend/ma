export default function ThreeSteps() {
  return (
    <section id="steps" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative">
      {/* Back Image - Top Right */}
      <div className="absolute top-4 right-2 w-[150px] h-[150px] sm:top-6 sm:right-4 sm:w-[200px] sm:h-[200px] md:top-8 md:right-6 md:w-[250px] md:h-[250px] lg:top-8 lg:right-8 lg:w-[300px] lg:h-[300px] pointer-events-none z-10">
        <img
          src="/back.png"
          alt="背景装飾"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 relative z-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-bold mb-3 sm:mb-3.5 md:mb-4">
            簡単<span className="text-[#0C3765]">3 STEP</span>！M&A成約まで
          </h2>
          <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            最短で1週間以内に査定結果・マッチング開始
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {/* Step 1 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-5 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 bg-gradient-to-b from-[#FFFBF5] to-white sm:col-span-1">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-3 left-5 sm:-top-3.5 sm:left-6 md:-top-4 md:left-8">
              <div className="relative bg-[#2D3748] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-1.5 md:py-2 rounded-lg text-[12px] sm:text-[13px] md:text-[14px] font-bold">
                STEP 1
                {/* Triangle */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-2 sm:left-2.5 md:left-3 w-0 h-0 border-l-[6px] sm:border-l-[7px] md:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[7px] md:border-r-[8px] border-r-transparent border-t-[6px] sm:border-t-[7px] md:border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center">
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center">
                <img src="/1.png" alt="STEP 1" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-bold text-center leading-[1.6] text-[#2D3748]">
              アプリ査定・登録
            </h3>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] text-gray-600 text-center mt-2 sm:mt-3 leading-relaxed">
              売却したいアプリの詳細情報を登録し収益性や成長性を分析して査定します。
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-5 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 bg-gradient-to-b from-[#FFFBF5] to-white sm:col-span-1">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-3 left-5 sm:-top-3.5 sm:left-6 md:-top-4 md:left-8">
              <div className="relative bg-[#2D3748] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-1.5 md:py-2 rounded-lg text-[12px] sm:text-[13px] md:text-[14px] font-bold">
                STEP 2
                {/* Triangle */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-2 sm:left-2.5 md:left-3 w-0 h-0 border-l-[6px] sm:border-l-[7px] md:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[7px] md:border-r-[8px] border-r-transparent border-t-[6px] sm:border-t-[7px] md:border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center relative">
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center">
                <img src="/2.png" alt="STEP 2" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-bold text-center leading-[1.6] text-[#2D3748]">
              マッチング・交渉
            </h3>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] text-gray-600 text-center mt-2 sm:mt-3 leading-relaxed">
              厳選された買い手候補とマッチングし条件交渉やオンライン面談を実施します。
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-5 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 bg-gradient-to-b from-[#FFFBF5] to-white sm:col-span-2 md:col-span-1">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-3 left-5 sm:-top-3.5 sm:left-6 md:-top-4 md:left-8">
              <div className="relative bg-[#2D3748] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-1.5 md:py-2 rounded-lg text-[12px] sm:text-[13px] md:text-[14px] font-bold">
                STEP 3
                {/* Triangle */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-2 sm:left-2.5 md:left-3 w-0 h-0 border-l-[6px] sm:border-l-[7px] md:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[7px] md:border-r-[8px] border-r-transparent border-t-[6px] sm:border-t-[7px] md:border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center relative">
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center">
                <img src="/3.png" alt="STEP 3" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-bold text-center leading-[1.6] text-[#2D3748]">
              契約締結・譲渡
            </h3>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] text-gray-600 text-center mt-2 sm:mt-3 leading-relaxed">
              正式な譲渡契約を締結し安全で確実なM&A成約を完了します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

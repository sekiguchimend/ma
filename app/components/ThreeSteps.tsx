export default function ThreeSteps() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      {/* Back Image - Top Right */}
      <div className="absolute top-8 right-8 w-[300px] h-[300px] pointer-events-none z-10">
        <img
          src="/back.png"
          alt="背景装飾"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] lg:text-[48px] font-bold mb-4">
            簡単<span className="text-[#0C3765]">3 STEP</span>！M&A成約まで
          </h2>
          <p className="text-gray-600 text-[16px]">
            最短で1週間以内に査定結果・マッチング開始
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[20px] p-8 pt-16 bg-gradient-to-b from-[#FFFBF5] to-white">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-4 left-8">
              <div className="relative bg-[#2D3748] text-white px-6 py-2 rounded-lg text-[14px] font-bold">
                STEP 1
                {/* Triangle */}
                <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center">
              <div className="w-[180px] h-[180px] flex items-center justify-center">
                <img src="/1.png" alt="STEP 1" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[20px] font-bold text-center leading-[1.6]">
              メールアドレスまたは<br />
              携帯番号で登録
            </h3>
          </div>

          {/* Step 2 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[20px] p-8 pt-16 bg-gradient-to-b from-[#FFFBF5] to-white">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-4 left-8">
              <div className="relative bg-[#2D3748] text-white px-6 py-2 rounded-lg text-[14px] font-bold">
                STEP 2
                {/* Triangle */}
                <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center relative">
              <div className="w-[180px] h-[180px] flex items-center justify-center">
                <img src="/2.png" alt="STEP 2" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[20px] font-bold text-center leading-[1.6]">
              アプリ情報を入力<br />
              無料で査定依頼
            </h3>
          </div>

          {/* Step 3 */}
          <div className="relative border-2 border-[#F2F4F8] rounded-[20px] p-8 pt-16 bg-gradient-to-b from-[#FFFBF5] to-white">
            {/* Badge - Speech Bubble */}
            <div className="absolute -top-4 left-8">
              <div className="relative bg-[#2D3748] text-white px-6 py-2 rounded-lg text-[14px] font-bold">
                STEP 3
                {/* Triangle */}
                <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2D3748]"></div>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="flex justify-center relative">
              <div className="w-[180px] h-[180px] flex items-center justify-center">
                <img src="/3.png" alt="STEP 3" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-[20px] font-bold text-center leading-[1.6]">
              マッチング・交渉<br />
              M&A成約へ
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

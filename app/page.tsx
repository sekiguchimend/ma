export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-[600px]">
        <div className="max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">
            {/* Left Content */}
            <div className="relative pt-8">
              <h1 className="text-[56px] lg:text-[64px] font-bold mb-6 leading-[1.2] tracking-tight">
                No.1 投資アプリ<br />
                手数料 <span className="text-[100px] lg:text-[120px] inline-block leading-[1]">0</span>円〜
              </h1>

              {/* Badge */}
              <div className="relative inline-block">
                <div className="inline-flex items-center bg-white rounded-[40px] px-20 py-4 mb-8 shadow-lg">
                  <span className="font-bold text-[19px] text-[#323232]">今すぐ口座開設</span>
                </div>
                {/* Five.png Badge */}
                <img 
                  src="/five.png" 
                  alt="最短5分" 
                  className="absolute -top-8 -left-8 w-[70px] h-[70px]"
                />
              </div>

              {/* Person Image Placeholder */}
              <div className="absolute bottom-0 right-0 w-[420px] h-[480px] pointer-events-none">
                {/* 人物画像スペース - ここに画像を配置 */}
              </div>

              {/* Footer Text */}
              <p className="text-[11px] leading-[1.6] opacity-95 max-w-[600px] relative z-10">
                ※比較対象範囲：Google Play ストアにおける国内ネット証券上位5社（auカブコム証券、<br />
                SBI証券、松井証券、マネックス証券、楽天証券）世界の日本株・米国株取引アプリについ<br />
                て、ストア平均評価を比較。集計期間 2023/12/10〜2024/03/22(moomoo証券調べ)
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-[20px] p-9 shadow-[0_8px_30px_rgba(50,50,50,0.12)] mt-8">
              <div className="flex gap-6 mb-8 border-b border-gray-200">
                <button className="pb-3 border-b-[3px] border-[#0C3765] text-[#0C3765] font-semibold text-[15px]">
                  メールアドレス
                </button>
                <button className="pb-3 text-gray-400 font-semibold text-[15px]">
                  電話
                </button>
              </div>

              <div className="mb-8">
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded-[10px] px-4 py-[14px] w-[90px] text-[15px] bg-white cursor-pointer focus:outline-none focus:border-gray-400">
                    <option>+81</option>
                  </select>
                  <input
                    type="text"
                    placeholder="例）090 1234 5678"
                    className="flex-1 border border-gray-300 rounded-[10px] px-4 py-[14px] text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>

              <button className="w-full bg-[#D4E1ED] text-[#7B9DBD] rounded-full py-[16px] font-semibold text-[16px] mb-6 cursor-not-allowed">
                次へ
              </button>

              <div className="text-center text-[13px] text-gray-600 mb-5">
                すでにアカウントをお持ちですか？ <a href="#" className="text-[#0C3765] hover:underline">ログイン</a>
              </div>

              <div className="text-center text-[11px] text-gray-500 leading-[1.6]">
                <a href="#" className="underline hover:no-underline">プライバシーポリシー</a>・<a href="#" className="underline hover:no-underline">利用規約</a>に同意します
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-6 overflow-hidden -mt-12 mb-8 relative z-10">
        <div className="relative flex">
          {/* 無限ループアニメーション - 4セット繰り返し */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* Item 1セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">手数料0円〜</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">NASDAQ上場企業</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">金融庁登録業者</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短5分で開設</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">2,300万ユーザー</span>
              </div>
            </div>
            {/* Item 2セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">手数料0円〜</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">NASDAQ上場企業</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">金融庁登録業者</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短5分で開設</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">2,300万ユーザー</span>
              </div>
            </div>
            {/* Item 3セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">手数料0円〜</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">NASDAQ上場企業</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">金融庁登録業者</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短5分で開設</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">2,300万ユーザー</span>
              </div>
            </div>
            {/* Item 4セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">手数料0円〜</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">NASDAQ上場企業</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">金融庁登録業者</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短5分で開設</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">2,300万ユーザー</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust and Safety */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-[450px_1fr] gap-16 items-center">
            {/* Left - Title and App Icons */}
            <div>
              <h2 className="text-[42px] lg:text-[48px] font-bold leading-[1.3] mb-12 text-center">
                安心と信頼の<br />
                moomoo証券
              </h2>

              {/* App Icon Stack Placeholder */}
              <div className="relative w-[380px] h-[280px] flex items-center justify-center">
                <img 
                  src="/app.png" 
                  alt="moomooアプリアイコン" 
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
                  金融庁の登録業者
                </h3>
                <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                  当社は金融庁より金融商品取引業者第一種、第二種、投資助言、投資運用業の登録を受けた日本国内の証券会社です。
                </p>
                <p className="text-gray-500 text-[13px] mt-2 pl-[40px]">
                  金融商品取引業者登録：関東財務局（金商）第3335号
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
                  安心の信託保全
                </h3>
                <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                  お客様からお預かりした資金は専用信託口座で分別管理しています。また、当社は投資者保護基金に加入しています。
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
                  NASDAQ上場のグローバル企業
                </h3>
                <p className="text-gray-700 text-[15px] leading-[1.8] pl-[40px]">
                  moomooアプリは米国で開発されました。moomoo証券は、米国NASDAQ上場のグローバル企業であるFutu Holdings limited (NASDAQ:FUTU)傘下であり、安心してお取引が可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Company Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C3765] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold transform rotate-45">
              <span className="transform -rotate-45">1</span>
            </div>
            <h2 className="text-4xl font-bold">業界最安級の手数料0円〜</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="p-4 text-left font-normal text-gray-600">判断基準</th>
                  <th className="p-4 bg-[#F2F4F8] border-4 border-[#0C3765]">
                    <div className="bg-[#0C3765] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap mx-auto w-fit">
                      <span className="text-2xl">👑</span>
                      <span className="font-bold text-base">AppExit</span>
                    </div>
                  </th>
                  <th className="p-4 font-normal text-gray-600">Y社</th>
                  <th className="p-4 font-normal text-gray-600">B社</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 - アプリ売却 */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">アプリ売却</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">○</td>
                  <td className="p-6 text-center text-3xl">△</td>
                </tr>
                {/* Row 2 - スピード感 */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">スピード感</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">△</td>
                  <td className="p-6 text-center text-3xl">○</td>
                </tr>
                {/* Row 3 - ITリテラシー */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">ITリテラシー</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">○</td>
                  <td className="p-6 text-center text-3xl">△</td>
                </tr>
                {/* Row 4 - アプリ以外のM&A */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">アプリ以外のM&A</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-b-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">○</div>
                  </td>
                  <td className="p-6 text-center text-3xl">◎</td>
                  <td className="p-6 text-center text-3xl">◎</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Three Reasons */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F2F4F8] to-[#E8ECF1]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            moomoo証券が選ばれる<span className="text-[#0C3765]">3</span>つの理由
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-5xl font-bold text-[#0C3765]">1.</span>
                <h3 className="text-xl font-bold pt-2">業界最安級手数料0円〜</h3>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-[#F2F4F8] rounded-full flex items-center justify-center">
                  {/* アイコン画像スペース */}
                  <div className="text-7xl font-bold text-[#0C3765]">0</div>
                  <span className="text-3xl font-bold text-[#0C3765]">円</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-5xl font-bold text-[#0C3765]">2.</span>
                <h3 className="text-xl font-bold pt-2">少額から取引可能</h3>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-[#F2F4F8] rounded-full flex items-center justify-center relative">
                  {/* アイコン画像スペース */}
                  <div className="text-5xl">💰</div>
                  <div className="absolute -top-2 -right-2 bg-[#0C3765] text-white rounded-full px-3 py-1 text-xs font-bold">
                    ひと株<br />購入OK!
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-300">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-5xl font-bold text-[#0C3765]">3.</span>
                <h3 className="text-xl font-bold pt-2">
                  多機能アプリ！<br />
                  銘柄選定・分析・取引
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-[#F2F4F8] rounded-full flex items-center justify-center">
                  {/* アイコン画像スペース */}
                  <div className="text-4xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: About moomoo */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-[42px] lg:text-[48px] font-bold mb-4">
              moomoo証券について
            </h2>
            <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed max-w-[900px] mx-auto">
              moomooアプリは米国で開発され、親会社がNASDAQ上場、今や全世界2,300万以上のユーザーにご利用いただいています。<br />
              初心者の方からプロのトレーダーまで使いやすいように工夫を凝らし、幅広い方々から高い評価をいただいています。
            </p>
          </div>

          {/* Banner Placeholder */}
          <div className="mt-12">
            <div className="w-full rounded-[30px] overflow-hidden">
              <img 
                src="/baner.png" 
                alt="moomoo証券について" 
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 3 Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[42px] lg:text-[48px] font-bold mb-4">
              簡単<span className="text-[#0C3765]">3 STEP</span>！口座開設
            </h2>
            <p className="text-gray-600 text-[16px]">
              最短で翌営業日に口座開設完了・取引開始
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
              <div className="flex justify-center mb-8">
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  {/* アイコン画像スペース - スマホと手 */}
                  <svg className="w-24 h-24 text-[#0C3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
                    <path d="M9 18h6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-[20px] font-bold text-center leading-[1.6]">
                メールアドレスまたは<br />
                携帯番号を登録
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
              <div className="flex justify-center mb-8 relative">
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  {/* アイコン画像スペース - 書類 */}
                  <svg className="w-24 h-24 text-[#0C3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6M9 16h6M9 8h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {/* チェックマーク */}
                  <div className="absolute bottom-2 right-2 bg-[#0C3765] rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-[20px] font-bold text-center leading-[1.6]">
                申込みフォームを<br />
                入力・必要書類を提出
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
              <div className="flex justify-center mb-8 relative">
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  {/* アイコン画像スペース - スマホとダウンロード */}
                  <svg className="w-24 h-24 text-[#0C3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
                    <path d="M12 6v7m0 0l-3-3m3 3l3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* チェックマーク */}
                  <div className="absolute bottom-2 right-2 bg-[#0C3765] rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-[20px] font-bold text-center leading-[1.6]">
                口座開設完了！無料で<br />
                アプリをダウンロード
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

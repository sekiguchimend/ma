'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    countryCode: '+81'
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (activeTab === 'email' && formData.email) {
      console.log('Email submitted:', formData.email);
      // ここで実際の処理を行う
    } else if (activeTab === 'phone' && formData.phone) {
      console.log('Phone submitted:', formData.countryCode + formData.phone);
      // ここで実際の処理を行う
    }
  };

  const isFormValid = () => {
    if (activeTab === 'email') {
      return formData.email.includes('@');
    } else {
      return formData.phone.length >= 10;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-[600px]">
        {/* Person Image - Centered */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[580px] pointer-events-none z-0">
          <img
            src="/woman2.png"
            alt="女性の画像"
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            {/* Left Content */}
            <div className="relative pt-8">
              <h1 className="text-[64px] lg:text-[72px] font-bold mb-6 leading-[1.4] tracking-tight">
                アプリ事業を<br />
                売却・買収する<br />
                <span className="text-[110px] lg:text-[130px] inline-block leading-[1]">最</span>適解
              </h1>

              {/* Badge */}
              <div className="relative inline-block">
                <div className="inline-flex items-center bg-white rounded-[40px] px-20 py-4 mb-8 shadow-lg">
                  <span className="font-bold text-[19px] text-[#323232]">今すぐ無料査定</span>
                </div>
                {/* Five.png Badge */}
                <img 
                  src="/five.png" 
                  alt="最短5分" 
                  className="absolute -top-8 -left-8 w-[70px] h-[70px]"
                />
              </div>

              {/* Footer Text */}
              <p className="text-[11px] leading-[1.6] opacity-95 max-w-[600px] relative z-10">
                ※POC段階から本格事業化まで、企業の成長フェーズに合わせた柔軟な料金体系<br />
                自社開発実績によるセキュリティチェック・品質担保で安心のサポート<br />
                最短24時間以内の打ち合わせ設定で迅速対応
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgba(50,50,50,0.12)] mt-8">
              <div className="flex gap-6 mb-8 border-b border-gray-200">
                <button 
                  onClick={() => handleTabChange('email')}
                  className={`pb-3 font-semibold text-[15px] ${
                    activeTab === 'email' 
                      ? 'border-b-[3px] border-[#0C3765] text-[#0C3765]' 
                      : 'text-gray-400'
                  }`}
                >
                  メールアドレス
                </button>
                <button 
                  onClick={() => handleTabChange('phone')}
                  className={`pb-3 font-semibold text-[15px] ${
                    activeTab === 'phone' 
                      ? 'border-b-[3px] border-[#0C3765] text-[#0C3765]' 
                      : 'text-gray-400'
                  }`}
                >
                  電話
                </button>
              </div>

              <div className="mb-8">
                {activeTab === 'email' ? (
                  <input
                    type="email"
                    placeholder="例）example@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-[10px] px-4 py-[14px] text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                ) : (
                  <div className="flex gap-2">
                    <select 
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange('countryCode', e.target.value)}
                      className="border border-gray-300 rounded-[10px] px-4 py-[14px] w-[90px] text-[15px] bg-white cursor-pointer focus:outline-none focus:border-gray-400"
                    >
                      <option value="+81">+81</option>
                      <option value="+1">+1</option>
                      <option value="+86">+86</option>
                      <option value="+82">+82</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="例）090 1234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 border border-gray-300 rounded-[10px] px-4 py-[14px] text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                    />
                  </div>
                )}
              </div>

              <button 
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`w-full rounded-full py-[16px] font-semibold text-[16px] mb-6 transition-colors ${
                  isFormValid() 
                    ? 'bg-[#0C3765] text-white cursor-pointer hover:bg-[#0a2d52]' 
                    : 'bg-[#D4E1ED] text-[#7B9DBD] cursor-not-allowed'
                }`}
              >
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
                <span className="text-[#0C3765] font-bold text-[18px]">自社開発実績による品質担保</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">セキュリティチェック体制</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">POC〜本格事業化まで対応</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短24時間で打ち合わせ</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">丸投げ対応可能</span>
              </div>
            </div>
            {/* Item 2セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">自社開発実績による品質担保</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">セキュリティチェック体制</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">POC〜本格事業化まで対応</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短24時間で打ち合わせ</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">丸投げ対応可能</span>
              </div>
            </div>
            {/* Item 3セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">自社開発実績による品質担保</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">セキュリティチェック体制</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">POC〜本格事業化まで対応</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短24時間で打ち合わせ</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">丸投げ対応可能</span>
              </div>
            </div>
            {/* Item 4セット */}
            <div className="flex items-center gap-8 px-4">
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">自社開発実績による品質担保</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">セキュリティチェック体制</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">POC〜本格事業化まで対応</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">最短24時間で打ち合わせ</span>
              </div>
              <div className="bg-white rounded-[12px] px-8 py-4 shadow-sm border border-gray-200">
                <span className="text-[#0C3765] font-bold text-[18px]">丸投げ対応可能</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust and Safety */}
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

      {/* Section 3: Company Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C3765] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold transform rotate-45">
              <span className="transform -rotate-45">1</span>
            </div>
            <h2 className="text-4xl font-bold">企業のニーズに応える柔軟なサービス</h2>
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
                {/* Row 1 - POC対応 */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">POC対応</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">△</td>
                  <td className="p-6 text-center text-3xl">△</td>
                </tr>
                {/* Row 2 - 本格事業化対応 */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">本格事業化対応</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">○</td>
                  <td className="p-6 text-center text-3xl">○</td>
                </tr>
                {/* Row 3 - セキュリティチェック */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">セキュリティチェック</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">△</td>
                  <td className="p-6 text-center text-3xl">△</td>
                </tr>
                {/* Row 4 - 丸投げ対応 */}
                <tr className="border-b">
                  <td className="p-6 font-semibold text-gray-700">丸投げ対応</td>
                  <td className="p-6 bg-[#F2F4F8] border-x-4 border-b-4 border-[#0C3765] text-center">
                    <div className="text-5xl font-bold text-[#0C3765]">◎</div>
                  </td>
                  <td className="p-6 text-center text-3xl">△</td>
                  <td className="p-6 text-center text-3xl">△</td>
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

      {/* Section 5: About moomoo */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-[42px] lg:text-[48px] font-bold mb-4 text-[#323232]">
              AppExitについて
            </h2>
            <p className="text-[#323232] text-[15px] lg:text-[16px] leading-relaxed max-w-[900px] mx-auto">
              AppExitは企業のアプリ・システム開発・M&A専門サービスです。自社開発実績50件以上、累計成約実績500件以上を誇り、POC段階から本格事業化まで企業の成長フェーズに合わせた柔軟なサポートを提供いたします。<br />
              セキュリティチェック体制と迅速な対応力で、多くの企業様から信頼をいただいています。丸投げ対応も可能で、リソース不足の企業様にも安心してご利用いただけます。
            </p>
          </div>

          {/* Banner Placeholder */}
          <div className="mt-12">
            <div className="w-full rounded-[30px] overflow-hidden">
              <img 
                src="/baner.png" 
                alt="AppExitについて" 
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 3 Steps */}
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

      {/* Section 7: FAQ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F2F4F8] to-[#E8ECF1]">
        <div className="max-w-[900px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[42px] lg:text-[48px] font-bold mb-4">
              よくある質問
            </h2>
            <p className="text-gray-600 text-[16px]">
              お客様からよくいただくご質問をまとめました
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: '料金体系について教えてください',
                answer: '完全成功報酬型を採用しており、初期費用・着手金は0円です。成約が成立した際のみ、成約額に応じた手数料をいただきます。POC段階から本格事業化まで、企業の成長フェーズに合わせた柔軟な料金プランをご用意しています。詳しくはお問い合わせください。'
              },
              {
                question: '査定にはどのくらいの時間がかかりますか？',
                answer: '最短1週間以内に査定結果をご提示いたします。アプリの規模や複雑さによって期間は前後しますが、迅速な対応を心がけています。お急ぎの場合は、最短24時間以内の打ち合わせ設定も可能です。'
              },
              {
                question: '守秘義務・セキュリティは大丈夫ですか？',
                answer: 'お客様の情報は厳重に管理しており、秘密保持契約（NDA）を締結した上でお取引を進めます。自社開発実績による技術力で、セキュリティチェックも適切に実施します。また、専用の信託口座で資金管理を行い、お客様の資産を保護しています。'
              },
              {
                question: 'どのようなアプリが対象ですか？',
                answer: 'iOS・Android向けのモバイルアプリ、Webアプリケーション、業務システムなど、幅広いアプリ・システムが対象です。POC段階のアプリから、本格的に事業化されているアプリまで、成長フェーズを問わずご相談いただけます。まずは無料査定でお気軽にご相談ください。'
              },
              {
                question: '成約までの期間はどのくらいですか？',
                answer: '案件によって異なりますが、平均で3〜6ヶ月程度です。査定からマッチング、交渉、契約締結まで、専任のアドバイザーが責任を持ってサポートいたします。スピード重視の場合は、最短2週間での成約実績もございます。'
              },
              {
                question: 'キャンセルは可能ですか？',
                answer: 'はい、可能です。成約前であればいつでもキャンセルいただけます。完全成功報酬型のため、キャンセル料や違約金は一切発生いたしません。お客様のご都合に合わせて柔軟に対応させていただきます。'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] overflow-hidden border-2 border-gray-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0C3765] text-white flex items-center justify-center font-bold text-sm">
                      Q
                    </span>
                    <span className="font-bold text-[18px] text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-[#0C3765] transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-[#0C3765] flex items-center justify-center font-bold text-sm">
                        A
                      </span>
                      <p className="text-gray-700 text-[15px] leading-[1.8] pt-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-[15px] mb-4">
              その他のご質問がございましたら、お気軽にお問い合わせください
            </p>
            <button className="inline-flex items-center bg-[#0C3765] text-white rounded-full px-12 py-4 font-bold text-[16px] hover:bg-[#0a2d52] transition-colors shadow-lg">
              無料で相談する
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

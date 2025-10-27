'use client';

interface HeroSectionProps {
  activeTab: string;
  formData: {
    email: string;
    phone: string;
    countryCode: string;
  };
  onTabChange: (tab: string) => void;
  onInputChange: (field: string, value: string) => void;
  onSubmit: () => void;
  isFormValid: () => boolean;
}

export default function HeroSection({
  activeTab,
  formData,
  onTabChange,
  onInputChange,
  onSubmit,
  isFormValid
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-[600px] lg:min-h-[600px] md:min-h-[700px] sm:min-h-[800px]">
      {/* Person Image - Mobile: top right, Desktop: centered */}
      <div className="absolute top-[202px] right-4 w-[200px] h-[220px] sm:top-[180px] sm:right-4 sm:w-[200px] sm:h-[220px] md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:ml-8 md:w-[420px] md:h-[480px] lg:w-[520px] lg:h-[580px] pointer-events-none z-10 md:z-0">
        <img
          src="/woman2.png"
          alt="女性の画像"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="relative pt-4 sm:pt-6 md:pt-8">
            <h1 className="text-[54px] sm:text-[64px] md:text-[76px] lg:text-[92px] font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.4] tracking-tight">
              アプリ事業を<br />
              売却・買収する<br />
              <span className="text-[92px] sm:text-[108px] md:text-[128px] lg:text-[158px] inline-block leading-[1]">最</span>適解
            </h1>

            {/* Badge */}
            <div className="relative inline-block">
              <div className="inline-flex items-center bg-white rounded-[40px] px-10 sm:px-14 md:px-16 lg:px-20 py-3 sm:py-3.5 md:py-4 mb-6 sm:mb-7 md:mb-8 shadow-lg">
                <span className="font-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-[#323232]">今すぐ無料査定</span>
              </div>
              {/* Five.png Badge */}
              <img
                src="/five.png"
                alt="最短5分"
                className="absolute -top-6 -left-4 w-[50px] h-[50px] sm:-top-7 sm:-left-5 sm:w-[60px] sm:h-[60px] md:-top-8 md:-left-6 md:w-[70px] md:h-[70px]"
              />
            </div>

            {/* Footer Text */}
            <p className="hidden md:block text-[11px] leading-[1.6] opacity-95 max-w-[600px] relative z-10">
              ※アプリ・SaaS・Webサービスに特化したM&A支援で豊富な実績<br />
              IT企業としての総合技術力でコードレビュー・セキュリティチェックまで一括対応<br />
              お問い合わせから30分以内に初回返信で迅速対応
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[20px] p-5 sm:p-5.5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] mt-4 sm:mt-6 md:mt-8">
            <div className="flex gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-7 md:mb-8 border-b border-gray-200">
              <button
                onClick={() => onTabChange('email')}
                className={`pb-2 sm:pb-2.5 md:pb-3 font-semibold text-[13px] sm:text-[14px] md:text-[15px] ${
                  activeTab === 'email'
                    ? 'border-b-[3px] border-[#0C3765] text-[#0C3765]'
                    : 'text-gray-400'
                }`}
              >
                メールアドレス
              </button>
              <button
                onClick={() => onTabChange('phone')}
                className={`pb-2 sm:pb-2.5 md:pb-3 font-semibold text-[13px] sm:text-[14px] md:text-[15px] ${
                  activeTab === 'phone'
                    ? 'border-b-[3px] border-[#0C3765] text-[#0C3765]'
                    : 'text-gray-400'
                }`}
              >
                電話
              </button>
            </div>

            <div className="mb-6 sm:mb-7 md:mb-8">
              {activeTab === 'email' ? (
                <input
                  type="email"
                  placeholder="例）example@company.com"
                  value={formData.email}
                  onChange={(e) => onInputChange('email', e.target.value)}
                  className="w-full border border-gray-300 rounded-[10px] px-3 sm:px-3.5 md:px-4 py-[12px] sm:py-[13px] md:py-[14px] text-[13px] sm:text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                />
              ) : (
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => onInputChange('countryCode', e.target.value)}
                    className="border border-gray-300 rounded-[10px] px-2 sm:px-3 md:px-4 py-[12px] sm:py-[13px] md:py-[14px] w-[70px] sm:w-[80px] md:w-[90px] text-[13px] sm:text-[14px] md:text-[15px] bg-white cursor-pointer focus:outline-none focus:border-gray-400"
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
                    onChange={(e) => onInputChange('phone', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-[10px] px-3 sm:px-3.5 md:px-4 py-[12px] sm:py-[13px] md:py-[14px] text-[13px] sm:text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              )}
            </div>

            <button
              onClick={onSubmit}
              disabled={!isFormValid()}
              className={`w-full rounded-full py-[14px] sm:py-[15px] md:py-[16px] font-semibold text-[14px] sm:text-[15px] md:text-[16px] mb-5 sm:mb-5.5 md:mb-6 transition-colors ${
                isFormValid()
                  ? 'bg-[#0C3765] text-white cursor-pointer hover:bg-[#0a2d52]'
                  : 'bg-[#D4E1ED] text-[#7B9DBD] cursor-not-allowed'
              }`}
            >
              次へ
            </button>

            <div className="text-center text-[11px] sm:text-[12px] md:text-[13px] text-gray-600 mb-4 sm:mb-4.5 md:mb-5">
              すでにアカウントをお持ちですか？ <a href="#" className="text-[#0C3765] hover:underline">ログイン</a>
            </div>

            <div className="text-center text-[10px] sm:text-[10.5px] md:text-[11px] text-gray-500 leading-[1.6]">
              <a href="#" className="underline hover:no-underline">プライバシーポリシー</a>・<a href="#" className="underline hover:no-underline">利用規約</a>に同意します
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

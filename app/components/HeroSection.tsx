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
                onClick={() => onTabChange('email')}
                className={`pb-3 font-semibold text-[15px] ${
                  activeTab === 'email'
                    ? 'border-b-[3px] border-[#0C3765] text-[#0C3765]'
                    : 'text-gray-400'
                }`}
              >
                メールアドレス
              </button>
              <button
                onClick={() => onTabChange('phone')}
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
                  onChange={(e) => onInputChange('email', e.target.value)}
                  className="w-full border border-gray-300 rounded-[10px] px-4 py-[14px] text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                />
              ) : (
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => onInputChange('countryCode', e.target.value)}
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
                    onChange={(e) => onInputChange('phone', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-[10px] px-4 py-[14px] text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              )}
            </div>

            <button
              onClick={onSubmit}
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
  );
}

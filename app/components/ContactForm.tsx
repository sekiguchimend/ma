'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.includes('@') && 
           formData.message.trim() !== '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 成功ページにリダイレクト
        window.location.href = '/contact/success';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0C3765] via-[#1a5080] to-[#061a2e] text-white overflow-hidden min-h-screen">
      {/* ホームに戻るボタン */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-[13px] sm:text-[14px] font-medium text-white transition-all duration-200 hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          ホームに戻る
        </a>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="relative pt-2 sm:pt-4 md:pt-6 text-center lg:text-left lg:flex-1">
            <h1 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold mb-3 sm:mb-4 md:mb-5 leading-[1.4] tracking-tight">
              <span className="text-[#4A90E2]">c</span>ontact<br />
              お問い合わせ
            </h1>
            
            <div className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] mb-6 sm:mb-7 md:mb-8 leading-[1.6] opacity-95">
              <p className="mb-4">
                アプリ事業の売却・買収に関するご相談は<br />
                お気軽にお問い合わせください。
              </p>
              <p>
                専門スタッフが迅速にご対応いたします。
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0C3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold">メールでのお問い合わせ</p>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] opacity-80">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0C3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold">お電話でのお問い合わせ</p>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] opacity-80">03-1234-5678</p>
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] opacity-70">平日 9:00-18:00</p>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <p className="hidden lg:block text-[10px] leading-[1.6] opacity-95 max-w-[500px] relative z-10 mt-8 text-center lg:text-left">
              ※お問い合わせから30分以内に初回返信で迅速対応<br />
              IT企業としての総合技術力でコードレビュー・セキュリティチェックまで一括対応<br />
              アプリ・SaaS・Webサービスに特化したM&A支援で豊富な実績
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[16px] p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[500px] lg:flex-shrink-0">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C3765] mb-4 sm:mb-5 md:mb-6">
              お問い合わせフォーム
            </h2>

            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[8px]">
                <p className="text-red-800 text-[13px] sm:text-[14px]">
                  送信に失敗しました。しばらく時間をおいて再度お試しください。
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765]"
                  placeholder="山田 太郎"
                  required
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765]"
                  placeholder="example@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  会社名
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765]"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  電話番号
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765]"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  件名
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 bg-white focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765]"
                >
                  <option value="">選択してください</option>
                  <option value="売却相談">アプリ事業の売却相談</option>
                  <option value="買収相談">アプリ事業の買収相談</option>
                  <option value="査定依頼">無料査定の依頼</option>
                  <option value="その他">その他のお問い合わせ</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-semibold text-gray-700 mb-1.5">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="w-full border border-gray-300 rounded-[8px] px-3 py-[10px] sm:py-[12px] text-[13px] sm:text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0C3765] focus:ring-1 focus:ring-[#0C3765] resize-vertical"
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full rounded-full py-[12px] sm:py-[14px] font-semibold text-[13px] sm:text-[14px] md:text-[15px] transition-colors ${
                  isFormValid() && !isSubmitting
                    ? 'bg-[#0C3765] text-white cursor-pointer hover:bg-[#0a2d52]'
                    : 'bg-[#D4E1ED] text-[#7B9DBD] cursor-not-allowed'
                }`}
              >
                {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
              </button>
            </form>

            <div className="text-center text-[10px] sm:text-[11px] text-gray-500 leading-[1.6] mt-4">
              <a href="#" className="underline hover:no-underline">プライバシーポリシー</a>・<a href="#" className="underline hover:no-underline">利用規約</a>に同意の上、送信してください
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

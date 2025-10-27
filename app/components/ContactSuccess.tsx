'use client';

export default function ContactSuccess() {
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

      <div className="max-w-[600px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center">
          
          {/* 成功アイコン */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-8 sm:mb-10 md:mb-12 shadow-2xl animate-bounce">
            <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* メインタイトル */}
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 sm:mb-8 md:mb-10 leading-[1.2] tracking-tight">
            <span className="text-[#4A90E2]">t</span>hank you
          </h1>

          {/* シンプルメッセージ */}
          <p className="text-[18px] sm:text-[20px] md:text-[22px] mb-12 sm:mb-16 md:mb-20 leading-[1.5] opacity-90 font-light">
            お問い合わせを受け付けました
          </p>

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0C3765] rounded-full px-8 sm:px-10 py-4 sm:py-5 font-semibold text-[15px] sm:text-[16px] md:text-[17px] transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

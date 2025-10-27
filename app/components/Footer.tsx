export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 sm:py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Company Name */}
          <div>
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-extrabold text-[#0C3765]">AppExit</h3>
          </div>

          {/* Section Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 text-[12px] sm:text-[13px] md:text-[14px]">
            <a href="#service" className="text-gray-600 hover:text-[#0C3765] transition-colors">サービス</a>
            <a href="#reasons" className="text-gray-600 hover:text-[#0C3765] transition-colors">選ばれる理由</a>
            <a href="#steps" className="text-gray-600 hover:text-[#0C3765] transition-colors">ご利用の流れ</a>
            <a href="#faq" className="text-gray-600 hover:text-[#0C3765] transition-colors">FAQ</a>
          </div>

          {/* SNS Links */}
          <div className="flex gap-2 sm:gap-2.5 md:gap-3">
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-[#0C3765] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-[#0C3765] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-[#0C3765] hover:text-white transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-4 sm:pt-5 md:pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-3.5 md:gap-4 text-[11px] sm:text-[12px] md:text-[13px]">
            <div className="flex gap-4 sm:gap-5 md:gap-6">
              <a href="#" className="text-gray-500 hover:text-[#0C3765] transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-gray-500 hover:text-[#0C3765] transition-colors">利用規約</a>
            </div>
            <span className="text-gray-400 hidden md:inline">|</span>
            <p className="text-gray-500">© 2024 AppExit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

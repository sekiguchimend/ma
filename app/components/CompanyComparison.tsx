'use client';

import { useEffect, useRef, useState } from 'react';

export default function CompanyComparison() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true); // テスト用に初期値をtrueに
  const [isVisible, setIsVisible] = useState(true); // アニメーション用の状態
  const [bgOpacity, setBgOpacity] = useState(0.6); // 背景色の透明度

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // スマホ画面でスクロール可能かチェック
    const checkScrollable = () => {
      const isScrollable = container.scrollWidth > container.clientWidth;
      const isMobile = window.innerWidth < 768;
      console.log('Scroll check:', { isScrollable, isMobile, scrollWidth: container.scrollWidth, clientWidth: container.clientWidth });
      setShowScrollHint(isScrollable && isMobile);
    };

    // スクロールイベントでヒントを非表示
    const handleScroll = () => {
      if (container.scrollLeft > 0) {
        setIsVisible(false);
        // アニメーション完了後に要素を削除
        setTimeout(() => {
          setShowScrollHint(false);
        }, 200);
      }
    };

    // 少し遅延させてDOM要素が完全に描画されてからチェック
    const timer = setTimeout(checkScrollable, 100);
    
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScrollable);

    return () => {
      clearTimeout(timer);
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  // 背景色アニメーション用のuseEffect
  useEffect(() => {
    if (!showScrollHint) return;

    const animateBackground = () => {
      let direction = 1; // 1: 濃くなる, -1: 薄くなる
      let currentOpacity = 0.6;

      const interval = setInterval(() => {
        currentOpacity += direction * 0.02;
        
        if (currentOpacity >= 0.9) {
          direction = -1;
          currentOpacity = 0.9;
        } else if (currentOpacity <= 0.6) {
          direction = 1;
          currentOpacity = 0.6;
        }
        
        setBgOpacity(currentOpacity);
      }, 50); // 50msごとに更新

      return interval;
    };

    const interval = animateBackground();
    return () => clearInterval(interval);
  }, [showScrollHint]);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-[#0C3765] text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-2xl sm:text-2xl md:text-3xl font-bold transform rotate-45 flex-shrink-0">
            <span className="transform -rotate-45">1</span>
          </div>
          <h2 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-4xl font-bold">企業のニーズに応える柔軟なサービス</h2>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide" 
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 sm:p-3 md:p-4 text-left font-normal text-gray-600 text-[12px] sm:text-[13px] md:text-[14px]">判断基準</th>
                <th className="p-2 sm:p-3 md:p-4 bg-[#F2F4F8] border-2 sm:border-3 md:border-4 border-[#0C3765]">
                  <div className="bg-[#0C3765] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 whitespace-nowrap mx-auto w-fit">
                    <span className="text-lg sm:text-xl md:text-2xl">👑</span>
                    <span className="font-bold text-[13px] sm:text-[14px] md:text-base">AppExit</span>
                  </div>
                </th>
                <th className="p-2 sm:p-3 md:p-4 font-normal text-gray-600 text-[12px] sm:text-[13px] md:text-[14px]">Y社</th>
                <th className="p-2 sm:p-3 md:p-4 font-normal text-gray-600 text-[12px] sm:text-[13px] md:text-[14px]">B社</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 - POC対応 */}
              <tr className="border-b">
                <td className="p-3 sm:p-4 md:p-6 font-semibold text-gray-700 text-[13px] sm:text-[14px] md:text-[15px]">POC対応</td>
                <td className="p-3 sm:p-4 md:p-6 bg-[#F2F4F8] border-x-2 sm:border-x-3 md:border-x-4 border-[#0C3765] text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3765]">◎</div>
                </td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
              </tr>
              {/* Row 2 - 本格事業化対応 */}
              <tr className="border-b">
                <td className="p-3 sm:p-4 md:p-6 font-semibold text-gray-700 text-[13px] sm:text-[14px] md:text-[15px]">本格事業化対応</td>
                <td className="p-3 sm:p-4 md:p-6 bg-[#F2F4F8] border-x-2 sm:border-x-3 md:border-x-4 border-[#0C3765] text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3765]">◎</div>
                </td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">○</td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">○</td>
              </tr>
              {/* Row 3 - セキュリティチェック */}
              <tr className="border-b">
                <td className="p-3 sm:p-4 md:p-6 font-semibold text-gray-700 text-[13px] sm:text-[14px] md:text-[15px]">セキュリティチェック</td>
                <td className="p-3 sm:p-4 md:p-6 bg-[#F2F4F8] border-x-2 sm:border-x-3 md:border-x-4 border-[#0C3765] text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3765]">◎</div>
                </td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
              </tr>
              {/* Row 4 - 丸投げ対応 */}
              <tr className="border-b">
                <td className="p-3 sm:p-4 md:p-6 font-semibold text-gray-700 text-[13px] sm:text-[14px] md:text-[15px]">丸投げ対応</td>
                <td className="p-3 sm:p-4 md:p-6 bg-[#F2F4F8] border-x-2 border-b-2 sm:border-x-3 sm:border-b-3 md:border-x-4 md:border-b-4 border-[#0C3765] text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3765]">◎</div>
                </td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
                <td className="p-3 sm:p-4 md:p-6 text-center text-2xl sm:text-2xl md:text-3xl">△</td>
              </tr>
            </tbody>
          </table>
          </div>
          
          {/* 横スクロールヒント - スマホでのみ表示 */}
          {showScrollHint && (
            <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none z-20 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div 
                className="text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg"
                style={{
                  backgroundColor: `rgba(12, 55, 101, ${bgOpacity})`,
                  transition: 'background-color 0.1s ease-in-out'
                }}
              >
                <span className="text-lg">⇄</span>
                <span className="text-xs">スクロール</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

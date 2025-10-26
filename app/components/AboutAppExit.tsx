export default function AboutAppExit() {
  return (
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
  );
}

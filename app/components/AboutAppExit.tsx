export default function AboutAppExit() {
  return (
    <section id="service" className="hidden sm:block py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold mb-3 sm:mb-3.5 md:mb-4 text-[#323232]">
            AppExitについて
          </h2>
          <p className="text-[#323232] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed max-w-[900px] mx-auto">
            AppExitはアプリ・SaaS・Webサービスに特化したM&A支援サービスです。個人開発者から上場企業まで、幅広い売却・譲渡をサポートしてきた豊富な実績があります。<br />
            アプリ特化型だからこそ、トラフィック構造や収益モデル、ストア上のアルゴリズムなどを深く理解し、最適な買い手候補をスピーディーに提案できます。お問い合わせから30分以内に初回返信し、オンラインでの商談はもちろん、都内を中心に対面での面談も可能です。
          </p>
        </div>

        {/* Banner Placeholder */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="w-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden">
            <img
              src="/baner.png"
              alt="AppExitについて"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

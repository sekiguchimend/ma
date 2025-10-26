'use client';

interface FAQProps {
  openFaqIndex: number | null;
  onToggle: (index: number | null) => void;
}

export default function FAQ({ openFaqIndex, onToggle }: FAQProps) {
  const faqs = [
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
  ];

  return (
    <section className="py-20 lg:py-28 relative" style={{
      background: `
        radial-gradient(circle, rgba(12, 55, 101, 0.12) 2px, transparent 2px),
        linear-gradient(to bottom, #F2F4F8, #E8ECF1)
      `,
      backgroundSize: '40px 40px, 100% 100%'
    }}>
      <div className="max-w-[900px] mx-auto px-8 text-center">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex flex-col justify-center">
          <div className="text-[56px] lg:text-[64px] font-bold">
            <span className="text-[#0C3765]">F</span>
            <span className="text-gray-800">AQ</span>
          </div>
          <h2 className="text-[32px] lg:text-[36px] font-bold">
            よくある質問
          </h2>
          </div>
          <p className="text-gray-600 text-[16px] text-center">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden border-2 border-gray-200 shadow-sm"
            >
              <button
                onClick={() => onToggle(openFaqIndex === index ? null : index)}
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
  );
}

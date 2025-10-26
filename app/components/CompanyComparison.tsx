export default function CompanyComparison() {
  return (
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
  );
}

import { SKILL_DATA } from "@/app/data/skill-data";

export default function Skill() {
  return (
    <section className="min-h-screen bg-[#F7F6F2] dark:bg-zinc-900 flex items-center justify-center py-20">
      <div className="container md:max-w-[60%] mx-auto px-6">

        {/* Title */}
        <h2 className="text-[34px] lg:text-[70px] font-bold text-center leading-tight mb-10">
          <span className="relative inline-block">My Skill & Stack</span>
        </h2>

        {/* Card */}
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 backdrop-blur-sm shadow-sm rounded-lg p-1 border border-white/40">
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="text-[18px] lg:text-[24px] ">
                  <th className="py-3 px-4 font-semibold border-r border-gray-300 border-dashed">
                    Category
                  </th>
                  <th className="py-3 px-4 font-semibold">Tools & Tech</th>
                </tr>
              </thead>

              <tbody className="">
                {SKILL_DATA.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-zinc-50 transition ${
                      index !== SKILL_DATA.length - 1
                        ? "border-b border-gray-300 border-dashed"
                        : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-medium text-[18px] text-zinc-500 lg:text-[24px] border-r border-gray-300 border-dashed">
                      {row.category}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        {row.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 rounded-md flex items-center gap-2"
                          >
                            {item.icon && (
                              <item.icon className="w-4 h-4 " />
                            )}
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

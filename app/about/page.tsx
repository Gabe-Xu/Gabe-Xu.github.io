export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-14 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-20 pb-16 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-xiaomi-text mb-6 tracking-tighter">
            关于我
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400">
            了解我的故事和技术旅程
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-20 animate-slide-up">
          <div className="w-32 h-32 mb-8 relative">
            <img
              src="/avatar.jpg"
              alt="Gabriel"
              className="w-full h-full object-cover rounded-full"
            />
            {/* 在线状态指示器 */}
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
          <h2 className="text-4xl font-black text-xiaomi-text mb-4 tracking-tight">Gabriel</h2>
          <p className="text-xl text-gray-600">
            全栈开发者 | UI/UX设计师 | 技术写作者
          </p>
        </div>

        {/* Bio */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-4xl font-black text-xiaomi-text mb-8 tracking-tight">我的故事</h2>
          <div className="space-y-6 text-gray-600 text-lg max-w-4xl">
            <p>
              你好！我是Gabriel，一名热爱技术的开发者。从接触编程的那一刻起，我就被代码创造价值的能力深深吸引。
            </p>
            <p>
              我专注于前端开发，特别是React生态系统，同时对UI/UX设计充满热情。我相信优秀的产品应该兼具美观的外表和流畅的体验。
            </p>
            <p>
              在这个博客中，我会分享我的技术见解、项目经验以及对设计的思考。希望我的分享能够帮助到更多的开发者。
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-4xl font-black text-xiaomi-text mb-12 tracking-tight">技能专长</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="p-10 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h3 className="text-2xl font-bold text-xiaomi-text mb-6">前端开发</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white text-xiaomi-text font-medium text-sm border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-xiaomi-dark text-white">
              <h3 className="text-2xl font-bold mb-6">设计工具</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 text-white font-medium text-sm border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-xiaomi-orange text-white">
              <h3 className="text-2xl font-bold mb-6">后端技术</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST API'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 text-white font-medium text-sm border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h3 className="text-2xl font-bold text-xiaomi-text mb-6">开发工具</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Docker', 'Vercel', 'GitHub'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white text-xiaomi-text font-medium text-sm border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-4xl font-black text-xiaomi-text mb-12 tracking-tight">经历时间线</h2>
          <div className="space-y-12 border-l-2 border-gray-200 pl-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-4 h-4 bg-xiaomi-orange"></div>
              <span className="text-sm text-gray-400 mb-2 block">2024 - 至今</span>
              <h3 className="text-2xl font-bold text-xiaomi-text mb-2">自由开发者</h3>
              <p className="text-gray-600">
                专注于Web应用开发，为多个客户提供技术咨询和开发服务。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-4 h-4 bg-xiaomi-dark"></div>
              <span className="text-sm text-gray-400 mb-2 block">2022 - 2024</span>
              <h3 className="text-2xl font-bold text-xiaomi-text mb-2">前端工程师</h3>
              <p className="text-gray-600">
                在一家科技公司负责前端架构设计和核心功能开发。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-4 h-4 bg-gray-400"></div>
              <span className="text-sm text-gray-400 mb-2 block">2020 - 2022</span>
              <h3 className="text-2xl font-bold text-xiaomi-text mb-2">初级开发者</h3>
              <p className="text-gray-600">
                开始职业生涯，参与多个项目的开发，快速成长。
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-xiaomi-dark text-white p-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">让我们一起创造</h2>
          <p className="text-gray-400 mb-10 text-lg">
            如果你对合作或交流感兴趣，欢迎随时与我联系
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-4 bg-xiaomi-orange text-white hover:bg-xiaomi-orange-hover transition-all duration-200 font-medium"
          >
            联系我
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-14 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-20 pb-16 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-xiaomi-text mb-6 tracking-tighter">
            关于
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

        {/* Contact Information */}
        <div className="animate-slide-up">
          <h2 className="text-4xl font-black text-xiaomi-text mb-12 tracking-tight">联系方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-xiaomi-dark text-white p-10">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">邮箱</h3>
              <p className="text-gray-400">gabe_xu@qq.com</p>
            </div>

            {/* Location */}
            <div className="bg-xiaomi-orange text-white p-10">
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">位置</h3>
              <p className="text-white/90">中国，汕头</p>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 p-10">
              <div className="w-12 h-12 bg-xiaomi-dark flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-xiaomi-text mb-4">社交媒体</h3>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/Gabe-Xu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 flex items-center justify-center hover:border-xiaomi-orange transition-colors"
                >
                  <svg className="w-7 h-7 text-xiaomi-text" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://x.com/Gabe__Xu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 flex items-center justify-center hover:border-xiaomi-orange transition-colors"
                >
                  <svg className="w-6 h-6 text-xiaomi-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 flex items-center justify-center hover:border-xiaomi-orange transition-colors"
                >
                  <svg className="w-6 h-6 text-xiaomi-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

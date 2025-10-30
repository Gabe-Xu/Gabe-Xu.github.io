export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-14 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 md:pb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            关于
          </h1>
          <p className="text-xl text-gray-600">
            了解我的故事和技术旅程
          </p>
        </div>

        {/* Profile Section */}
        <div id="profile" className="mb-12 md:mb-20 animate-slide-up scroll-mt-20">
          <div className="w-32 h-32 mb-8 relative select-none">
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
          <h2 className="text-4xl font-black font-logo text-xiaomi-text mb-4 tracking-tight">Gabriel</h2>
          <p className="text-xl text-gray-600">
            全栈开发者 | UI/UX设计师 | 技术写作者
          </p>
        </div>

        {/* Bio */}
        <div className="mb-12 md:mb-20 animate-slide-up">
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
        <div id="skills" className="mb-12 md:mb-20 animate-slide-up scroll-mt-20">
          <h2 className="text-4xl font-black text-xiaomi-text mb-12 tracking-tight">技能专长</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-10 bg-gray-100">
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

            <div className="p-10 bg-gray-100">
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
        <div className="mb-12 md:mb-20 animate-slide-up">
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
        <div id="contact" className="animate-slide-up scroll-mt-20">
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
            <div className="bg-gray-100 p-10">
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
                  href="https://www.zhihu.com/people/gabexu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 flex items-center justify-center hover:border-xiaomi-orange transition-colors"
                  aria-label="知乎"
                >
                  <svg className="w-6 h-6 text-xiaomi-text" fill="currentColor" viewBox="0 0 1024 1024">
                    <path d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z"/>
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

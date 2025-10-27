export default function LinksPage() {
  const linkCategories = [
    {
      title: '开发工具',
      links: [
        { name: 'GitHub', url: 'https://github.com', description: '全球最大的代码托管平台' },
        { name: 'VS Code', url: 'https://code.visualstudio.com', description: '强大的代码编辑器' },
        { name: 'Figma', url: 'https://figma.com', description: '现代化的设计工具' },
      ]
    },
    {
      title: '前端框架',
      links: [
        { name: 'React', url: 'https://react.dev', description: '用于构建用户界面的JavaScript库' },
        { name: 'Next.js', url: 'https://nextjs.org', description: 'React生产级框架' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com', description: '实用优先的CSS框架' },
      ]
    },
    {
      title: '学习资源',
      links: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Web开发权威文档' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: '开发者问答社区' },
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org', description: '免费学习编程' },
      ]
    },
    {
      title: '设计灵感',
      links: [
        { name: 'Dribbble', url: 'https://dribbble.com', description: '设计师作品展示平台' },
        { name: 'Behance', url: 'https://behance.net', description: 'Adobe创意作品平台' },
        { name: 'Awwwards', url: 'https://awwwards.com', description: '优秀网页设计奖' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-14 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-20 pb-16 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-xiaomi-text mb-6 tracking-tighter">
            友情链接
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400">
            我常用的工具和推荐的资源
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-16">
          {linkCategories.map((category, idx) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <h2 className="text-3xl font-black text-xiaomi-text mb-8 tracking-tight">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 p-8 hover:border-xiaomi-orange hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-xiaomi-text group-hover:text-xiaomi-orange transition-colors">
                        {link.name}
                      </h3>
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-xiaomi-orange transition-colors flex-shrink-0"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default function ToolsPage() {
  const tools = [
    {
      name: 'GitHub',
      description: '代码托管平台',
      url: 'https://github.com',
      icon: '🐙',
      category: '开发工具'
    },
    {
      name: 'VS Code',
      description: '代码编辑器',
      url: 'https://code.visualstudio.com',
      icon: '💻',
      category: '开发工具'
    },
    {
      name: 'Figma',
      description: '在线设计工具',
      url: 'https://figma.com',
      icon: '🎨',
      category: '设计工具'
    },
    {
      name: 'ChatGPT',
      description: 'AI 对话助手',
      url: 'https://chat.openai.com',
      icon: '🤖',
      category: 'AI 工具'
    },
  ]

  const categories = ['全部工具', '开发工具', '设计工具', 'AI 工具']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-14 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 md:pb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-6 tracking-tight">
            常用工具
          </h1>
          <p className="text-xl text-gray-600">
            我的日常工具箱
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {tools.map((tool, idx) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-xiaomi-orange transition-all group"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl">{tool.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-xiaomi-text group-hover:text-xiaomi-orange transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-400">{tool.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


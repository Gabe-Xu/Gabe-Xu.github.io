'use client'

import { useState } from 'react'

export default function ToolsPage() {
  const tools = [
    {
      name: 'ChatGPT',
      description: 'AI 对话助手',
      url: 'https://chat.openai.com',
      icon: '🤖',
      category: 'AI 工具'
    },
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
  ]

  const categories = ['全部', 'AI', '开发', '设计']
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredTools = selectedCategory === '全部' 
    ? tools 
    : tools.filter(item => {
        if (selectedCategory === 'AI') return item.category === 'AI 工具'
        if (selectedCategory === '开发') return item.category === '开发工具'
        if (selectedCategory === '设计') return item.category === '设计工具'
        return false
      })

  return (
    <div className="bg-[#fafbfc] pt-14 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-6 md:pb-10 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            常用工具
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-10">
          {categories.map((category) => {
            const count = category === '全部' 
              ? tools.length 
              : category === 'AI' 
                ? tools.filter(item => item.category === 'AI 工具').length
                : category === '开发'
                  ? tools.filter(item => item.category === '开发工具').length
                  : tools.filter(item => item.category === '设计工具').length
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-xiaomi-orange text-white shadow-md'
                    : 'bg-white text-xiaomi-text border border-gray-200 hover:border-xiaomi-orange hover:text-xiaomi-orange'
                }`}
              >
                {category}
                <span className={`ml-2 text-xs ${
                  selectedCategory === category ? 'text-white/70' : 'text-gray-400'
                }`}>
                  ({count})
                </span>
              </button>
            )
          })}
          </div>
        </div>

        {/* Tools Grid - 模仿友情链接布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 p-6 hover:border-xiaomi-orange hover:shadow-lg transition-all flex items-center gap-4 h-[104px]"
              title={`${tool.name} - ${tool.description}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex-shrink-0 rounded-full border-2 border-gray-200 flex items-center justify-center text-3xl bg-gray-50">
                {tool.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-bold text-xiaomi-text group-hover:text-xiaomi-orange transition-colors truncate">
                    {tool.name}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-xiaomi-orange transition-colors flex-shrink-0 ml-2"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-1">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


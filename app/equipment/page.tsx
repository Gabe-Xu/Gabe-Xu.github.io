'use client'

import { useState } from 'react'

export default function EquipmentPage() {
  const equipment = [
    {
      name: 'Acer Nitro AN515-57',
      category: '电脑',
      spec: 'i5-11400H / RTX 3050 / 16GB RAM',
      description: '性能强劲的游戏本，兼顾开发和娱乐需求',
      image: '/equipment/acer-nitro.png',
      emoji: '💻',
      color: 'gray',
      link: 'https://www.acer.com/us-en/support/product-support/AN515-57'
    },
    {
      name: 'iQOO Z3',
      category: '手机',
      spec: '星云 / 12GB + 256GB',
      description: '高性能游戏手机，流畅的日常使用体验',
      image: '/equipment/iqoo-z3.png',
      emoji: '📱',
      color: 'gray',
      link: 'https://www.vivo.com.cn/vivo/iqooz3/'
    },
    {
      name: 'iPad Air',
      category: '平板',
      spec: '第五代 / 256GB / Apple Pencil',
      description: '绘图、笔记和轻度办公的便携选择',
      image: '',
      emoji: '📲',
      color: 'gray'
    },
    {
      name: 'Magic Keyboard',
      category: '外设',
      spec: '触控 ID / 中文布局',
      description: '打字体验舒适，无线连接稳定',
      image: '',
      emoji: '⌨️',
      color: 'gray'
    },
    {
      name: 'Magic Mouse',
      category: '外设',
      spec: '第二代 / 白色',
      description: '触控手势流畅，设计简约',
      image: '',
      emoji: '🖱️',
      color: 'gray'
    },
    {
      name: 'AirPods Pro',
      category: '音频',
      spec: '第二代 / USB-C',
      description: '主动降噪，音质出色，续航持久',
      image: '',
      emoji: '🎧',
      color: 'gray'
    },
    {
      name: 'Dell UltraSharp 27"',
      category: '显示器',
      spec: '4K IPS / 色域 99% sRGB',
      description: '精准色彩，适合设计和开发工作',
      image: '',
      emoji: '🖥️',
      color: 'gray'
    },
    {
      name: 'Apple Watch Series 9',
      category: '穿戴',
      spec: 'GPS / 45mm',
      description: '健康监测，通知提醒，运动记录',
      image: '',
      emoji: '⌚',
      color: 'gray'
    },
    {
      name: 'Samsung T7 SSD',
      category: '存储',
      spec: '2TB / USB 3.2',
      description: '便携快速，项目备份和文件传输',
      image: '',
      emoji: '💾',
      color: 'gray'
    },
  ]

  const categories = ['全部装备', '电脑', '手机', '平板', '外设', '音频', '显示器', '穿戴', '存储']
  const [selectedCategory, setSelectedCategory] = useState('全部装备')

  const filteredEquipment = selectedCategory === '全部装备' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#fafbfc] pt-14 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 md:pb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            我的装备
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            分享我日常使用的数码装备和工具
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const count = category === '全部装备' 
                ? equipment.length 
                : equipment.filter(item => item.category === category).length
              
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

        {/* Equipment Grid - Apple Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item, idx) => {
            const CardComponent = item.link ? (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group animate-slide-up block"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className={`aspect-[5/3] flex items-center justify-center bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500 p-8`}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ height: '150px' }}
                    />
                  ) : (
                    <div className="text-8xl group-hover:scale-105 transition-transform duration-500">
                      {item.emoji}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-xiaomi-text mb-2 group-hover:text-xiaomi-orange transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {item.spec}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={item.name}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className={`aspect-[5/3] flex items-center justify-center bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500 p-8`}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ height: '150px' }}
                    />
                  ) : (
                    <div className="text-8xl group-hover:scale-105 transition-transform duration-500">
                      {item.emoji}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-xiaomi-text mb-2 group-hover:text-xiaomi-orange transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {item.spec}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
            
            return CardComponent
          })}
        </div>

        {/* No Results */}
        {filteredEquipment.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            该分类暂无装备
          </div>
        )}
      </div>
    </div>
  )
}



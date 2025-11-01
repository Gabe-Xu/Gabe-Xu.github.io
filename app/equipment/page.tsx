'use client'

import { useState } from 'react'

export default function EquipmentPage() {
  const equipment = [
    {
      name: '宏碁暗影骑士 5 AN515-57',
      category: '电脑',
      spec: 'i5-11400H / RTX 3050 / 16GB 内存',
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
      name: '狼蛛 S98 Pro 机械键盘',
      category: '外设',
      spec: '星海蓝 / 焦糖布丁轴',
      description: '电竞级机械轴体，RGB 背光，打字手感出色',
      image: '/equipment/aula-s98pro.png',
      emoji: '⌨️',
      color: 'blue',
      link: 'https://www.aulacn.com/product-detail/s98pro'
    },
    {
      name: '罗技 POP 无线鼠标',
      category: '外设',
      spec: '热力黄 / 无线蓝牙',
      description: '时尚配色，握感舒适，办公娱乐两相宜',
      image: '/equipment/logitech-pop.png',
      emoji: '🖱️',
      color: 'yellow',
      link: 'https://www.logitech.com/zh-cn/shop/p/pop-wireless-mouse.910-006420'
    },
    {
      name: '南卡 Runner CC4',
      category: '音频',
      spec: '深灰色 / 骨传导耳机',
      description: '开放式佩戴，久戴不累，运动音乐两不误',
      image: '/equipment/nank-runner-cc4.png',
      emoji: '🎧',
      color: 'gray',
      link: 'https://item.jd.com/10091800588950.html'
    },
    {
      name: '小米手环 9 Pro',
      category: '穿戴',
      spec: '黑色 / 大屏高清 / 智能 NFC',
      description: '健康监测，通知提醒，运动记录',
      image: '/equipment/mi-band-9-pro.png',
      emoji: '⌚',
      color: 'black',
      link: 'https://www.mi.com/prod/xiaomi-shouhuan-9-pro'
    },
  ]

  const categories = ['全部装备', '电脑', '手机', '外设', '音频', '穿戴']
  const [selectedCategory, setSelectedCategory] = useState('全部装备')

  const filteredEquipment = selectedCategory === '全部装备' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory)

  return (
    <div className="bg-[#fafbfc] pt-14 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-6 md:pb-10 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            我的装备
          </h1>

          {/* Category Filter - 移动端可滑动 */}
          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide mt-10">
            <div className="flex gap-2 md:gap-3 min-w-max md:flex-wrap">
              {categories.map((category) => {
                const count = category === '全部装备' 
                  ? equipment.length 
                  : equipment.filter(item => item.category === category).length
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-xiaomi-orange text-white shadow-md'
                        : 'bg-white text-xiaomi-text border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                    <span className={`ml-1.5 md:ml-2 text-xs hidden md:inline ${
                      selectedCategory === category ? 'text-white/70' : 'text-gray-400'
                    }`}>
                      ({count})
                    </span>
                  </button>
                )
              })}
            </div>
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
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ maxHeight: '150px', maxWidth: '280px' }}
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
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ maxHeight: '150px', maxWidth: '280px' }}
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



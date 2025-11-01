export default function LinksPage() {
  // 友情链接
  const friendLinks: Array<{
    name: string
    url: string
    description: string
    logo: string
    logoSize: string
    bgColor?: string
  }> = [
    { 
      name: 'Gerrit1999', 
      url: 'https://gerrit1999.github.io/', 
      description: '星轨时光机 - 分享技术与生活',
      logo: 'https://avatars.githubusercontent.com/u/71630591',
      logoSize: 'full'
    },
    { 
      name: '张洪Heo', 
      url: 'https://blog.zhheo.com/', 
      description: '产品设计师、独立开发者，分享设计与科技生活',
      logo: 'https://bu.dusays.com/2022/12/28/63ac2812183aa.png',
      logoSize: 'full'
    },
    { 
      name: '安知鱼', 
      url: 'https://blog.anheyu.com/', 
      description: '生活明朗，万物可爱',
      logo: 'https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg',
      logoSize: 'full'
    },
    { 
      name: 'Zhangl', 
      url: 'https://www.blog.gszyzl.cn/', 
      description: '技术博客',
      logo: 'https://www.gszyzl.cn/upload/image/login.png',
      logoSize: 'full'
    },
    { 
      name: 'VacuolePao', 
      url: 'https://blog.vacu.top/', 
      description: '个人博客',
      logo: 'https://i.loli.net/2021/08/27/vW2pnGsJOAd6qEX.jpg',
      logoSize: 'full'
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-14 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-6 md:pb-10 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            友情链接
          </h1>
        </div>

        {/* Friend Links Section */}
        <div className="animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {friendLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 p-6 hover:border-xiaomi-orange hover:shadow-lg transition-all flex items-center gap-4 h-[104px]"
                title={`${link.name} - ${link.description}`}
              >
                {/* Avatar */}
                <div 
                  className="w-16 h-16 flex-shrink-0 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: link.bgColor || '#ffffff' }}
                >
                  <img
                    src={link.logo}
                    alt={link.name}
                    className={
                      link.logoSize === 'full' ? "w-full h-full object-cover" :
                      link.logoSize === 'xlarge' ? "w-20 h-20 object-contain" :
                      link.logoSize === 'large' ? "w-14 h-14 object-contain" :
                      link.logoSize === 'small' ? "w-8 h-8 object-contain" :
                      "w-10 h-10 object-contain"
                    }
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-xiaomi-text group-hover:text-xiaomi-orange transition-colors truncate">
                      {link.name}
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
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


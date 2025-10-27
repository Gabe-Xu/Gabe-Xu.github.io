export default function LinksPage() {
  // 友情链接
  const friendLinks = [
    { 
      name: 'Gerrit1999', 
      url: 'https://gerrit1999.github.io/', 
      description: '星轨时光机 - 分享技术与生活',
      logo: 'https://avatars.githubusercontent.com/u/71630591',
      logoSize: 'full'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-14 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-20 pb-16 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-xiaomi-text mb-6 tracking-tighter">
            链接
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400">
            友情链接、常用工具和推荐资源
          </p>
        </div>

        {/* Friend Links Section */}
        <div className="animate-slide-up">
          <h2 className="text-3xl font-black text-xiaomi-text mb-8 tracking-tight">
            友情链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {friendLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 p-6 hover:border-xiaomi-orange hover:shadow-lg transition-all flex items-center gap-4"
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
                  <div className="flex items-start justify-between mb-2">
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
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


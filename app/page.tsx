import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero Section - 小米风格：超大字体、极简、留白 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center animate-fade-in py-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-xiaomi-text mb-8 tracking-tighter leading-none">
            Gabriel
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-500 mb-6 font-medium tracking-wide">
            技术 · 设计 · 生活
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            在这里分享关于现代Web开发、UI/UX设计的思考与实践
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/blog" 
              className="px-12 py-4 bg-xiaomi-orange text-white text-base font-medium hover:bg-xiaomi-orange-hover transition-all duration-200 shadow-lg"
            >
              探索博客
            </Link>
            <Link 
              href="/about" 
              className="px-12 py-4 bg-white text-xiaomi-text text-base font-medium border border-gray-200 hover:bg-gray-100 transition-all duration-200"
            >
              关于我
            </Link>
          </div>
        </div>
      </section>

      {/* 特色内容区 - 小米风格：大图配简短文字 */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* 卡片1 */}
            <div className="group relative overflow-hidden bg-gray-100 aspect-square">
              <div className="absolute inset-0 bg-xiaomi-orange flex flex-col items-center justify-center p-12 transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">前端开发</h3>
                <p className="text-white/90 text-center text-sm">
                  React · Next.js · TypeScript
                </p>
              </div>
            </div>

            {/* 卡片2 */}
            <div className="group relative overflow-hidden bg-gray-100 aspect-square">
              <div className="absolute inset-0 bg-xiaomi-dark flex flex-col items-center justify-center p-12 transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">UI/UX设计</h3>
                <p className="text-white/90 text-center text-sm">
                  简洁 · 优雅 · 实用
                </p>
              </div>
            </div>

            {/* 卡片3 */}
            <div className="group relative overflow-hidden bg-gray-100 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-12 transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-black text-xiaomi-text mb-4 tracking-tight">技术分享</h3>
                <p className="text-xiaomi-text text-center text-sm">
                  持续学习 · 不断进步
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新文章区 - 小米风格：更大留白，简洁卡片 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 tracking-tight">最新文章</h2>
              <p className="text-lg text-gray-400">探索最新的技术分享</p>
            </div>
            <Link 
              href="/blog" 
              className="text-xiaomi-orange hover:text-xiaomi-orange-dark font-medium flex items-center gap-2 group text-sm"
            >
              查看全部
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-xiaomi-dark to-xiaomi-dark-light relative overflow-hidden">
                  <div className="absolute inset-0 bg-xiaomi-orange/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="text-xiaomi-orange">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-xiaomi-text mb-3 group-hover:text-xiaomi-orange transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 小米风格：超大文字，强烈对比 */}
      <section className="py-40 bg-xiaomi-dark text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight" style={{ lineHeight: '1.2' }}>
            让我们一起<br />创造精彩
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12">
            对合作或交流感兴趣？
          </p>
          <Link 
            href="/about" 
            className="inline-block px-16 py-5 bg-xiaomi-orange text-white hover:bg-xiaomi-orange-hover transition-all duration-200 font-medium text-base"
          >
            联系我
          </Link>
        </div>
      </section>
    </div>
  )
}


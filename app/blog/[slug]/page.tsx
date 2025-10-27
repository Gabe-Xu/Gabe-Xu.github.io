import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // 提取标题作为目录
  const headings = post.content
    .split('\n')
    .map((line, index) => {
      if (line.startsWith('## ')) {
        return { id: `heading-${index}`, text: line.substring(3), level: 2 }
      }
      if (line.startsWith('### ')) {
        return { id: `heading-${index}`, text: line.substring(4), level: 3 }
      }
      return null
    })
    .filter(Boolean)

  return (
    <article className="min-h-screen bg-white pt-14 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-20 pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-xiaomi-orange group text-sm"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <header className="mb-12 animate-fade-in">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span className="text-xiaomi-orange">{post.category}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Image */}
        <div className="w-full h-96 bg-gradient-to-br from-xiaomi-dark to-xiaomi-dark-light mb-12 animate-slide-up"></div>

        {/* Article Content */}
        <div className="animate-slide-up">
          <div className="text-xiaomi-text">
            {(() => {
              const lines = post.content.split('\n')
              let hasSkippedH1 = false
              return lines.filter((line) => {
                // 跳过第一个 # 标题（已在上面显示）
                if (!hasSkippedH1 && line.startsWith('# ')) {
                  hasSkippedH1 = true
                  return false
                }
                return true
              }).map((line, index) => {
                // 处理标题
                if (line.startsWith('# ')) {
                  return <h1 key={index} id={`heading-${index}`} className="text-3xl font-black text-xiaomi-text mt-8 mb-3 tracking-tight scroll-mt-24">{line.substring(2)}</h1>
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} id={`heading-${index}`} className="text-2xl font-bold text-xiaomi-text mt-7 mb-2.5 scroll-mt-24">{line.substring(3)}</h2>
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} id={`heading-${index}`} className="text-xl font-bold text-xiaomi-text mt-6 mb-2 scroll-mt-24">{line.substring(4)}</h3>
                }
                // 处理空行
                if (line.trim() === '') {
                  return null
                }
                // 普通段落
                return <p key={index} className="text-gray-600 leading-7 mb-2">{line}</p>
              })
            })()}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 relative flex-shrink-0">
              <img
                src="/avatar.jpg"
                alt="Gabriel"
                className="w-full h-full object-cover rounded-full"
              />
              {/* 在线状态指示器 */}
              <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-xiaomi-text mb-2">Gabriel</h3>
              <p className="text-gray-600 mb-4">
                热爱技术的开发者，专注于前端开发和UI/UX设计。喜欢分享知识，记录成长。
              </p>
              <Link
                href="/about"
                className="text-xiaomi-orange hover:text-xiaomi-orange-hover font-medium inline-flex items-center group"
              >
                了解更多
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

            {/* Related Posts */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-xiaomi-text mb-8">相关文章</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getAllPosts()
                  .filter(p => p.slug !== post.slug && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                      <h4 className="text-lg font-bold text-xiaomi-text mb-2 group-hover:text-xiaomi-orange transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              {/* 文章信息卡片 */}
              <div className="bg-gray-50 p-6 mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">文章信息</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xiaomi-orange">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              {/* 目录 */}
              {headings.length > 0 && (
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">目录</h3>
                  <nav className="space-y-2">
                    {headings.map((heading: any) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm hover:text-xiaomi-orange transition-colors ${
                          heading.level === 3 ? 'pl-4 text-gray-500' : 'text-gray-700 font-medium'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* 标签 */}
              <div className="mt-6 bg-gray-50 p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-xiaomi-text text-xs font-medium border border-gray-200 hover:border-xiaomi-orange transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

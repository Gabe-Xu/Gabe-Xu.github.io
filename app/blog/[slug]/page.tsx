import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import TableOfContents from '@/components/TableOfContents'

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
  const lines = post.content.split('\n')
  let hasSkippedH1 = false
  const headings: Array<{ id: string; text: string; level: number }> = []
  
  lines.forEach((line, index) => {
    // 跳过第一个 # 标题
    if (!hasSkippedH1 && line.startsWith('# ')) {
      hasSkippedH1 = true
      return
    }
    
    if (line.startsWith('## ')) {
      headings.push({ id: `heading-${index}`, text: line.substring(3), level: 2 })
    } else if (line.startsWith('### ')) {
      headings.push({ id: `heading-${index}`, text: line.substring(4), level: 3 })
    }
  })

  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-14 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8">
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

        {/* Article Header */}
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <time dateTime={post.date}>{post.date}</time>
            {/* Category - clickable on desktop, non-clickable on mobile */}
            <span className="lg:hidden text-xiaomi-orange font-medium px-2 py-0.5 text-sm">
              {post.category}
            </span>
            <Link 
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="hidden lg:inline-block text-xiaomi-orange hover:bg-xiaomi-orange/10 font-medium transition-all px-2 py-0.5 text-sm"
            >
              {post.category}
            </Link>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span key={tag}>
                {/* Tag - clickable on desktop, non-clickable on mobile, smaller size */}
                <span className="lg:hidden px-2 py-0.5 bg-gray-100 text-gray-600 text-xs">
                  #{tag}
                </span>
                <Link
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="hidden lg:inline-block px-2 py-0.5 bg-gray-100 hover:bg-xiaomi-orange hover:text-white text-gray-600 text-xs transition-colors"
                >
                  #{tag}
                </Link>
              </span>
            ))}
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Article Content */}
            <div id="article-content" className="animate-slide-up bg-white border border-gray-200 p-8">
              <div className="text-xiaomi-text [&>*:first-child]:!mt-0 [&>*:last-child]:!mb-0">
                {(() => {
                  const contentLines = post.content.split('\n')
                  let hasSkippedH1 = false
                  return contentLines.map((line, index) => {
                    // 跳过第一个 # 标题（已在上面显示）
                    if (!hasSkippedH1 && line.startsWith('# ')) {
                      hasSkippedH1 = true
                      return null
                    }
                    
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
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
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
      </div>
    </article>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostByHash, getAllPosts } from '@/lib/posts'
import TableOfContents from '@/components/TableOfContents'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    hash: post.hash,
  }))
}

export default function BlogPost({ params }: { params: { hash: string } }) {
  const post = getPostByHash(params.hash)

  if (!post) {
    notFound()
  }

  // 中英文间自动添加空格（盘古之白）
  const addSpacing = (text: string): string => {
    // 中文字符后接英文/数字/点号等
    text = text.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9@&%\.\-+])/g, '$1 $2')
    // 英文/数字/点号等后接中文字符
    text = text.replace(/([a-zA-Z0-9@&%\.\-+])([\u4e00-\u9fa5])/g, '$1 $2')
    // 百分号后接中文（特殊处理）
    text = text.replace(/(%)([\u4e00-\u9fa5])/g, '$1 $2')
    return text
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
      headings.push({ id: `heading-${index}`, text: addSpacing(line.substring(3)), level: 2 })
    } else if (line.startsWith('### ')) {
      headings.push({ id: `heading-${index}`, text: addSpacing(line.substring(4)), level: 3 })
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
        <header className="mb-12 animate-fade-in lg:max-w-[66.666667%]">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <time dateTime={post.date}>{post.date}</time>
            {/* Category - clickable on desktop, non-clickable on mobile */}
            <span className="lg:hidden text-xiaomi-orange font-medium px-2 py-0.5 text-xs flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 1024 1024">
                <path d="M132.266667 810.666667h759.466666a4.266667 4.266667 0 0 0 4.266667-4.266667V345.6a4.266667 4.266667 0 0 0-4.266667-4.266667h-335.36a3.925333 3.925333 0 0 1-2.986666-1.28l-125.44-125.44A4.224 4.224 0 0 0 424.96 213.333333H132.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v588.8a4.266667 4.266667 0 0 0 4.266667 4.266667z" />
              </svg>
              {post.category}
            </span>
            <Link 
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="hidden lg:inline-flex items-center gap-1 text-xiaomi-orange hover:bg-xiaomi-orange/10 font-medium transition-all px-2 py-0.5 text-xs"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 1024 1024">
                <path d="M132.266667 810.666667h759.466666a4.266667 4.266667 0 0 0 4.266667-4.266667V345.6a4.266667 4.266667 0 0 0-4.266667-4.266667h-335.36a3.925333 3.925333 0 0 1-2.986666-1.28l-125.44-125.44A4.224 4.224 0 0 0 424.96 213.333333H132.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v588.8a4.266667 4.266667 0 0 0 4.266667 4.266667z" />
              </svg>
              {post.category}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-xiaomi-text mb-4 sm:mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
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
            <div id="article-content" className="animate-slide-up bg-white border-0 lg:border lg:border-gray-200 p-0 lg:p-8">
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
                      return <h1 key={index} id={`heading-${index}`} className="text-3xl font-black text-xiaomi-text mt-8 mb-3 tracking-tight scroll-mt-24">{addSpacing(line.substring(2))}</h1>
                    }
                    if (line.startsWith('## ')) {
                      return (
                        <div key={index} className="mt-7 mb-4">
                          <h2 id={`heading-${index}`} className="text-2xl font-bold text-xiaomi-text mb-2 scroll-mt-24">{addSpacing(line.substring(3))}</h2>
                          <div className="w-full h-px bg-gray-200"></div>
                        </div>
                      )
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={index} id={`heading-${index}`} className="text-xl font-bold text-xiaomi-text mt-6 mb-2 scroll-mt-24">{addSpacing(line.substring(4))}</h3>
                    }
                    // 处理表格
                    if (line.startsWith('|')) {
                      // 如果前一行也是表格，说明当前行是表格的一部分，跳过
                      if (index > 0 && contentLines[index - 1].startsWith('|')) {
                        return null
                      }
                      
                      // 查找完整的表格（连续的以|开头的行）
                      const tableLines = [line]
                      let i = index + 1
                      while (i < contentLines.length && contentLines[i].startsWith('|')) {
                        tableLines.push(contentLines[i])
                        i++
                      }
                      
                      // 渲染表格内容，支持粗体
                      const renderCellContent = (text: string) => {
                        // 先添加中英文间距
                        text = addSpacing(text)
                        
                        const parts = []
                        const boldRegex = /\*\*([^*]+)\*\*/g
                        let lastIndex = 0
                        let match
                        
                        while ((match = boldRegex.exec(text)) !== null) {
                          if (match.index > lastIndex) {
                            parts.push(text.substring(lastIndex, match.index))
                          }
                          parts.push(<strong key={match.index}>{match[1]}</strong>)
                          lastIndex = match.index + match[0].length
                        }
                        
                        if (lastIndex < text.length) {
                          parts.push(text.substring(lastIndex))
                        }
                        
                        return parts.length > 0 ? parts : text
                      }
                      
                      const headers = tableLines[0].split('|').filter(cell => cell.trim())
                      const rows = tableLines.slice(2).map(row => 
                        row.split('|').filter(cell => cell.trim())
                      )
                      
                        return (
                          <div key={index} className="my-6">
                            {/* 横向滚动容器 */}
                            <div className="overflow-x-auto -mx-4 sm:mx-0">
                              {/* 滚动提示渐变 */}
                              <div className="relative">
                                <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      {headers.map((header, idx) => (
                                        <th key={idx} className="border border-gray-300 px-2 sm:px-4 py-1.5 sm:py-2 text-left font-semibold text-xiaomi-text whitespace-nowrap">
                                          {renderCellContent(header.trim())}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {rows.map((row, rowIdx) => (
                                      <tr key={rowIdx} className="hover:bg-gray-50">
                                        {row.map((cell, cellIdx) => (
                                          <td key={cellIdx} className="border border-gray-300 px-2 sm:px-4 py-1.5 sm:py-2 text-gray-600">
                                            {renderCellContent(cell.trim())}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {/* 移动端滚动提示 */}
                            <p className="text-xs text-gray-400 mt-2 sm:hidden text-center">
                              ← 左右滑动查看完整表格 →
                            </p>
                          </div>
                        )
                    }
                    // 处理空行
                    if (line.trim() === '') {
                      return null
                    }
                    // 普通段落 - 支持 Markdown 链接
                    const renderLineWithLinks = (text: string) => {
                      // 先添加中英文间距
                      text = addSpacing(text)
                      
                      // 匹配 Markdown 链接格式：[文本](URL)
                      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
                      const parts = []
                      let lastIndex = 0
                      let match
                      
                      while ((match = linkRegex.exec(text)) !== null) {
                        // 添加链接前的文本
                        if (match.index > lastIndex) {
                          parts.push(text.substring(lastIndex, match.index))
                        }
                        // 添加链接
                        parts.push(
                          <a
                            key={match.index}
                            href={match[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xiaomi-orange hover:text-xiaomi-orange-hover underline"
                          >
                            {match[1]}
                          </a>
                        )
                        lastIndex = match.index + match[0].length
                      }
                      
                      // 添加剩余文本
                      if (lastIndex < text.length) {
                        parts.push(text.substring(lastIndex))
                      }
                      
                      return parts.length > 0 ? parts : text
                    }
                    
                    return <p key={index} className="text-gray-600 leading-7 mb-2">{renderLineWithLinks(line)}</p>
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
          <div className="flex items-center gap-7">
            <div className="w-24 h-24 relative flex-shrink-0 select-none">
              <img
                src="/avatar.jpg"
                alt="Gabriel"
                className="w-full h-full object-cover rounded-full"
              />
              {/* 在线状态指示器 */}
              <div className="absolute bottom-0.5 right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-logo text-xiaomi-text mb-2">Gabriel</h3>
              <p className="text-gray-600 mb-4 leading-snug">
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
                  <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


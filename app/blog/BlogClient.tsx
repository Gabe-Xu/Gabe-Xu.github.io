'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

interface Post {
  hash: string
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

interface BlogClientProps {
  initialPosts: Post[]
  initialCategories: string[]
  initialTags: string[]
  initialArchives: { year: string; count: number; months: { month: string; count: number; posts: Post[] }[] }[]
}

export default function BlogClient({ initialPosts, initialCategories, initialTags, initialArchives }: BlogClientProps) {
  const posts = initialPosts
  const categories = initialCategories
  const tags = initialTags
  const archives = initialArchives
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedArchive, setSelectedArchive] = useState<string | null>(null)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set())

  // 从URL参数初始化筛选条件
  useEffect(() => {
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const archive = searchParams.get('archive')
    
    if (category) setSelectedCategory(category)
    if (tag) setSelectedTag(tag)
    if (archive) setSelectedArchive(archive)
  }, [searchParams])

  // 提取包含关键词的内容片段
  const getContentSnippet = (content: string, query: string, maxLength: number = 150) => {
    const lowerContent = content.toLowerCase()
    const lowerQuery = query.toLowerCase()
    const index = lowerContent.indexOf(lowerQuery)
    
    if (index === -1) return null
    
    // 计算片段的起始和结束位置
    const start = Math.max(0, index - 50)
    const end = Math.min(content.length, index + query.length + 100)
    
    let snippet = content.substring(start, end).trim()
    
    // 添加省略号
    if (start > 0) snippet = '...' + snippet
    if (end < content.length) snippet = snippet + '...'
    
    return snippet
  }

  // 高亮关键词
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="text-xiaomi-orange font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  // 过滤文章并获取搜索结果
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    const matchesArchive = !selectedArchive || (() => {
      const date = new Date(post.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      return monthKey === selectedArchive
    })()
    return matchesSearch && matchesCategory && matchesTag && matchesArchive
  }).map(post => {
    // 检查搜索匹配位置
    let snippet = post.excerpt
    let isContentMatch = false
    let matchType = ''
    
    if (searchQuery) {
      const titleMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
      const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const categoryMatch = post.category.toLowerCase().includes(searchQuery.toLowerCase())
      const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      if (!titleMatch && !excerptMatch) {
        if (categoryMatch) {
          matchType = '匹配分类'
        } else if (tagMatch) {
          const matchedTags = post.tags.filter(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          matchType = `匹配标签: ${matchedTags.join(', ')}`
        } else {
          // 在内容中匹配
          const contentSnippet = getContentSnippet(post.content, searchQuery)
          if (contentSnippet) {
            snippet = contentSnippet
            isContentMatch = true
          }
        }
      }
    }
    
    return { ...post, snippet, isContentMatch, matchType } as Post & { snippet: string; isContentMatch: boolean; matchType: string }
  })

  // 更新URL参数
  const updateURL = (category: string | null, tag: string | null, archive: string | null) => {
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (tag) params.set('tag', tag)
    if (archive) params.set('archive', archive)
    
    const queryString = params.toString()
    router.push(queryString ? `/blog?${queryString}` : '/blog', { scroll: false })
  }

  // 清除所有筛选
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory(null)
    setSelectedTag(null)
    setSelectedArchive(null)
    router.push('/blog', { scroll: false })
  }

  // 处理分类选择
  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category
    setSelectedCategory(newCategory)
    updateURL(newCategory, selectedTag, selectedArchive)
  }

  // 处理标签选择
  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? null : tag
    setSelectedTag(newTag)
    updateURL(selectedCategory, newTag, selectedArchive)
  }

  // 处理归档选择
  const handleArchiveClick = (archive: string) => {
    const newArchive = selectedArchive === archive ? null : archive
    setSelectedArchive(newArchive)
    updateURL(selectedCategory, selectedTag, newArchive)
  }

  return (
    <article className="bg-[#fafbfc] pt-14 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-6 md:pb-10 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-3 sm:mb-6 tracking-tight">
            博客
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
          {/* Main Content - Blog Posts List */}
          <div className="lg:w-2/3">
            {/* Search Box - 移动端显示 */}
            <div className="mb-6 lg:hidden">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索文章..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-xiaomi-orange focus:outline-none focus:ring-1 focus:ring-xiaomi-orange text-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-4 group relative">
              <div className="flex flex-wrap gap-3 max-h-[50px] overflow-hidden group-hover:max-h-[500px] transition-all duration-500 ease-in-out">
                <button
                  onClick={() => handleCategoryClick(null)}
                  className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                    !selectedCategory
                      ? 'bg-xiaomi-orange text-white'
                      : 'bg-white text-xiaomi-text border border-gray-200 hover:border-xiaomi-orange hover:text-xiaomi-orange'
                  }`}
                >
                  全部分类
                  <span className={`ml-2 text-xs ${
                    !selectedCategory ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    ({posts.length})
                  </span>
                </button>
                {[...categories].sort((a, b) => {
                  if (a === selectedCategory) return -1
                  if (b === selectedCategory) return 1
                  return 0
                }).map((category) => {
                  const count = posts.filter(p => p.category === category).length
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-xiaomi-orange text-white'
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

            {/* Active Filters */}
            {(searchQuery || selectedTag || selectedArchive) && (
              <div className="mb-6 p-4 bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-xiaomi-text">当前筛选条件：</h4>
            <button
                    onClick={clearFilters}
                    className="text-xs text-xiaomi-orange hover:text-xiaomi-orange-hover"
            >
                    清除所有
            </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 text-sm">
                      搜索: {searchQuery}
                      <button onClick={() => setSearchQuery('')} className="ml-1 text-gray-400 hover:text-gray-600">×</button>
                    </span>
                  )}
                  {selectedTag && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 text-sm">
                      标签: #{selectedTag}
                      <button onClick={() => handleTagClick(selectedTag)} className="ml-1 text-gray-400 hover:text-gray-600">×</button>
                    </span>
                  )}
                  {selectedArchive && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 text-sm">
                      归档: {selectedArchive}
                      <button onClick={() => handleArchiveClick(selectedArchive)} className="ml-1 text-gray-400 hover:text-gray-600">×</button>
                    </span>
                  )}
                </div>
        </div>
            )}

            {/* Blog Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
                  className="bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-xiaomi-orange/30 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
                  {/* Header: Date, Category, Tags */}
                  <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleCategoryClick(post.category)
                        }}
                        className={`font-medium transition-all px-2 py-0.5 text-xs inline-flex items-center gap-1 ${
                          post.matchType === '匹配分类' || selectedCategory === post.category
                            ? 'bg-xiaomi-orange text-white'
                            : 'text-xiaomi-orange hover:bg-xiaomi-orange/10'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 1024 1024">
                          <path d="M132.266667 810.666667h759.466666a4.266667 4.266667 0 0 0 4.266667-4.266667V345.6a4.266667 4.266667 0 0 0-4.266667-4.266667h-335.36a3.925333 3.925333 0 0 1-2.986666-1.28l-125.44-125.44A4.224 4.224 0 0 0 424.96 213.333333H132.266667a4.266667 4.266667 0 0 0-4.266667 4.266667v588.8a4.266667 4.266667 0 0 0 4.266667 4.266667z" />
                        </svg>
                        {post.category}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => {
                        const isHighlighted = searchQuery && tag.toLowerCase() === searchQuery.toLowerCase()
                        const containsKeyword = searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                        return (
                          <button
                            key={tag}
                            onClick={(e) => {
                              e.preventDefault()
                              handleTagClick(tag)
                            }}
                            className={`px-2 py-0.5 text-xs transition-colors ${
                              isHighlighted || selectedTag === tag
                                ? 'bg-xiaomi-orange text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            #{containsKeyword && !isHighlighted ? highlightText(tag, searchQuery) : tag}
                          </button>
                        )
                      })}
                    </div>
                </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-xiaomi-text mb-2 group-hover:text-xiaomi-orange transition-colors leading-tight">
                  <Link href={`/blog/${post.hash}`}>
                      {searchQuery ? highlightText(post.title, searchQuery) : post.title}
                  </Link>
                </h2>

                  {/* Excerpt or Content Snippet */}
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {searchQuery ? highlightText(post.snippet, searchQuery) : post.snippet}
                  </p>
                </article>
                  ))}
                </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                没有找到匹配的文章
              </div>
            )}
          </div>

          {/* Sidebar - 仅桌面端显示 */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* Search Box - 桌面端显示 */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索文章..."
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 focus:border-xiaomi-orange focus:outline-none focus:ring-1 focus:ring-xiaomi-orange text-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Tags Module */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-xiaomi-text mb-4">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => {
                    const count = posts.filter(p => p.tags.includes(tag)).length
                    const isSelected = selectedTag === tag
                    return (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-3 py-1 text-xs cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-xiaomi-orange text-white'
                            : 'bg-gray-100 hover:bg-xiaomi-orange hover:text-white text-gray-700'
                        }`}
                        title={`${count} 篇文章`}
                      >
                        #{tag}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Archives Module */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-xiaomi-text mb-4">归档</h3>
                <div className="space-y-3">
                  {archives.map((yearArchive) => {
                    const isExpanded = expandedYears.has(yearArchive.year)
                    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    
                    // 创建完整的12个月数据
                    const monthsMap = new Map(yearArchive.months.map(m => {
                      const [, month] = m.month.split('-')
                      return [parseInt(month), m]
                    }))
                    
                    const fullYearMonths = Array.from({ length: 12 }, (_, i) => {
                      const monthNum = i + 1
                      const monthData = monthsMap.get(monthNum)
                      return {
                        monthKey: monthData?.month || `${yearArchive.year}-${String(monthNum).padStart(2, '0')}`,
                        monthName: monthNames[i],
                        count: monthData?.count || 0,
                        hasData: !!monthData
                      }
                    })
                    
                    return (
                      <div key={yearArchive.year}>
                        {/* Year Header */}
                        <button
                          onClick={() => {
                            const newExpanded = new Set(expandedYears)
                            if (isExpanded) {
                              newExpanded.delete(yearArchive.year)
                            } else {
                              newExpanded.add(yearArchive.year)
                            }
                            setExpandedYears(newExpanded)
                          }}
                          className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-100 text-gray-700 transition-colors text-sm font-medium"
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                            <span>{yearArchive.year}年</span>
                          </div>
                          <span className="text-xs text-gray-400">({yearArchive.count})</span>
                        </button>

                        {/* Months Grid - Calendar View */}
                        {isExpanded && (
                          <div className="grid grid-cols-3 gap-1.5 mt-2 px-1">
                            {fullYearMonths.map((month) => {
                              const isSelected = selectedArchive === month.monthKey
                              const hasData = month.hasData
                              return (
                                <button
                                  key={month.monthKey}
                                  onClick={() => hasData && handleArchiveClick(month.monthKey)}
                                  disabled={!hasData}
                                  className={`flex items-center justify-between px-2 py-1.5 text-xs transition-colors ${
                                    isSelected
                                      ? 'bg-xiaomi-orange text-white'
                                      : hasData
                                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                        : 'bg-white text-gray-300 cursor-not-allowed'
                                  }`}
                                  title={hasData ? `${month.count} 篇文章` : '无文章'}
                                >
                                  <span>{month.monthName}</span>
                                  <span className={`text-xs ${isSelected ? 'text-white/70' : hasData ? 'text-gray-400' : 'text-gray-300'}`}>
                                    ({month.count})
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}


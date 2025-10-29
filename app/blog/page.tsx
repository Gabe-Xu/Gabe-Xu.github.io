'use client'

import Link from 'next/link'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getAllPosts, getAllCategories, getAllTags, getArchivesByYear } from '@/lib/posts'

function BlogPageContent() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  const archives = getArchivesByYear()
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
    
    return { ...post, snippet, isContentMatch, matchType }
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-14 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 md:pb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-6 tracking-tight">
            博客
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            探索技术世界，分享开发经验
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content - Blog Posts List */}
          <div className="lg:w-2/3">
            {/* Mobile Search - Only visible on mobile */}
            <div className="lg:hidden mb-6 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索文章..."
                className="w-full px-4 py-2 bg-white border border-gray-200 focus:border-xiaomi-orange focus:outline-none focus:ring-1 focus:ring-xiaomi-orange text-sm"
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

            {/* Active Filters - Only visible on desktop */}
            {(searchQuery || selectedCategory || selectedTag || selectedArchive) && (
              <div className="hidden lg:block mb-6 p-4 bg-white border border-gray-200">
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
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 text-sm">
                      分类: {selectedCategory}
                      <button onClick={() => handleCategoryClick(selectedCategory)} className="ml-1 text-gray-400 hover:text-gray-600">×</button>
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
            <div className="space-y-6 pb-12 md:pb-20">
              {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
                  className="bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-xiaomi-orange/30 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
                  {/* Header: Date, Category, Tags */}
                  <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                      {/* Category - clickable on desktop, non-clickable on mobile */}
                      <span className="lg:hidden font-medium px-2 py-0.5 text-sm text-xiaomi-orange">
                        {post.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleCategoryClick(post.category)
                        }}
                        className="hidden lg:inline-block font-medium transition-all px-2 py-0.5 text-sm text-xiaomi-orange hover:bg-xiaomi-orange/10"
                      >
                        {post.category}
                      </button>
                      {(post.isContentMatch || post.matchType) && (
                        <>
                  <span>·</span>
                          <span className="text-blue-500 text-xs">
                            {post.matchType || '匹配内容'}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>
                          {/* Tag - clickable on desktop, non-clickable on mobile */}
                          <span className={`lg:hidden px-2 py-0.5 text-xs ${
                            selectedTag === tag
                              ? 'bg-xiaomi-orange text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            #{tag}
                          </span>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              handleTagClick(tag)
                            }}
                            className={`hidden lg:inline-block px-2 py-0.5 text-xs transition-colors ${
                              selectedTag === tag
                                ? 'bg-xiaomi-orange text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            #{tag}
                          </button>
                        </span>
                      ))}
                    </div>
                </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-xiaomi-text mb-2 group-hover:text-xiaomi-orange transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>
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

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* Search Module - Only visible on desktop */}
              <div className="hidden lg:block border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-xiaomi-text mb-4">搜索</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文章..."
                    className="w-full px-4 py-2 border border-gray-300 focus:border-xiaomi-orange focus:outline-none focus:ring-1 focus:ring-xiaomi-orange text-sm"
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
              </div>

              {/* Categories Module */}
              <div className="hidden lg:block border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-xiaomi-text mb-4">分类</h3>

                {/* 分类网格 - 可展开/收起 */}
                <div className="relative">
                  <div 
                    className={`grid grid-cols-3 gap-2 ${!showAllCategories ? 'max-h-[120px] overflow-hidden' : ''}`}
                  >
                    {categories.map((category) => {
                      const count = posts.filter(p => p.category === category).length
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`flex items-center justify-between px-2 py-1.5 text-sm transition-colors ${
                            selectedCategory === category
                              ? 'bg-xiaomi-orange text-white'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                          title={category}
                        >
                          <span className="truncate">{category}</span>
                          <span className={`ml-1 flex-shrink-0 text-xs ${selectedCategory === category ? 'text-white/80' : 'text-gray-400'}`}>
                            ({count})
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {/* 渐变遮罩 - 只在未展开且分类数量超过6个时显示 */}
                  {!showAllCategories && categories.length > 6 && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                  )}
                </div>

                {/* 展开/收起按钮 - 只在分类数量超过6个时显示 */}
                {categories.length > 6 && (
                  <button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="w-full text-center text-xs text-xiaomi-orange hover:text-xiaomi-orange-hover mt-1 py-1"
                  >
                    {showAllCategories ? '收起 ▲' : '展开更多 ▼'}
                  </button>
                )}
              </div>

              {/* Tags Module */}
              <div className="hidden lg:block border border-gray-200 p-6">
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
              <div className="hidden lg:block border border-gray-200 p-6">
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
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-14 pb-32 flex items-center justify-center">
        <div className="text-gray-400">加载中...</div>
      </div>
    }>
      <BlogPageContent />
    </Suspense>
  )
}

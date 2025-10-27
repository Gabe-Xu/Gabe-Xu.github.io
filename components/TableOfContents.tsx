'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 获取文章内容区域
      const articleContent = document.querySelector('#article-content')
      if (articleContent) {
        const rect = articleContent.getBoundingClientRect()
        // 当文章内容到达顶部时显示目录
        setIsVisible(rect.top <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始检查

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="sticky top-24">
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            目录
          </h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm hover:text-xiaomi-orange transition-colors ${
                  heading.level === 3
                    ? 'pl-4 text-gray-500'
                    : 'text-gray-700 font-medium'
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}


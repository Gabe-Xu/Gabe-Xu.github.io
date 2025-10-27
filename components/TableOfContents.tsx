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
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      // 获取所有标题元素
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean)
      
      // 找到当前可视区域内的标题
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          // 如果标题在视口上半部分
          if (rect.top <= 200) {
            setActiveId(element.id)
            break
          }
        }
      }
      
      // 如果滚动到顶部，取消高亮
      if (window.scrollY < 100) {
        setActiveId('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 初始检查

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="bg-white border border-gray-200 p-5">
      <h3 className="text-base font-bold text-gray-400 uppercase tracking-wider mb-4">
        目录
      </h3>
      <nav className="space-y-3">
        {headings.map((heading, index) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-base transition-colors ${
              activeId === heading.id
                ? 'text-xiaomi-orange font-bold'
                : heading.level === 3
                ? 'pl-5 text-gray-500 hover:text-xiaomi-orange'
                : 'text-gray-700 font-medium hover:text-xiaomi-orange'
            }`}
          >
            <span className="inline-block mr-2 text-gray-400">{index + 1}.</span>
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}




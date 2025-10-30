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

    // 监听多个可能的滚动源
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    
    // 使用 Intersection Observer 作为备选方案
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: [0, 0.5, 1]
      }
    )

    // 观察所有标题
    headings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    handleScroll() // 初始检查

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
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
            className={`group block text-base transition-colors ${
              activeId === heading.id
                ? 'text-xiaomi-orange font-bold'
                : heading.level === 3
                ? 'pl-5 text-gray-500 hover:text-xiaomi-orange'
                : 'text-gray-700 font-medium hover:text-xiaomi-orange'
            }`}
          >
            <span className={`inline-block mr-2 transition-colors ${
              activeId === heading.id
                ? 'text-xiaomi-orange'
                : 'text-gray-400 group-hover:text-xiaomi-orange'
            }`}>
              {index + 1}.
            </span>
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}




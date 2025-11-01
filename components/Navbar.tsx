'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showLinksDropdown, setShowLinksDropdown] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    handleScroll() // 初始检查
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isAtTop 
        ? 'bg-transparent shadow-none' 
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold font-logo text-xiaomi-text tracking-tight">Gabriel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              首页
            </Link>
            <Link href="/blog" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              博客
            </Link>
            
            {/* 链接 - 带下拉菜单（不可点击） */}
            <div 
              className="relative h-14 flex items-center"
              onMouseEnter={() => setShowLinksDropdown(true)}
              onMouseLeave={() => setShowLinksDropdown(false)}
            >
              <button 
                className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors inline-flex items-center gap-0.5 cursor-pointer"
              >
                链接
                <svg 
                  className={`w-3 h-3 transition-transform ${showLinksDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* 下拉菜单 */}
              {showLinksDropdown && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2">
                  <div className={`w-40 border animate-slide-down overflow-hidden ${
                    isAtTop
                      ? 'bg-white/95 backdrop-blur-md border-white/20 shadow-xl'
                      : 'bg-white border-gray-100 shadow-2xl'
                  }`}>
                    <Link 
                      href="/tools" 
                      className="flex items-center gap-2.5 px-4 py-3 text-sm text-xiaomi-text hover:bg-xiaomi-orange hover:text-white transition-all group"
                    >
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>常用工具</span>
                    </Link>
                    <div className="h-px bg-gray-100"></div>
                    <Link 
                      href="/links" 
                      className="flex items-center gap-2.5 px-4 py-3 text-sm text-xiaomi-text hover:bg-xiaomi-orange hover:text-white transition-all group"
                    >
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>友情链接</span>
            </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* 关于 - 带下拉菜单（不可点击） */}
            <div 
              className="relative h-14 flex items-center"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button 
                className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors inline-flex items-center gap-0.5 cursor-pointer"
              >
                关于
                <svg 
                  className={`w-3 h-3 transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
                {/* 下拉菜单 - 现代化设计 */}
                {showAboutDropdown && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2">
                    <div className={`w-40 border animate-slide-down overflow-hidden ${
                      isAtTop
                        ? 'bg-white/95 backdrop-blur-md border-white/20 shadow-xl'
                        : 'bg-white border-gray-100 shadow-2xl'
                    }`}>
                      <Link 
                        href="/about" 
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-xiaomi-text hover:bg-xiaomi-orange hover:text-white transition-all group"
                      >
                        <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>个人简介</span>
                      </Link>
                      <div className="h-px bg-gray-100"></div>
                      <Link 
                        href="/equipment" 
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-xiaomi-text hover:bg-xiaomi-orange hover:text-white transition-all group"
                      >
                        <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>我的装备</span>
                      </Link>
                      <div className="h-px bg-gray-100"></div>
                      <Link 
                        href="/about#contact" 
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-xiaomi-text hover:bg-xiaomi-orange hover:text-white transition-all group"
                      >
                        <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>联系方式</span>
            </Link>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

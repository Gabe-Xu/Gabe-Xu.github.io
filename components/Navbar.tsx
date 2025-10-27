'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-xiaomi-text tracking-tight">
            Gabriel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              首页
            </Link>
            <Link href="/blog" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              博客
            </Link>
            <Link href="/links" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              链接
            </Link>
            <Link href="/about" className="text-sm text-xiaomi-text hover:text-xiaomi-orange transition-colors">
              关于
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="菜单"
          >
            <svg
              className="w-6 h-6 text-xiaomi-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block px-4 py-2 text-xiaomi-text hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/blog" 
              className="block px-4 py-2 text-xiaomi-text hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              博客
            </Link>
            <Link 
              href="/links" 
              className="block px-4 py-2 text-xiaomi-text hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              链接
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-xiaomi-text hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              关于
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}


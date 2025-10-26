'use client'

import { useState, useEffect } from 'react'

export default function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 检查是否已经显示过
    const hasSeenModal = localStorage.getItem('hasSeenConstructionModal')
    if (!hasSeenModal) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenConstructionModal', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full animate-fade-in">
        {/* 顶部橙色条 */}
        <div className="h-1 bg-xiaomi-orange"></div>
        
        <div className="p-10">
          {/* 图标 */}
          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 mx-auto">
            <svg className="w-10 h-10 text-xiaomi-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* 标题 */}
          <h2 className="text-3xl font-black text-xiaomi-text mb-4 text-center tracking-tight">
            网站建设中
          </h2>

          {/* 内容 */}
          <div className="text-gray-600 mb-8 text-center space-y-2">
            <p className="text-base">
              本网站当前处于开发阶段
            </p>
            <p className="text-base">
              部分功能与内容仅供展示参考
            </p>
            <p className="text-sm text-gray-500 mt-4">
              感谢您的理解与支持
            </p>
          </div>

          {/* 按钮 */}
          <button
            onClick={handleClose}
            className="w-full px-8 py-4 bg-xiaomi-orange text-white hover:bg-xiaomi-orange-hover transition-colors duration-200 font-medium text-base"
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  )
}


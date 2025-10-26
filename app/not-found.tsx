import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-black text-xiaomi-text mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-4xl font-bold text-xiaomi-text mb-4">
          页面未找到
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link
          href="/"
          className="inline-block px-12 py-4 bg-xiaomi-orange text-white hover:bg-xiaomi-orange-hover transition-colors duration-200 font-medium text-base"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}


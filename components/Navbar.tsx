import Link from 'next/link'

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  )
}


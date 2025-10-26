import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-white pt-14 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-20 pb-16 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-xiaomi-text mb-6 tracking-tighter">
            博客
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl">
            探索技术世界，分享开发经验
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-gray-200 pb-6">
          <button className="px-6 py-2 bg-xiaomi-orange text-white font-medium hover:bg-xiaomi-orange-hover hover:shadow-lg transition-all text-sm">
            全部
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white text-xiaomi-text font-medium hover:bg-gray-100 transition-colors border border-gray-200 text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Placeholder */}
              <Link href={`/blog/${post.slug}`}>
                <div className="h-64 bg-gradient-to-br from-xiaomi-dark to-xiaomi-dark-light relative overflow-hidden">
                  <div className="absolute inset-0 bg-xiaomi-orange/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span className="text-xiaomi-orange">{post.category}</span>
                </div>

                <h2 className="text-xl font-bold text-xiaomi-text mb-3 group-hover:text-xiaomi-orange transition-colors line-clamp-2 leading-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xiaomi-orange hover:text-xiaomi-orange-dark font-medium group/link text-sm"
                >
                  阅读全文
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


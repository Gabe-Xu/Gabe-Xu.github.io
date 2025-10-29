import { Suspense } from 'react'
import { getAllPosts, getAllCategories, getAllTags, getArchivesByYear } from '@/lib/posts'
import BlogClient from './BlogClient'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  const archives = getArchivesByYear()

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-14 pb-32 flex items-center justify-center">
        <div className="text-gray-400">加载中...</div>
      </div>
    }>
      <BlogClient 
        initialPosts={posts}
        initialCategories={categories}
        initialTags={tags}
        initialArchives={archives}
      />
    </Suspense>
  )
}

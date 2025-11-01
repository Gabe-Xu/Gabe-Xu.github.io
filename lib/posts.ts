import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import crypto from 'crypto'

// 生成文件内容的哈希值（用于URL）
function generateHash(content: string): string {
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8)
}

export interface Post {
  hash: string
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): Post[] {
  // 检查 posts 目录是否存在
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // 生成文章哈希值（仅基于标题）
      const hash = generateHash(data.title || fileName)
      const slug = hash

      return {
        hash,
        slug,
        title: data.title || '',
        date: typeof data.date === 'string' ? data.date : (data.date instanceof Date ? data.date.toISOString().split('T')[0] : ''),
        category: data.category || '未分类',
        excerpt: data.excerpt || '',
        content: content,
        tags: data.tags || []
      } as Post
    })

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostByHash(hash: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${hash}.md`)
    if (!fs.existsSync(fullPath)) return undefined
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      hash,
      slug: hash,
      title: data.title || '',
      date: typeof data.date === 'string' ? data.date : (data.date instanceof Date ? data.date.toISOString().split('T')[0] : ''),
      category: data.category || '未分类',
      excerpt: data.excerpt || '',
      content: content,
      tags: data.tags || []
    } as Post
  } catch (error) {
    return undefined
  }
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category === category)
}

// 预设的通用分类列表 - 涵盖全世界各类文章
const PREDEFINED_CATEGORIES = [
  '科技',
  '文化',
  '艺术',
  '生活',
  '健康',
  '教育',
  '商业',
  '娱乐',
  '体育',
  '旅行',
  '美食',
  '时尚',
  '历史',
  '哲学',
  '政治',
  '经济',
  '社会',
  '环境',
  '设计',
  '音乐',
  '电影',
  '文学',
  '摄影',
]

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  // 统计每个分类的文章数量
  const categoryCount: { [key: string]: number } = {}
  
  posts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1
  })
  
  // 合并预设分类和实际使用的分类
  const allCategories = [...PREDEFINED_CATEGORIES]
  Object.keys(categoryCount).forEach(cat => {
    if (!allCategories.includes(cat)) {
      allCategories.push(cat)
    }
  })
  
  // 按文章数量从多到少排序（没有文章的分类排在后面）
  return allCategories.sort((a, b) => {
    const countA = categoryCount[a] || 0
    const countB = categoryCount[b] || 0
    return countB - countA
  })
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  // 统计每个标签的使用次数
  const tagCount: { [key: string]: number } = {}
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
  })
  
  // 获取所有唯一标签并按使用次数从多到少排序
  return Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
}

export function getArchivesByMonth(): { month: string; count: number; posts: Post[] }[] {
  const posts = getAllPosts()
  const archives: { [key: string]: Post[] } = {}
  
  posts.forEach(post => {
    const date = new Date(post.date)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    if (!archives[monthKey]) {
      archives[monthKey] = []
    }
    archives[monthKey].push(post)
  })

  return Object.entries(archives)
    .map(([month, posts]) => ({
      month,
      count: posts.length,
      posts
    }))
    .sort((a, b) => b.month.localeCompare(a.month))
}

export function getArchivesByYear(): { year: string; count: number; months: { month: string; count: number; posts: Post[] }[] }[] {
  const archivesByMonth = getArchivesByMonth()
  const yearMap: { [key: string]: { month: string; count: number; posts: Post[] }[] } = {}
  
  archivesByMonth.forEach(archive => {
    const year = archive.month.split('-')[0]
    if (!yearMap[year]) {
      yearMap[year] = []
    }
    yearMap[year].push(archive)
  })

  return Object.entries(yearMap)
    .map(([year, months]) => ({
      year,
      count: months.reduce((sum, m) => sum + m.count, 0),
      months: months.sort((a, b) => b.month.localeCompare(a.month))
    }))
    .sort((a, b) => b.year.localeCompare(a.year))
}

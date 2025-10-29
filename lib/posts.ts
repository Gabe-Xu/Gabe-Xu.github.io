export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

// 示例博客文章数据
const posts: Post[] = [
  {
    slug: 'why-bitmap-icons-blurry-ico-format',
    title: '为什么把位图直接当图标会模糊？解读 .ico 文件格式',
    date: '2025-10-29',
    category: '技术',
    excerpt: '许多人在制作程序图标时，习惯直接使用一张位图，但其实 ICO 文件并不是普通的图片格式，而是一个"图像容器"。本文深入解析 ICO 格式的工作原理。',
    content: `
# 为什么把位图直接当图标会模糊？解读 .ico 文件格式

## 什么是 ICO 文件格式

许多人在制作程序图标时，习惯直接使用一张位图（如 PNG 或 JPG），但其实 ICO 文件并不是普通的图片格式，而是一个"图像容器"。

它可以同时包含多张不同分辨率、不同色彩深度的图像。Windows 系统会根据显示位置（如桌面、任务栏）和当前的 DPI 缩放比例，自动选择最合适的一张来显示。

如果 ICO 文件中缺少与显示环境匹配的尺寸，系统就只能强行缩放已有图像，结果往往是模糊或锯齿明显。

换句话说：只要在 ICO 中打包好不同尺寸的图像，桌面、任务栏、资源管理器等位置都能显示出清晰的图标。

## 系统是如何选择图标的

Windows 会根据显示目标的尺寸（例如任务栏图标大小）以及当前缩放比例（如 100%、150%、200%）来挑选最匹配的图像版本。

若存在完全匹配的尺寸，系统会直接使用该图像；若没有，就会选择最接近的尺寸并进行插值缩放；缩放会带来画质损失，因此推荐在 ICO 中预先准备多种尺寸。

| 尺寸规格 | 主要应用场景 | 典型用途 |
|-----------|----------------|------------|
| **16×16** | 状态栏、地址栏、小图标列表 | 浏览器标签、任务栏小图标 |
| **24×24** | 任务栏（Windows 10/11） | 应用程序任务栏图标 |
| **32×32** | 桌面图标、开始菜单、工具栏 | 桌面快捷方式、菜单图标 |
| **48×48** | 桌面图标、文件夹图标 | 桌面大图标、文件资源管理器 |
| **64×64** | 高分辨率显示 | 高 DPI 屏幕下的图标 |
| **128×128** | 高分辨率显示 | 现代 UI 界面、高 DPI 图标 |
| **256×256** | 高分辨率显示 | Windows 应用商店、大尺寸图标 |

## 常见导致图标模糊的原因

未包含目标尺寸：缺少 16×16 或任务栏常用尺寸。

只使用单一 PNG/JPG：系统只能缩放这一张图像，必然失真。

DPI 缩放问题：在 150% 或 200% 等缩放下，若无高分辨率版本会变模糊。

图标缓存问题：有时 Windows 缓存未刷新，更新图标后需清理缓存或重启资源管理器。

## 如何把 PNG 打包成 ICO

[ICO converter](https://www.icoconverter.com/) 支持 PNG、JPEG、GIF、BMP 等多种输入格式，提供多种输出尺寸选择（16×16、32×32、48×48、64×64、256×256），支持位深度设置（8 位、32 位），界面简洁。
    `,
    tags: ['Windows', '图标', 'ICO']
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category)
}

// 预设的通用分类列表 - 涵盖全世界各类文章
const PREDEFINED_CATEGORIES = [
  '技术',
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
  '科学',
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


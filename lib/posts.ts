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
    excerpt: '许多人在制作程序图标时，习惯直接使用一张位图，但其实 .ico 文件并不是普通的图片格式，而是一个"图像容器"。本文深入解析ICO格式的工作原理。',
    content: `
# 为什么把位图直接当图标会模糊？解读 .ico 文件格式

## 什么是 ICO 文件格式

许多人在制作程序图标时，习惯直接使用一张位图（如 PNG 或 JPG），但其实 .ico 文件并不是普通的图片格式，而是一个"图像容器"。

它可以同时包含多张不同分辨率、不同色彩深度的图像。Windows 系统会根据显示位置（如桌面、任务栏）和当前的 DPI 缩放比例，自动选择最合适的一张来显示。

如果 .ico 文件中缺少与显示环境匹配的尺寸，系统就只能强行缩放已有图像，结果往往是模糊或锯齿明显。

换句话说：只要在 .ico 中打包好不同尺寸的图像，桌面、任务栏、资源管理器等位置都能显示出清晰的图标。

## 系统是如何选择图标的

Windows 会根据显示目标的尺寸（例如任务栏图标大小）以及当前缩放比例（如 100%、150%、200%）来挑选最匹配的图像版本。

若存在完全匹配的尺寸，系统会直接使用该图像；若没有，就会选择最接近的尺寸并进行插值缩放；缩放会带来画质损失，因此推荐在 .ico 中预先准备多种尺寸。

## 常见图标尺寸及用途

16×16 - 状态栏、地址栏、小图标列表（浏览器标签、任务栏小图标）

24×24 - 任务栏（Windows 10/11）应用程序任务栏图标

32×32 - 桌面图标、开始菜单、工具栏

48×48 - 桌面图标、文件夹图标

64×64 - 高分辨率显示、高 DPI 屏幕下的图标

128×128 - 高分辨率显示、现代 UI 界面

256×256 - 高分辨率显示、Windows 应用商店、大尺寸图标

## 常见导致图标模糊的原因

未包含目标尺寸：缺少 16×16 或任务栏常用尺寸。

只使用单一 PNG/JPG：系统只能缩放这一张图像，必然失真。

DPI 缩放问题：在 150% 或 200% 等缩放下，若无高分辨率版本会变模糊。

图标缓存问题：有时 Windows 缓存未刷新，更新图标后需清理缓存或重启资源管理器。

## 如何把PNG打包成.ico

推荐使用 https://www.icoconverter.com/ - 支持 PNG、JPEG、GIF、BMP 等多种输入格式，提供多种输出尺寸选择（16×16、32×32、48×48、64×64、256×256），支持位深度设置（8 位、32 位），界面简洁。
    `,
    tags: ['Windows', '图标', 'ICO']
  },
  {
    slug: 'modern-web-design-principles',
    title: '现代Web设计的核心原则',
    date: '2025-10-20',
    category: '设计',
    excerpt: '探索如何打造简洁、优雅且具有识别度的现代网站设计，学习行业领先公司的设计理念。',
    content: `
# 现代Web设计的核心原则

## 极简主义

少即是多。去除不必要的元素，让内容成为焦点。

## 一致性

保持设计语言的一致性，从颜色到排版，从动画到交互。

## 响应式设计

确保在所有设备上都能提供优秀的用户体验。

## 性能优先

快速加载不仅提升用户体验，也有利于SEO。

通过遵循这些原则，我们可以创造出既美观又实用的网站。
    `,
    tags: ['设计', 'Web开发', 'UI/UX']
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js性能优化实践指南',
    date: '2025-10-15',
    category: '技术',
    excerpt: '深入了解Next.js的性能优化技巧，包括图片优化、代码分割、服务端渲染等最佳实践。',
    content: `
# Next.js性能优化实践指南

## 图片优化

使用Next.js的Image组件可以自动优化图片，包括懒加载、响应式图片等。

## 代码分割

Next.js自动进行代码分割，只加载当前页面需要的代码。

## 服务端渲染

利用SSR和SSG提升首屏加载速度和SEO表现。

## 缓存策略

合理使用浏览器缓存和CDN加速。

掌握这些技巧，你的网站性能将得到显著提升。
    `,
    tags: ['Next.js', 'React', '性能优化']
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript开发最佳实践',
    date: '2025-10-10',
    category: '技术',
    excerpt: 'TypeScript已成为大型项目的标配，本文分享如何更好地使用TypeScript提高代码质量。',
    content: `
# TypeScript开发最佳实践

## 类型定义

始终为函数参数和返回值定义类型，避免使用any。

## 接口vs类型别名

了解何时使用interface，何时使用type。

## 泛型的使用

善用泛型创建可复用的组件和函数。

## 严格模式

启用strict模式，享受TypeScript的全部优势。

TypeScript不仅是工具，更是一种编程思维方式。
    `,
    tags: ['TypeScript', 'JavaScript', '编程']
  },
  {
    slug: 'react-hooks-deep-dive',
    title: 'React Hooks深度解析',
    date: '2025-10-05',
    category: '技术',
    excerpt: '全面理解React Hooks的工作原理，掌握useState、useEffect等核心Hook的使用技巧。',
    content: `
# React Hooks深度解析

## 状态管理

管理组件状态的基础Hook。

## 副作用处理

处理副作用，替代生命周期方法。

## 自定义Hooks

封装可复用的逻辑，提高代码复用性。

## 性能优化

使用useMemo和useCallback优化性能。

深入理解Hooks，你将写出更简洁优雅的React代码。
    `,
    tags: ['React', 'Hooks', '前端开发']
  },
  {
    slug: 'tailwind-css-productivity',
    title: 'Tailwind CSS如何提升开发效率',
    date: '2025-09-28',
    category: '技术',
    excerpt: '探讨Tailwind CSS这个实用优先的CSS框架如何帮助开发者快速构建美观的界面。',
    content: `
# Tailwind CSS如何提升开发效率

## 实用优先

通过组合实用类快速构建界面，无需离开HTML。

## 响应式设计

使用响应式前缀轻松实现移动优先设计。

## 自定义配置

灵活的配置系统，轻松定制设计系统。

## 生产优化

自动清除未使用的CSS，保持最小的文件大小。

Tailwind让你专注于创造，而不是纠结于CSS。
    `,
    tags: ['Tailwind CSS', 'CSS', '前端开发']
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


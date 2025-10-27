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
    slug: 'modern-web-design-principles',
    title: '现代Web设计的核心原则',
    date: '2025-10-20',
    category: '设计',
    excerpt: '探索如何打造简洁、优雅且具有识别度的现代网站设计，学习行业领先公司的设计理念。',
    content: `
# 现代Web设计的核心原则

在当今快速发展的数字时代，优秀的网站设计不仅要美观，更要注重用户体验和品牌识别度。

## 1. 极简主义

少即是多。去除不必要的元素，让内容成为焦点。

## 2. 一致性

保持设计语言的一致性，从颜色到排版，从动画到交互。

## 3. 响应式设计

确保在所有设备上都能提供优秀的用户体验。

## 4. 性能优先

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

Next.js作为React生态中最受欢迎的框架之一，提供了许多开箱即用的性能优化特性。

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

TypeScript为JavaScript带来了类型安全，显著提升了代码的可维护性和健壮性。

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

React Hooks彻底改变了我们编写React组件的方式，让函数组件拥有了状态管理能力。

## useState

管理组件状态的基础Hook。

## useEffect

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

Tailwind CSS是一个实用优先的CSS框架，让样式开发变得前所未有的高效。

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

export function getAllCategories(): string[] {
  const categories = posts.map(post => post.category)
  return Array.from(new Set(categories))
}


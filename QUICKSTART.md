# 快速启动指南

## 🚀 5分钟快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

就这么简单！🎉

## 📝 自定义你的博客

### 修改个人信息

#### 1. 首页 Hero 区域
编辑 `app/page.tsx`，找到：
```tsx
<h1>你好，我是 <span>Gabriel</span></h1>
```
将 "Gabriel" 改成你的名字。

#### 2. 导航栏品牌名
编辑 `components/Navbar.tsx`，找到：
```tsx
<Link href="/">Gabriel</Link>
```

#### 3. 页脚信息
编辑 `components/Footer.tsx`，更新：
- 品牌名称
- 描述文字
- 社交媒体链接

#### 4. 关于页面
编辑 `app/about/page.tsx`，更新：
- 个人简介
- 技能列表
- 工作经历

### 添加博客文章

编辑 `lib/posts.ts`，在 `posts` 数组中添加新文章：

```typescript
{
  slug: 'my-new-post',           // URL路径
  title: '我的新文章',            // 标题
  date: '2025-10-26',            // 日期
  category: '技术',              // 分类
  excerpt: '这是文章摘要',        // 摘要
  content: '这是完整的文章内容...', // 正文
  tags: ['标签1', '标签2']       // 标签
}
```

### 修改配色方案

编辑 `tailwind.config.js`，自定义颜色：

```javascript
colors: {
  primary: {
    // 修改这里的颜色值
    500: '#0ea5e9',  // 主色调
    600: '#0284c7',
    // ...
  },
}
```

## 🎨 设计定制

### 修改动画效果

在 `tailwind.config.js` 中自定义动画：

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in',
  'slide-up': 'slideUp 0.6s ease-out',
}
```

### 调整字体

在 `app/globals.css` 中修改字体：

```css
body {
  font-family: '你的字体', -apple-system, ...;
}
```

## 🚢 部署到生产环境

### 使用 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的 GitHub 仓库
4. 点击部署 - 就这么简单！

### 使用其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📦 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 生产运行
npm start

# 代码检查
npm run lint
```

## 🆘 常见问题

### Q: 如何更改端口？
A: 运行 `npm run dev -- -p 3001`

### Q: 如何添加新页面？
A: 在 `app/` 目录下创建新文件夹和 `page.tsx` 文件

### Q: 如何添加图片？
A: 将图片放在 `public/` 目录，然后使用 `/image.jpg` 引用

## 💡 提示

- 修改代码后会自动热重载
- 所有页面都是响应式的
- 使用 TypeScript 获得类型安全
- Tailwind CSS 提供实用优先的样式

## 🔗 有用的链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [React 文档](https://react.dev)

---

祝你构建愉快！如有问题，欢迎联系。✨


# Gabriel 个人博客

我的个人博客，用于记录、整理与分享一些想法和项目。

## ✨ 特性

- 🎨 **现代设计** - 简洁、优雅、富有识别度的界面设计
- 📱 **完全响应式** - 完美适配各种设备和屏幕尺寸
- ⚡ **极速性能** - 基于Next.js 14，优化的加载速度和SEO
- 🎭 **流畅动画** - 精心设计的过渡和动画效果
- 📝 **博客系统** - 完整的文章发布和展示系统
- 🎯 **TypeScript** - 类型安全的代码开发

## 🚀 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel (推荐)

## 📦 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
.
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于页面
│   ├── blog/              # 博客列表和详情页
│   ├── contact/           # 联系页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   └── Footer.tsx         # 页脚
├── lib/                   # 工具函数和数据
│   └── posts.ts           # 博客文章数据
├── public/                # 静态资源
└── tailwind.config.js     # Tailwind 配置
```

## 🎨 设计理念

这个博客网站的设计灵感来自于：

- **Apple** - 极简主义、留白艺术
- **小米** - 年轻化、现代感
- **华为** - 科技感、专业性
- **微软** - 流畅动画、卡片设计
- **腾讯** - 清晰的信息层级

### 核心设计原则

1. **极简主义** - 去除不必要的元素，让内容成为焦点
2. **一致性** - 统一的设计语言和交互模式
3. **可访问性** - 确保所有用户都能轻松使用
4. **性能优先** - 快速加载，流畅体验

## 📝 自定义内容

### 修改个人信息

编辑以下文件以更新个人信息：

- `app/page.tsx` - 首页内容
- `app/about/page.tsx` - 关于页面
- `components/Footer.tsx` - 页脚信息

### 添加博客文章

编辑 `lib/posts.ts` 文件，添加新的文章对象到 `posts` 数组中：

```typescript
{
  slug: 'your-article-slug',
  title: '你的文章标题',
  date: '2025-10-26',
  category: '分类',
  excerpt: '文章摘要',
  content: '文章内容',
  tags: ['标签1', '标签2']
}
```

## 🎯 待办事项

- [ ] 集成CMS系统（如Contentful或Sanity）
- [ ] 添加搜索功能
- [ ] 实现评论系统
- [ ] 添加暗黑模式
- [ ] 集成分析工具
- [ ] RSS订阅功能

## 📄 License

MIT License - 随意使用和修改

## 👤 作者

**Gabriel**

- 网站: [你的网站]
- GitHub: [@你的GitHub]
- Twitter: [@你的Twitter]

---

用 ❤️ 和 Next.js 构建


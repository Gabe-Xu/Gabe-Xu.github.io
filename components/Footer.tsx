import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black font-logo text-xiaomi-text mb-4 tracking-tight">Gabriel</h3>
            <p className="text-gray-500 mb-4 max-w-md text-sm">
              分享技术、设计与生活的思考<br />持续学习，不断进步
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xiaomi-text font-bold mb-4 text-sm">导航</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xiaomi-text font-bold mb-4 text-sm">更多</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  常用工具
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  友情链接
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  关于我
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  我的装备
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xiaomi-text font-bold mb-4 text-sm">关注我</h4>
            <div className="flex space-x-3">
              <a
                href="https://github.com/Gabe-Xu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-xiaomi-orange flex items-center justify-center transition-colors group"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-xiaomi-text group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://x.com/Gabe__Xu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-xiaomi-orange flex items-center justify-center transition-colors group"
                aria-label="X"
              >
                <svg className="w-5 h-5 text-xiaomi-text group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.zhihu.com/people/gabexu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-xiaomi-orange flex items-center justify-center transition-colors group"
                aria-label="知乎"
              >
                <svg className="w-5 h-5 text-xiaomi-text group-hover:text-white" fill="currentColor" viewBox="0 0 1024 1024">
                  <path d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-gray-500 text-xs">
              © {currentYear} Gabriel. All Rights Reserved.
            </p>
            <a 
              href="https://icp.gov.moe/?keyword=20259463" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-xiaomi-orange text-xs transition-colors"
            >
              萌ICP备20259463号
            </a>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-xiaomi-orange text-xs transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-xiaomi-orange text-xs transition-colors">
              使用条款
            </Link>
            <a 
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-xiaomi-orange text-xs transition-colors"
              title="知识共享 署名-非商业性使用-相同方式共享 4.0 国际许可协议"
            >
              CC BY-NC-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


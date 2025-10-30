import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black font-logo text-xiaomi-text mb-4 tracking-tight">Gabriel</h3>
            <p className="text-gray-500 mb-4 max-w-md text-sm">
              分享技术、设计与生活的思考<br />持续学习，不断进步
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xiaomi-text font-bold mb-4 text-sm">快速链接</h4>
            <ul className="space-y-2">
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
              <li>
                <Link href="/links" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  链接
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-xiaomi-orange transition-colors text-sm">
                  关于
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
                <svg className="w-5 h-5 text-xiaomi-text group-hover:text-white" fill="currentColor" viewBox="0 0 200 91">
                  <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.604-5.473h-3.704v-53.22zM46.818 43.162h-16.362c.294-5.306.76-13.632 1.17-22.27l1.597 4.7h8.462c-.005-1.005-.03-2.017-.066-3.038h-7.201l.923-2.71c.397-1.15.922-2.63 1.453-4.107H32.8c-.447 1.41-.975 2.89-1.433 4.107l-1.13 3.318h-5.378c.633-2.26 1.243-4.518 1.618-6.598l-8.814-.9c-.298 2.23-.788 4.753-1.296 7.2h-4.42c-.448-1.06-.897-2.122-1.344-3.183l-7.822 1.985c.44 1.12.764 2.032 1.015 2.89h-3.96v7.16h4.66c-.003 2.23-.01 4.69-.04 7.19l.03-.012.027 6.508c0 .776-.126 1.143-.37 1.454-.24.304-.73.483-1.553.483-.817 0-2.195-.024-3.817-.068l.024 7.32c1.65.074 3.275.11 4.478.11 2.724 0 4.85-.48 6.27-1.53 1.42-1.05 2.14-2.68 2.14-4.87v-3.11c-.016-2.48-.026-4.92-.026-7.32h15.31c-.323 3.653-.82 7.49-1.65 11.53l7.97.23c.87-4.19 1.43-8.18 1.75-11.76h4.18v-7.16h-4.18zm-23.814 0h-5.103c.02-2.44.04-4.887.06-7.33h5.043v7.33z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-gray-500 text-xs">
              © {currentYear} Gabriel
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
          </div>
        </div>
      </div>
    </footer>
  )
}


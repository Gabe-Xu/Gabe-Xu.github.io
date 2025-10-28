export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-14 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-6 md:pb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text mb-6 tracking-tight">使用条款</h1>
          <p className="text-xl text-gray-600">请仔细阅读以下使用条款</p>
        </div>

        {/* Content */}
        <div className="text-xiaomi-text">
          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">1. 接受条款</h2>
          <p className="text-gray-600 leading-7 mb-2">
            欢迎访问本博客。通过访问和使用本网站，您同意遵守这些使用条款。如果您不同意这些条款，请不要使用本网站。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">2. 内容使用</h2>
          <p className="text-gray-600 leading-7 mb-2">
            本网站上的所有内容，包括但不限于文本、图像、代码和设计，均受版权保护。未经明确许可，您不得复制、分发或修改这些内容。
          </p>
          <p className="text-gray-600 leading-7 mb-2">您可以：</p>
          <ul className="list-none pl-6 text-gray-600 leading-7 space-y-1 mb-2">
            <li>• 为个人学习目的查看和阅读内容</li>
            <li>• 在注明出处的情况下引用部分内容</li>
            <li>• 分享文章链接到社交媒体</li>
          </ul>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">3. 用户行为</h2>
          <p className="text-gray-600 leading-7 mb-2">使用本网站时，您同意：</p>
          <ul className="list-none pl-6 text-gray-600 leading-7 space-y-1 mb-2">
            <li>• 不从事任何非法活动</li>
            <li>• 不试图破坏网站的安全或功能</li>
            <li>• 不发送垃圾邮件或恶意内容</li>
            <li>• 尊重他人的隐私和权利</li>
          </ul>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">4. 免责声明</h2>
          <p className="text-gray-600 leading-7 mb-2">
            本网站上的内容仅供参考。虽然我们努力确保信息的准确性，但不对内容的完整性、准确性或时效性做出任何保证。
          </p>
          <p className="text-gray-600 leading-7 mb-2">
            使用本网站提供的信息所造成的任何损失或损害，我们不承担责任。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">5. 外部链接</h2>
          <p className="text-gray-600 leading-7 mb-2">
            本网站可能包含指向第三方网站的链接。这些链接仅为方便用户而提供。我们不对这些外部网站的内容或可用性负责。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">6. 条款变更</h2>
          <p className="text-gray-600 leading-7 mb-2">
            我们保留随时修改这些使用条款的权利。任何更改都将在此页面上发布。继续使用本网站即表示您接受修改后的条款。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">7. 联系方式</h2>
          <p className="text-gray-600 leading-7 mb-2">
            如果您对这些使用条款有任何疑问，请通过联系页面与我们联系。
          </p>
        </div>
      </div>
    </div>
  )
}

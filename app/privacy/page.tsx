export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-14 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-20 pb-4">
          <h1 className="text-5xl sm:text-6xl font-black text-xiaomi-text tracking-tight">隐私政策</h1>
        </div>

        {/* Content */}
        <div className="text-xiaomi-text">
          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">1. 信息收集</h2>
          <p className="text-gray-600 leading-7 mb-2">
            我们重视您的隐私。本网站是个人博客，我们不会收集任何个人身份信息，除非您主动通过联系表单提供。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">2. 使用信息</h2>
          <p className="text-gray-600 leading-7 mb-2">
            通过联系表单收集的信息仅用于回复您的询问。我们不会将您的信息出售、交易或转让给第三方。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">3. Cookies</h2>
          <p className="text-gray-600 leading-7 mb-2">
            本网站可能使用cookies来改善用户体验。您可以选择通过浏览器设置拒绝cookies，但这可能会影响网站的某些功能。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">4. 第三方链接</h2>
          <p className="text-gray-600 leading-7 mb-2">
            本网站可能包含指向第三方网站的链接。我们对这些网站的隐私政策和内容不承担责任。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">5. 安全</h2>
          <p className="text-gray-600 leading-7 mb-2">
            我们采取适当的安全措施来保护您的信息免受未经授权的访问、更改、披露或破坏。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">6. 政策变更</h2>
          <p className="text-gray-600 leading-7 mb-2">
            我们可能会不时更新本隐私政策。任何更改都将在此页面上发布。
          </p>

          <h2 className="text-2xl font-bold text-xiaomi-text mt-8 mb-3">7. 联系我们</h2>
          <p className="text-gray-600 leading-7 mb-2">
            如果您对本隐私政策有任何疑问，请通过联系页面与我们联系。
          </p>
        </div>
      </div>
    </div>
  )
}

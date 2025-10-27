export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部加载条 */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div className="h-full bg-xiaomi-orange animate-loading-bar"></div>
      </div>
    </div>
  )
}

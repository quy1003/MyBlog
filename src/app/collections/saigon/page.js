import {
  ArrowRight,
  MapPin,
  Sun,
  Coffee,
  UtensilsCrossed,
  Building,
} from 'lucide-react'

export default function SaigonStory() {
  return (
    <div
      style={{ top: 0, bottom: 0 }}
      className="min-h-screen bg-[#0f172a] text-white"
    >
      {/* Hero Section with Parallax */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              SÀI GÒN
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Nơi truyền thống gặp hiện đại, nơi quá khứ chạm tương lai
            </p>
            <div className="animate-bounce">
              <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Cards */}
      <section className="relative z-10 -mt-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <Sun className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Khí Hậu</h3>
            <p className="text-gray-300">
              Nhiệt đới gió mùa, nắng ấm quanh năm
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <Coffee className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cà Phê</h3>
            <p className="text-gray-300">Văn hóa cà phê độc đáo, đa dạng</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <UtensilsCrossed className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ẩm Thực</h3>
            <p className="text-gray-300">Thiên đường ẩm thực đường phố</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <Building className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kiến Trúc</h3>
            <p className="text-gray-300">Hòa quyện Đông - Tây độc đáo</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Featured Locations */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Điểm Đến Nổi Bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1618028698669-9e3b00c3d556?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nhà thờ Đức Bà"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold">Nhà Thờ Đức Bà</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Quận 1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=800"
                  alt="Chợ Bến Thành"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold">Chợ Bến Thành</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Quận 1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://hoabinhbus.com/source/2508/2%20HoaBinhBus.jpg"
                  alt="Phố đi bộ Nguyễn Huệ"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold">
                    Phố Đi Bộ Nguyễn Huệ
                  </h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Quận 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Trải Nghiệm Sài Gòn</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Sài Gòn không chỉ là những công trình kiến trúc hay món ăn đường
                phố. Đó là những con người thân thiện, là nhịp sống hối hả nhưng
                đầy tình người, là những góc phố rợp bóng cây xanh và là những
                quán cà phê nhỏ ấm cúng.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Khám Phá Ngay
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571424161765-c4080147f74f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sài Gòn 2"
                className="w-full h-48 object-cover rounded-xl mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1593449227036-9de17c6316e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sài Gòn 1"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Đăng Ký Nhận Thông Tin</h2>
            <p className="text-gray-300 mb-6">
              Nhận những thông tin mới nhất về du lịch Sài Gòn và các ưu đãi hấp
              dẫn
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Đăng Ký
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            © 2025 Quy Nguyen Development. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

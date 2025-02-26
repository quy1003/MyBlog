import {
  Cloud,
  Coffee,
  Flower2,
  Mountain,
  Navigation,
  Sun,
  ThermometerSun,
  Wind,
} from 'lucide-react'

export default function DaLatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580824378537-e119885b93f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Weather Widget */}
        <div
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white border border-white/20"
        >
          <div className="flex items-center gap-4">
            <Cloud className="w-8 h-8" />
            <div>
              <div className="text-2xl font-semibold">16°C</div>
              <div className="text-sm opacity-80">Mây và sương mù</div>
            </div>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div className="max-w-4xl px-4 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">Đà Lạt</h1>
            <p className="text-xl md:text-2xl text-white-500">
              Nơi tĩnh lặng bình yên giữa núi rừng chênh vênh
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <ThermometerSun className="w-4 h-4" />
                  <span>15-25°C</span>
                </div>
              </div>
              <div
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  <span>1,500 m</span>
                </div>
              </div>
              <div
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  <span>Khí hậu ôn hòa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Highlights Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlight Card 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1563802918340-81d0d57e6102?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vườn hoa Đà Lạt"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Thành Phố Ngàn Hoa</h3>
                  <p className="text-sm text-gray-200">
                    Thiên đường của các loài hoa
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Đà Lạt được mệnh danh là thành phố ngàn hoa với khí hậu ôn hòa
                  quanh năm, là điều kiện lý tưởng để các loài hoa phát triển.
                </p>
              </div>
            </div>

            {/* Highlight Card 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cà phê Đà Lạt"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Thiên Đường Cà Phê</h3>
                  <p className="text-sm text-gray-200">
                    Hương vị độc đáo của cao nguyên
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Với độ cao lý tưởng và khí hậu mát mẻ, Đà Lạt là nơi sản sinh
                  ra những hạt cà phê Arabica thơm ngon nổi tiếng.
                </p>
              </div>
            </div>

            {/* Highlight Card 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src="https://ik.imagekit.io/tvlk/blog/2023/07/dinh-bao-dai-1.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"
                  alt="Kiến trúc Đà Lạt"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Kiến Trúc Pháp</h3>
                  <p className="text-sm text-gray-200">
                    Di sản kiến trúc độc đáo
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Những công trình kiến trúc thời Pháp với phong cách độc đáo đã
                  tạo nên nét đặc trưng cho thành phố nghỉ dưỡng này.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="bg-[#1a365d] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Điểm Đến Nổi Bật
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={attraction.image || '/placeholder.svg'}
                      alt={attraction.name}
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Trải Nghiệm Đà Lạt
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        {activity.icon}
                        {activity.name}
                      </h3>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584457173475-2996e0757ab8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Đà Lạt activities"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-gray-600">Điểm tham quan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558321601-49a3e70d4360?q=80&w=1920')",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng khám phá Đà Lạt?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Đăng ký nhận thông tin du lịch Đà Lạt mới nhất và những ưu đãi hấp
              dẫn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Đăng Ký Ngay
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Quy Nguyen Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Data
const attractions = [
  {
    name: 'Hồ Xuân Hương',
    description: 'Trái tim của thành phố Đà Lạt',
    image:
      'https://media.gody.vn/images/lam-dong/ho-xuan-huong/1-2017/20170109040526-ho-xuan-huong-gody%20(12).jpg',
  },
  {
    name: 'Nhà Thờ Con Gà',
    description: 'Kiến trúc Gothic độc đáo',
    image: 'https://static.momocdn.net/img/booking/nhathoconga.jpg',
  },
  {
    name: 'Đồi Robin',
    description: 'Điểm ngắm cảnh tuyệt đẹp',
    image:
      'https://mia.vn/media/uploads/blog-du-lich/doi-robin-ngam-nhin-toan-canh-da-lat-tho-mong-tu-tren-cao-06-1634643554.jpeg',
  },
  {
    name: 'Thung Lũng Tình Yêu',
    description: 'Không gian lãng mạn',
    image: 'https://thuthachviet.com/images/uploads/thung-lung-tinh-yeu1.jpg',
  },
  {
    name: 'Ga Đà Lạt',
    description: 'Di tích lịch sử văn hóa',
    image: 'https://halotravel.vn/wp-content/uploads/2020/12/ga-da-lat-3.jpg',
  },
  {
    name: 'Chợ Đà Lạt',
    description: 'Trung tâm ẩm thực và mua sắm',
    image: 'https://dulich3mien.vn/wp-content/uploads/2022/05/1-min-8.jpg',
  },
]

const activities = [
  {
    name: 'Vườn Hoa Thành Phố',
    description: 'Khám phá các loại hoa đặc trưng của Đà Lạt',
    icon: <Flower2 className="w-5 h-5 text-pink-500" />,
  },
  {
    name: 'Tour Cà Phê',
    description: 'Trải nghiệm quy trình sản xuất cà phê chất lượng cao',
    icon: <Coffee className="w-5 h-5 text-brown-500" />,
  },
  {
    name: 'Khám Phá Thành Phố',
    description: 'Tham quan các địa điểm nổi tiếng bằng xe đạp',
    icon: <Navigation className="w-5 h-5 text-blue-500" />,
  },
  {
    name: 'Ngắm Bình Minh',
    description: 'Chiêm ngưỡng bình minh tuyệt đẹp trên đồi Robin',
    icon: <Sun className="w-5 h-5 text-yellow-500" />,
  },
]

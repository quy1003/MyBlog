'use client'
import { useRouter } from 'next/navigation'

export default function TravelDestinations() {
  const router = useRouter()
  const handleOnclick = (address) => {
    router.push(`collections/${address}`)
  }
  const destinations = [
    {
      id: 1,
      name: 'Sài Gòn',
      address: 'saigon',
      image:
        'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800',
    },
    {
      id: 2,
      name: 'Đà Lạt',
      address: 'dalat',
      image:
        'https://images.unsplash.com/photo-1552310065-aad9ebece999?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Vũng Tàu',
      address: 'vungtau',
      image:
        'https://images.unsplash.com/photo-1623596711744-c10ed15581d9?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Nha Trang',
      address: 'nhatrang',
      image:
        'https://images.unsplash.com/photo-1562997575-5dec4f9aa653?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Măng Đen',
      address: 'mangden',
      image:
        'https://images.unsplash.com/photo-1709186237866-19aab6e0112a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE0lQzQlODNuZyUyMCVDNCU5MGVufGVufDB8fDB8fHww',
    },
    {
      id: 6,
      name: 'Bình Thuận',
      address: 'binhthuan',
      image:
        'https://images.unsplash.com/photo-1689952057618-599ac100ed36?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1
        className="text-3xl font-bold mb-8 text-center"
        style={{
          color: 'white',
          backgroundColor: 'black',
          padding: '5px',
          marginTop: '-18px',
        }}
      >
        Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div
            onClick={() => handleOnclick(destination.address)}
            key={destination.id}
            className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-white text-xl font-bold">
                {destination.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

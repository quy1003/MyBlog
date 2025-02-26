'use client'

import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone, User } from 'lucide-react'

export default function PersonalInfoForm() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1590347945111-a14c8efd9249?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '40px',
      }}
    >
      <div
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className="text-3xl font-bold text-center p-1 text-white mb-6"></div>
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
            <div className="relative w-48 h-48 shadow-lg rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbdd85bp4/image/upload/v1740497934/mainPic_r8xasc.jpg"
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                unoptimized={true}
              />
            </div>
          </div>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <label
                style={{ color: 'rgba(255,0,0,0.9)' }}
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="flex items-center">
                <User className="text-gray-400 mr-2" size={20} />
                <span style={{ color: 'white' }} className="text-lg">
                  Nguyễn Thi Quý
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label
                style={{ color: 'rgba(255,0,0,0.9)' }}
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-2" size={20} />
                <span style={{ color: 'white' }} className="text-lg">
                  0779179473
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label
                style={{ color: 'rgba(255,0,0,0.9)' }}
                className="block text-sm font-medium text-gray-700"
              >
                Gmail
              </label>
              <div className="flex items-center">
                <Mail className="text-gray-400 mr-2" size={20} />
                <span style={{ color: 'white' }} className="text-lg">
                  quy021003@gmail.com
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label
                style={{ color: 'rgba(255,0,0,0.9)' }}
                className="block text-sm font-medium text-gray-700"
              >
                Facebook
              </label>
              <div className="flex items-center">
                <Facebook className="text-gray-400 mr-2" size={20} />
                <a
                  href="https://www.facebook.com/thiquy.nguyen.02102003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  thiquy.nguyen.02102003
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <label
                style={{ color: 'rgba(255,0,0,0.9)' }}
                className="block text-sm font-medium text-gray-700"
              >
                Instagram
              </label>
              <div className="flex items-center">
                <Instagram className="text-gray-400 mr-2" size={20} />
                <a
                  href="https://www.instagram.com/selten03_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  selten03_
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

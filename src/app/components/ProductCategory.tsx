'use client'

import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Living Room',
    description: 'Comfortable sofas, coffee tables, and entertainment units for relaxing moments.',
    image: '/living-room.jpg',
    href: '/categories/living-room',
  },
  {
    name: 'Dining',
    description: 'Elegant dining tables and chairs perfect for meals and gatherings.',
    image: '/dining.jpg',
    href: '/categories/dining',
  },
  {
    name: 'Office',
    description: 'Ergonomic desks, chairs, and storage solutions for productive workspaces.',
    image: '/office.jpg',
    href: '/categories/office',
  },
  {
    name: 'Bedroom',
    description: 'Cozy beds, wardrobes, and bedside tables to enhance your rest.',
    image: '/bedroom.jpg',
    href: '/categories/bedroom',
  },
]

const Categories = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-2 text-[#f59a69]">
        Sample Product Categories
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore our carefully curated furniture collections for every room in your home. Discover comfort, functionality, and timeless style across our main categories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#1c1a19]">{category.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/Categories"
          className="inline-block bg-[#e2814d] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#d06f3c] transition duration-300"
        >
          Browse All Categories
        </Link>
      </div>
    </section>
  )
}

export default Categories

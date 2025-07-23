'use client'

import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Living Room Layout Ideas',
    excerpt: 'Discover creative layouts to maximize space, comfort, and aesthetics in your living room.',
    image: '/blogsliving-room.jpg',
    link: '/blog/living-room-layouts',
  },
  {
    id: 2,
    title: 'Dining Space Styling Tips',
    excerpt: 'Explore the latest trends and timeless tips for styling your dining area.',
    image: '/blogsdining-style.jpg',
    link: '/blog/dining-tips',
  },
  {
    id: 3,
    title: 'Choosing the Right Office Desk',
    excerpt: 'Get expert advice on picking the perfect desk to suit your working habits and style.',
    image: '/blogsoffice-desk.jpg',
    link: '/blog/office-desk-guide',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#f59a69]">Latest From Our Blog</h2>
        <p className="text-gray-600 mt-3 text-lg">Design insights, furniture tips, and inspiration for your dream space.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-[#f9f9f9] rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={post.link}
                className="text-[#1c1a19] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection

// app/blogs/page.tsx
'use client';

import Image from 'next/image';
import blogs from '../data/blogs.json';
import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';
import BlogSearch from '../components/BlogSearch';

const Blog = () => {


  return (
    <div className="mx-auto space-y-16">
      <HeroCarousel />

      <section className='max-w-7xl mx-auto px-4 py-12'>
        <h2 className="text-3xl font-bold mb-6 text-[#f59a69]">Featured Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.slug}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
       <BlogSearch />
      </section>
    </div>
  );
};

export default Blog;

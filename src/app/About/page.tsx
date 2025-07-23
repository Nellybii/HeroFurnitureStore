'use client'

import Image from "next/image"

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#f59a69] mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We believe that furniture should be more than just functional — it should tell a story, elevate your lifestyle, and make your space feel like home.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <Image
            src="/about-image.jpg"
            alt="Beautiful crafted furniture"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#f59a69]">Craftsmanship Meets Comfort</h2>
          <p className="text-gray-700 mb-4">
            Our curated collection blends timeless craftsmanship with modern comfort. Each piece is made with care and precision, using high-quality materials to ensure durability and style.
          </p>
          <p className="text-gray-700">
            Whether you are furnishing your living room, office, or bedroom, we aim to provide stylish and sustainable furniture that suits your needs and personal taste.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#f59a69]">Why Choose Us?</h2>
        <ul className="grid md:grid-cols-3 gap-8 mt-8 text-left max-w-4xl mx-auto">
          <li className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
            <p className="text-gray-600">We handpick the best woods, fabrics, and finishes to ensure long-lasting beauty and comfort.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Customer First</h3>
            <p className="text-gray-600">Your satisfaction is our top priority — from selection to delivery and beyond.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Sustainable Design</h3>
            <p className="text-gray-600">We are committed to environmentally conscious manufacturing and packaging.</p>
          </li>
        </ul>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#f59a69] mb-4">Ready to Transform Your Space?</h2>
        <p className="text-gray-600 mb-6">Explore our product categories and find the perfect pieces for your home or office.</p>
        <a
          href="/categories"
          className="inline-block bg-[#e2814d] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#d06f3c] transition duration-300"
        >
          Browse Our Collection
        </a>
      </section>
    </main>
  )
}

export default About

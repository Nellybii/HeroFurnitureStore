'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Buttons'

const AboutSection = () => {
  return (
    <section className="bg-[#f9f7f6] py-16 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#f59a69] mb-6 leading-tight">
            Bringing Comfort & Elegance to Your Space
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            FurniSpace is your go-to destination for stylish, high-quality furniture designed to elevate your living experience.
            Whether you're furnishing a cozy home, a modern office, or a vibrant dining space, our collections blend craftsmanship,
            comfort, and contemporary design tailored to your lifestyle.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            With a passion for beautiful interiors and an eye for lasting quality, we help you create spaces that feel like home.
            Explore a wide range of carefully curated pieces that add both function and personality to your rooms.
          </p>
          <Button>
            <Link
              href="/About"
              className="inline-block text-white rounded-xl text-lg hover:bg-[#383635] transition duration-300"
            >
              Learn More About Us
            </Link>
          </Button>
        </div>

        <div className="w-full h-72 md:h-96 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about-image.jpg"
            alt="About FurniSpace"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection

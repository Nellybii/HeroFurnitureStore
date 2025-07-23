'use client'

import Button from "./Buttons"

const ContactSection = () => {
  return (
    <section className="bg-[#f3f4f6] py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#f59a69] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We would love to hear from you! Reach out with any questions, suggestions, or just to say hello.
          </p>
          <ul className="text-gray-700 space-y-4">
            <li>
              📍 <span className="font-medium">Location:</span> Nairobi, Kenya
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +254 700 123 456
            </li>
            <li>
              ✉️ <span className="font-medium">Email:</span> info@furnishop.com
            </li>
          </ul>
        </div>

        <form className="bg-white rounded-xl shadow p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here..."
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full text-white py-3 rounded-lg font-medium transition"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection

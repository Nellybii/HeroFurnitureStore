import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#524641] text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/logo.png"
            alt="FurniSpace Logo"
            width={50}
            height={50}
            className="mb-3"
          />
          <h2 className="text-white text-2xl font-bold mb-3">FurniSpace</h2>
          <p className="text-sm">
            Modern, timeless furniture for every space. Crafted for comfort,
            designed for elegance.
          </p>
          <p className="mt-4">
            Email:{" "}
            <a href="mailto:info@furnispace.com" className="hover:text-white">
              info@furnispace.com
            </a>
          </p>
          <p>Address: 123 Furni St, Nairobi City</p>
          <p className="mt-2">
            Call us:{" "}
            <a href="tel:+254700123456" className="hover:text-white">
              +254 700 123 456
            </a>
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/categories/living-room" className="hover:text-white">
                Living Room
              </Link>
            </li>
            <li>
              <Link href="/categories/dining" className="hover:text-white">
                Dining
              </Link>
            </li>
            <li>
              <Link href="/categories/office" className="hover:text-white">
                Office
              </Link>
            </li>
            <li>
              <Link href="/categories/bedroom" className="hover:text-white">
                Bedroom
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md w-full sm:w-auto text-black"
            />
            <button
              type="submit"
              className="bg-[#e2814d] text-white px-4 py-2 rounded-md hover:bg-[#d06f3c] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} FurniSpace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

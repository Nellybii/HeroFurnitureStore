'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-200 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-[#383635] text-2xl font-semibold">
          <Image src="/Logo.png" alt="Logo" width={50} height={50} />
          <span>HeroFurniture</span>
        </div>

        <button
          className="md:hidden text-[#e2814d]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex items-center space-x-6 font-bold">
          <Link href="/" className="text-[#e2814d] hover:text-[#c76a3c]">Home</Link>
          <Link href="/About" className="text-[#e2814d] hover:text-[#c76a3c]">About</Link>
          <Link href="/Categories" className="text-[#e2814d] hover:text-[#c76a3c]">Categories</Link>
          <Link href="/Blog" className="text-[#e2814d] hover:text-[#c76a3c]">Blog</Link>
          <Link href="/Contact" className="text-[#e2814d] hover:text-[#c76a3c]">Contact</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-blue-500 hover:text-blue-700">Logout</button>
          ) : (
            <Link href="/Login" className="text-blue-500 hover:text-blue-700">Login</Link>
          )}
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col mt-4 space-y-3 md:hidden font-bold">
          <Link href="/" className="text-[#e2814d] hover:text-[#c76a3c]">Home</Link>
          <Link href="/About" className="text-[#e2814d] hover:text-[#c76a3c]">About</Link>
          <Link href="/Categories" className="text-[#e2814d] hover:text-[#c76a3c]">Categories</Link>
          <Link href="/Blog" className="text-[#e2814d] hover:text-[#c76a3c]">Blog</Link>
          <Link href="/Contact" className="text-[#e2814d] hover:text-[#c76a3c]">Contact</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-[#e2814d] hover:text-[#c76a3c]">Logout</button>
          ) : (
            <Link href="/Login" className="text-[#e2814d] hover:text-[#c76a3c]">Login</Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default NavBar;

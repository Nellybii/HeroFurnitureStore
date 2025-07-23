'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className='bg-gray-200 p-4 shadow-md flex justify-between items-center'>
      <div className='flex items-center space-x-2 text-[#383635] text-2xl font-semibold'>
        <Image
          src="/Logo.png"
          alt="/Logo2.png"
          width={50}
          height={50}
        />
        <span>HeroFurniture</span>
      </div>

      <nav className='flex items-center space-x-6 font-bold'>
        <Link href="/" className="text-[#e2814d] hover:text-[#c76a3c]">Home</Link>
        <Link href="/About" className="text-[#e2814d] hover:text-[#c76a3c]">About</Link>
        <Link href="/Categories" className="text-[#e2814d] hover:text-[#c76a3c]">Categories</Link>
        <Link href="/Blog" className="text-[#e2814d] hover:text-[#c76a3c]">Blog</Link>
        <Link href="/Contact" className="text-[#e2814d] hover:text-[#c76a3c]">Contact</Link>
        <button
          onClick={handleAuthToggle}
          className="text-blue-500 hover:text-blue-700"
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;

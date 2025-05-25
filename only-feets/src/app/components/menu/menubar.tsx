'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "./menubar.css";

export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    return (
      <nav className="bg-black border-b shadow-md font-color-menu-bar">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Only Feets
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/pages/videos" className="hover:text-blue-600">Videos</Link>
          <Link href="/" className="hover:text-blue-600">Colorfull</Link>
          <Link href="/" className="hover:text-blue-600">Nails</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/" className="block hover:text-blue-600">Classic</Link>
          <Link href="/" className="block hover:text-blue-600">Colorfull</Link>
          <Link href="/" className="block hover:text-blue-600">Nails</Link>
        </div>
      )}
    </nav>
    )
  }

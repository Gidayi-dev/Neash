import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#products' },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-baby-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-baby-pink-100 rounded-full flex items-center justify-center">
              <span className="text-baby-pink-600 font-bold text-xl">N</span>
            </div>
            <h1 className="text-2xl font-bold text-black">Neash</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-baby-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-baby-pink-50 rounded-full transition-colors duration-300">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-baby-pink-50 rounded-full transition-colors duration-300">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-baby-pink-50 rounded-full transition-colors duration-300">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-baby-pink-50 rounded-full transition-colors duration-300 relative">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-baby-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-baby-pink-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-baby-pink-600 hover:bg-baby-pink-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'How To Play', href: '/how-to-play' },
  { label: 'Game Modes', href: '/game-modes' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About Us', href: '/about' },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#033330] fixed top-0 left-0 z-50 w-full">
      <div className="w-full px-4 md:px-20 py-3 md:h-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="LogiQuest"
              className="w-10 h-10 md:w-16 md:h-[4.4rem] mr-2"
            />
            <span className="text-[#CFFDED] text-[2rem] font-bold">LogiQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-white hover:text-gray-300 font-medium text-xl transition-colors ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-white hover:bg-[#004d43] transition-colors ${
                    location.pathname === item.href ? 'bg-[#004d43]' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


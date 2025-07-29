'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Brasil', href: '#', isActive: true },
    { label: 'Internacional', href: '#' },
    { label: 'Mercado', href: '#' },
    { label: 'Ao Vivo', href: '#' },
    { label: 'Vídeos', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg lg:text-xl">⚽</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">•</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Tempo de Bola FC
              </h1>
              <p className="text-xs text-gray-500 hidden lg:block">Notícias em tempo real</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                  item.isActive
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
                {item.isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200/50">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 font-medium transition-all duration-200 rounded-lg ${
                  item.isActive
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-around pt-4 border-t border-gray-200/50">
              <button className="p-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                <Bell className="w-5 h-5" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              <button className="p-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../atoms/Logo';
import { useNavigation } from '../../hooks/useNavigation';

const Navigation = () => {
  const { isMenuOpen, activeSection, navItems, toggleMenu, handleNavClick } = useNavigation();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`relative text-gray-900 hover:text-orange-600 transition-all duration-300 font-medium group ${
                    activeSection === item.id ? 'text-orange-600' : ''
                  }`}
                >
                  {item.label}
                  {/* Línea animada debajo del elemento activo */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? 'w-full' : ''
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`block px-3 py-2 text-gray-900 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 ${
                activeSection === item.id ? 'text-orange-600 bg-orange-50 rounded-md' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

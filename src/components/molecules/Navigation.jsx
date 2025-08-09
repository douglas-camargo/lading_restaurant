import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../atoms/Logo';
import { useNavigation } from '../../hooks/useNavigation';

const Navigation = () => {
  const { isMenuOpen, activeSection, navItems, toggleMenu, handleNavClick } = useNavigation();

  // Constantes de clases reutilizables
  const navBase = "fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50";
  const containerBase = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const navFlex = "flex justify-between items-center h-16";
  const desktopNav = "hidden md:block";
  const navItemsContainer = "ml-10 flex items-baseline space-x-8";
  
  // Clases para botón móvil
  const mobileButton = "text-gray-900 hover:text-orange-600 transition-all duration-300 transform hover:scale-110";
  const mobileButtonHidden = "md:hidden";
  
  // Clases para navegación móvil
  const mobileNavBase = "md:hidden transition-all duration-300 ease-in-out";
  const mobileNavOpen = "max-h-96 opacity-100";
  const mobileNavClosed = "max-h-0 opacity-0 overflow-hidden";
  const mobileNavContainer = "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t";
  
  // Clases para enlaces móviles
  const mobileLinkBase = "block px-3 py-2 text-gray-900 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2";
  const mobileLinkActive = "text-orange-600 bg-orange-50 rounded-md";

  return (
    <nav className={navBase}>
      <div className={containerBase}>
        <div className={navFlex}>
          <Logo />
          
          {/* Desktop Navigation */}
          <div className={desktopNav}>
            <div className={navItemsContainer}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`nav-link group ${
                    activeSection === item.id ? 'nav-link-active' : ''
                  }`}
                >
                  {item.label}
                  {/* Línea animada debajo del elemento activo */}
                  <span className={`nav-link-underline group-hover:w-full ${
                    activeSection === item.id ? 'nav-link-underline-active' : ''
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={mobileButtonHidden}>
            <button
              onClick={toggleMenu}
              className={mobileButton}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${mobileNavBase} ${
        isMenuOpen ? mobileNavOpen : mobileNavClosed
      }`}>
        <div className={mobileNavContainer}>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`${mobileLinkBase} ${
                activeSection === item.id ? mobileLinkActive : ''
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

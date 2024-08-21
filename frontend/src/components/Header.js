import React, { useState, useEffect } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <a href="#" className="logo">Saran.</a>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="menu-icon" className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu}></div>
    </header>
  );
}

export default Header;
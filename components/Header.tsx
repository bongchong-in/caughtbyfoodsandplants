
import React, { useState, useEffect, memo } from 'react';
import { staticText } from '../data/journalData';

const Header: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 px-6 flex justify-between items-center text-[#3c2f2f] transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'py-3 bg-[#f2ebe0]/90 backdrop-blur-sm shadow-[0_2px_20px_rgba(60,47,47,0.05)] border-b border-[#3c2f2f]/5' 
        : 'py-6 mix-blend-multiply bg-transparent'
    }`}>
      <div className="text-2xl md:text-3xl font-bold tracking-wide" style={{ fontFamily: 'Crimson Text, serif' }}>
        {staticText.header}
      </div>
    </nav>
  );
});

export default Header;

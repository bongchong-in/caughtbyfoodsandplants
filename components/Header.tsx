import React, { useState, useEffect, memo } from 'react';
import { Menu } from 'lucide-react';
import { staticText, uiLabels } from '../data/journalData';

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = memo(({ onMenuOpen }) => {
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
      <button 
        onClick={onMenuOpen} 
        className="group flex items-center gap-2 text-sm transition-colors"
      >
        <span className="uppercase tracking-widest text-xs font-bold opacity-70 group-hover:text-[#b0893e]">{uiLabels.menuIndex}</span> 
        <div className={`p-2 border border-[#3c2f2f]/20 rounded-full transition-all ${isScrolled ? 'bg-transparent' : 'bg-[#f2ebe0]/50 backdrop-blur-sm'} group-hover:border-[#b0893e] group-hover:text-[#b0893e]`}>
           <Menu size={20} />
        </div>
      </button>
    </nav>
  );
});

export default Header;
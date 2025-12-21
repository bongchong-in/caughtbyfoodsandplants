import React from 'react';
import { X } from 'lucide-react';
import { menuItems, assets } from '../data/journalData';

interface MenuOverlayProps {
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#f2ebe0] z-[60] flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply" 
          style={{ backgroundImage: assets.noiseTexture }}>
      </div>
      <button onClick={onClose} className="absolute top-8 right-8 text-[#3c2f2f] hover:rotate-90 transition-transform">
        <X size={32} strokeWidth={1.5} />
      </button>
      
      <div className="space-y-8 text-center relative z-10">
        {menuItems.map((item) => (
          <a key={item} href="#" className="block text-4xl md:text-6xl font-serif text-[#3c2f2f]/40 hover:text-[#3c2f2f] hover:italic transition-all duration-300">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
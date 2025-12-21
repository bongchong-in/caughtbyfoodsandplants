import React, { memo } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig, uiLabels, assets } from '../data/journalData';

const FloatingContact: React.FC = memo(() => {
  return (
    <a 
      href={siteConfig.whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group print:hidden"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative">
         <div className="absolute inset-0 bg-[#dcb25b] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
         <div className="relative bg-[#3c2f2f] text-[#dcb25b] w-14 h-14 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-[#dcb25b]/20 overflow-hidden">
           {/* Texture on button */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: assets.buttonTexture }}></div>
           <MessageCircle size={28} strokeWidth={1.5} className="relative z-10" />
         </div>
         
         {/* Tooltip Label */}
         <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#fff9f0] text-[#3c2f2f] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[#e6e1d6] translate-x-2 group-hover:translate-x-0 transform hidden md:block">
           {uiLabels.sayHello}
         </div>
      </div>
    </a>
  );
});

export default FloatingContact;
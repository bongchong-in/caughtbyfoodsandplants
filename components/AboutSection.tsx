import React, { memo } from 'react';
import { images, staticText } from '../data/journalData';

interface AboutSectionProps {
  onOpenAbout: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = memo(({ onOpenAbout }) => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative">
       <div className="absolute top-10 left-10 text-[200px] opacity-5 text-[#dcb25b] font-serif select-none pointer-events-none z-0">"</div>

      <div className="relative z-10 bg-[#f7f3eb] p-8 md:p-14 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rotate-1 border border-[#e6e1d6] max-w-4xl mx-auto">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-[#ffffff]/40 rotate-2 backdrop-blur-[1px] shadow-sm border border-white/30"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="font-handwriting text-4xl text-[#b0893e] -rotate-2 transform origin-bottom-left">{staticText.about.handwrittenTitle}</h3>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-[#3c2f2f]">
              {staticText.about.mainQuote}
            </h2>
            <p className="text-xl text-[#5c4f45] leading-relaxed font-serif">
              {staticText.about.body}
            </p>
            <div className="pt-6">
               <button 
                 onClick={onOpenAbout}
                 className="text-xs font-bold uppercase tracking-[0.25em] border-b border-[#dcb25b] pb-2 text-[#3c2f2f] hover:text-[#b0893e] transition-colors"
               >
                 {staticText.about.cta}
               </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative group">
            <div className="p-4 bg-white shadow-md rotate-2 transform transition-transform duration-500 group-hover:rotate-0 border border-gray-100 relative">
              <img src={images.profile} alt="Family" className="w-full aspect-[4/5] object-cover filter grayscale-[30%] sepia-[20%] contrast-100" />
              <div className="absolute bottom-2 right-4 font-handwriting text-gray-400 text-xl">{staticText.about.year}</div>
            </div>
            <div className="absolute -top-2 -right-2 w-20 h-6 bg-[#ffffff]/50 -rotate-12 backdrop-blur-[1px] shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
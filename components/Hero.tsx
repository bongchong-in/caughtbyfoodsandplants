import React, { useState, memo } from 'react';
import { UtensilsCrossed, Flower2, ArrowRight } from 'lucide-react';
import { images, staticText, uiLabels } from '../data/journalData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = memo(({ onNavigate }) => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const splitPositionClass = hoveredSide === 'left' ? 'md:left-[65%]' : hoveredSide === 'right' ? 'md:left-[35%]' : 'md:left-1/2';

  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row bg-[#e8e0d2]">
      {/* CENTER SPINE */}
      <div className={`absolute top-0 bottom-0 w-24 -translate-x-1/2 z-30 pointer-events-none hidden md:block transition-all duration-1000 ease-in-out left-1/2 ${splitPositionClass}`}
           style={{ background: 'linear-gradient(90deg, transparent, rgba(60, 47, 47, 0.08) 45%, rgba(60, 47, 47, 0.08) 55%, transparent)' }}>
      </div>

      {/* LEFT: KITCHEN */}
      <div 
        className={`relative h-1/2 md:h-full transition-all duration-1000 ease-in-out flex flex-col justify-center items-center overflow-hidden cursor-pointer group
          ${hoveredSide === 'left' ? 'md:w-[65%]' : hoveredSide === 'right' ? 'md:w-[35%]' : 'md:w-1/2'}
          w-full bg-[#f2ebe0] border-b border-[#d6cbb5] md:border-b-0
        `}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/10 to-transparent z-20 pointer-events-none hidden md:block mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#5c4033] mix-blend-color opacity-30 z-10 transition-opacity duration-700 group-hover:opacity-10"></div>
        <div className="absolute inset-0 bg-[#f2ebe0] mix-blend-multiply opacity-20 z-10"></div>
        
        <img 
          src={images.kitchenHero} 
          alt="Kitchen" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter sepia-[0.4] brightness-90 contrast-[0.9]"
        />
        
        <div className="relative z-20 text-center p-4">
           <div className="bg-[#f7f3eb] text-[#3c2f2f] px-8 py-10 shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1 max-w-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 rotate-1 backdrop-blur-sm border-l border-r border-white/20 shadow-sm"></div>
              <div className="mb-3 text-[#dcb25b] opacity-90">
                <UtensilsCrossed size={28} className="mx-auto" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-2 tracking-tight">{staticText.hero.food.title}</h2>
              <p className="font-handwriting text-[#4a4238] text-xl md:text-2xl mt-2 group-hover:block hidden transition-all">
                {staticText.hero.food.subtitle}
              </p>
              
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('food-entries'); }}
                className="mt-6 border-t border-[#d6cbb5] pt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 w-full text-left group/btn cursor-pointer flex items-center gap-3 focus:outline-none"
                aria-label="View food recipes"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8c6b38] relative">
                  {uiLabels.turnPage}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8c6b38] group-hover/btn:w-full transition-all duration-500 ease-in-out"></span>
                </span>
                <span className="text-[#8c6b38] opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500 ease-out">
                  <ArrowRight size={14} />
                </span>
              </button>
           </div>
        </div>
      </div>

      {/* RIGHT: GARDEN */}
      <div 
        className={`relative h-1/2 md:h-full transition-all duration-1000 ease-in-out flex flex-col justify-center items-center overflow-hidden cursor-pointer group
          ${hoveredSide === 'right' ? 'md:w-[65%]' : hoveredSide === 'left' ? 'md:w-[35%]' : 'md:w-1/2'}
          w-full bg-[#f2ebe0]
        `}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/10 to-transparent z-20 pointer-events-none hidden md:block mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#3f4f3a] mix-blend-color opacity-30 z-10 transition-opacity duration-700 group-hover:opacity-10"></div>
        <div className="absolute inset-0 bg-[#f2ebe0] mix-blend-multiply opacity-20 z-10"></div>
        
        <img 
          src={images.gardenHero} 
          alt="Garden" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter sepia-[0.5] brightness-90 contrast-[0.9]"
        />
        
        <div className="relative z-20 text-center p-4">
           <div className="bg-[#f7f3eb] text-[#3c2f2f] px-8 py-10 shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1 max-w-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 -rotate-1 backdrop-blur-sm border-l border-r border-white/20 shadow-sm"></div>
              <div className="mb-3 text-[#6b8c38] opacity-90">
                <Flower2 size={28} className="mx-auto" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-2 tracking-tight">{staticText.hero.plant.title}</h2>
              <p className="font-handwriting text-[#4a4238] text-xl md:text-2xl mt-2 group-hover:block hidden transition-all">
                {staticText.hero.plant.subtitle}
              </p>

              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('plant-entries'); }}
                className="mt-6 border-t border-[#d6cbb5] pt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 w-full text-left group/btn cursor-pointer flex items-center gap-3 focus:outline-none"
                aria-label="View garden notes"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4a6b28] relative">
                  {uiLabels.turnPage}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4a6b28] group-hover/btn:w-full transition-all duration-500 ease-in-out"></span>
                </span>
                <span className="text-[#4a6b28] opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500 ease-out">
                  <ArrowRight size={14} />
                </span>
              </button>
           </div>
        </div>
      </div>

      {/* Center Sticker */}
      <div className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none transition-all duration-1000 ease-in-out left-1/2 ${splitPositionClass}`}>
        <div className="w-20 h-20 bg-[#dcb25b] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] rotate-12 border-4 border-[#f2ebe0]">
          <span className="font-serif italic text-3xl text-[#3c2f2f] mix-blend-multiply">&</span>
        </div>
      </div>
    </div>
  );
});

export default Hero;
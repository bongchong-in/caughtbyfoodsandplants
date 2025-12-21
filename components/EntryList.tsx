import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { JournalEntry, EntryType } from '../data/journalData';

interface EntryListProps {
  id: string;
  type: EntryType;
  title: string;
  subtitle: string;
  entries: JournalEntry[];
  onSelect: (entry: JournalEntry) => void;
}

const EntryList: React.FC<EntryListProps> = ({ id, type, title, subtitle, entries, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Theme configuration
  const theme = type === 'food' ? {
    sectionBg: 'bg-[#ebe5d9]',
    border: 'border-[#ded8cc]',
    titleColor: 'text-[#3c2f2f]',
    subtitleColor: 'text-[#8c8275]',
    arrowBtn: 'text-[#8c6b38] border-[#8c6b38]/40 hover:bg-[#8c6b38]',
    cardBg: 'bg-[#f7f3eb]',
    cardTag: 'text-[#b0893e]',
    cardCta: 'group-hover:text-[#b0893e]'
  } : {
    sectionBg: 'bg-[#f0f4e8]',
    border: 'border-[#d8dec8]',
    titleColor: 'text-[#2f3c2f]',
    subtitleColor: 'text-[#6b8c6b]',
    arrowBtn: 'text-[#4a6b28] border-[#4a6b28]/40 hover:bg-[#4a6b28]',
    cardBg: 'bg-[#fcfdfb]',
    cardTag: 'text-[#5e7d38]',
    cardCta: 'group-hover:text-[#5e7d38]'
  };

  return (
    <section id={id} className={`py-20 border-t overflow-hidden ${theme.sectionBg} ${theme.border}`}>
      <div className="px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b-2 border-[#d6cbb5]/30 pb-4 border-dashed">
          <div>
            <h2 className={`text-3xl md:text-5xl font-serif ${theme.titleColor}`}>{title}</h2>
            <span className={`font-handwriting text-2xl hidden md:block rotate-[-2deg] mt-1 ${theme.subtitleColor}`}>{subtitle}</span>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => scrollContainer('left')}
               className={`w-10 h-10 rounded-full border flex items-center justify-center hover:text-[#f2ebe0] transition-colors ${theme.arrowBtn}`}
               aria-label="Previous"
             >
               <ChevronLeft size={20} />
             </button>
             <button 
               onClick={() => scrollContainer('right')}
               className={`w-10 h-10 rounded-full border flex items-center justify-center hover:text-[#f2ebe0] transition-colors ${theme.arrowBtn}`}
               aria-label="Next"
             >
               <ChevronRight size={20} />
             </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {entries.map((entry) => (
            <div 
              key={entry.id}
              onClick={() => onSelect(entry)}
              className={`min-w-[300px] md:min-w-[350px] snap-center group cursor-pointer shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-500 border border-[#e6e1d6] relative flex flex-col ${theme.cardBg}`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#ffffff]/40 rotate-90 backdrop-blur-[1px] shadow-sm z-20"></div>

              <div className="aspect-[4/5] w-full overflow-hidden relative p-3 pb-0 bg-white border-b border-[#f0ebe0]">
                <img src={entry.img} alt={entry.title} className="w-full h-full object-cover filter saturate-[0.8] contrast-[0.9] group-hover:saturate-100 transition-all duration-700" />
              </div>
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${theme.cardTag}`}>{entry.category}</div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#3c2f2f] leading-none">{entry.title}</h3>
                <p className="text-[#4a4238] text-md leading-relaxed mb-6 font-serif italic flex-1">
                  {entry.desc}
                </p>
                <div className={`flex items-center text-xs font-bold text-[#8c8275] uppercase tracking-widest transition-colors ${theme.cardCta}`}>
                  <ArrowRight size={14} className="mr-2" /> {entry.cta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntryList;
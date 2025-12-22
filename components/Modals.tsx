
import React from 'react';
import { X, Clock, UtensilsCrossed, Sun, Droplets, Flower2, Languages, Calendar } from 'lucide-react';
import { JournalEntry, staticText, uiLabels, images, assets } from '../data/journalData';

// --- HELPER LOGIC ---
const isBengali = (text: string) => /[\u0980-\u09FF]/.test(text);

const getModalLabels = (entry: JournalEntry) => {
  const isBn = isBengali(entry.title);
  
  if (isBn) {
    return {
      prepTime: "প্রস্তুতি সময়",
      servings: "পরিবেশন",
      light: "আলো",
      water: "জল",
      difficulty: "যত্ন",
      ingredients: "উপকরণ",
      method: "প্রণালী",
      story: "গল্প",
      gardenNotesTitle: "বাগানের কথা",
      monthYear: (date: Date) => date.toLocaleDateString('bn-IN', { month: 'long', year: 'numeric' }),
      footer: "আমার ঘর থেকে আপনার ঘরে।"
    };
  }
  return uiLabels.modal;
};

// --- ABOUT MODAL ---
interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
       <div 
        className="absolute inset-0 bg-[#2b2121]/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl bg-[#f7f3eb] shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
              style={{ backgroundImage: assets.paperTexture }}>
         </div>

         <button 
           onClick={onClose}
           className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#3c2f2f]/10 text-[#3c2f2f] hover:bg-[#3c2f2f] hover:text-[#f7f3eb] transition-all"
         >
           <X size={24} />
         </button>

         <div className="overflow-y-auto p-8 md:p-12 scroll-smooth hide-scrollbar">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md sepia-[0.3]">
                    <img src={images.profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
                
                <h2 className="font-handwriting text-4xl text-[#b0893e] rotate-[-2deg]">{staticText.about.handwrittenTitle}</h2>
                <div className="w-16 h-1 bg-[#dcb25b]/50 rounded-full"></div>

                <div className="prose prose-stone font-serif text-lg leading-relaxed text-[#4a3f35] text-justify md:text-left">
                    {staticText.about.fullStory.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                </div>

                <div className="pt-8 font-handwriting text-2xl text-[#8c8275] self-end pr-8">
                    - Paromita
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- ENTRY MODAL ---
interface EntryModalProps {
  entry: JournalEntry;
  onClose: () => void;
}

export const EntryModal: React.FC<EntryModalProps> = ({ entry, onClose }) => {
  const modalLabels = getModalLabels(entry);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 md:p-6 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-[#2b2121]/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#f7f3eb] shadow-2xl rounded-sm overflow-y-auto overflow-x-hidden flex flex-col animate-in zoom-in-95 duration-300 scroll-smooth">
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
              style={{ backgroundImage: assets.paperTexture }}>
         </div>

         <button 
           onClick={onClose}
           className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#3c2f2f]/10 text-[#3c2f2f] hover:bg-[#3c2f2f] hover:text-[#f7f3eb] transition-all"
         >
           <X size={24} />
         </button>

         {/* Header */}
         <div className="relative">
            <div className={`h-2 w-full ${entry.type === 'food' ? 'bg-[#dcb25b]' : 'bg-[#6b8c6b]'}`}></div>
            <div className="px-8 pt-12 pb-6">
               <div className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-dashed border-[#3c2f2f]/30 ${entry.type === 'food' ? 'text-[#b0893e]' : 'text-[#5e7d38]'}`}>
                  {entry.category}
               </div>
               <h2 className="text-4xl md:text-5xl font-serif text-[#3c2f2f] leading-tight mb-2">
                 {entry.title}
               </h2>
               <p className="font-handwriting text-2xl text-[#4a4238] opacity-80">
                  {entry.desc}
               </p>
            </div>
         </div>

         {/* Grid Content */}
         <div className="grid md:grid-cols-5 gap-8 px-8 pb-12">
            
            {/* Left Col */}
            <div className="md:col-span-2 space-y-8">
               <div className="relative p-2 bg-white shadow-md rotate-[-2deg] border border-[#e6e1d6]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#ffffff]/60 rotate-2 backdrop-blur-[1px] shadow-sm z-10 border-l border-r border-white/20"></div>
                  <img 
                    src={entry.img} 
                    alt={entry.title} 
                    className={`w-full aspect-[4/5] object-cover filter contrast-[0.95] ${entry.type === 'plant' ? 'sepia-[0.3]' : 'sepia-[0.1]'}`} 
                  />
                  {entry.type === 'plant' && (
                    <div className="mt-2 text-center font-serif italic text-xs text-gray-400">
                      {entry.scientificName}
                    </div>
                  )}
               </div>

               {/* Metadata */}
               <div className="bg-[#fff9f0] p-6 border border-[#e6e1d6] shadow-sm relative">
                  <div className="absolute top-0 left-0 w-full border-t border-dashed border-[#d6cbb5]/50 mt-1"></div>
                  
                  {entry.type === 'food' ? (
                    <div className="space-y-4 font-serif text-[#3c2f2f]">
                       <div className="flex items-center gap-3">
                          <Clock size={18} className="text-[#dcb25b]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">{modalLabels.prepTime}</span>
                            <span>{entry.prepTime}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <UtensilsCrossed size={18} className="text-[#dcb25b]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">{modalLabels.servings}</span>
                            <span>{entry.servings}</span>
                          </div>
                       </div>
                    </div>
                  ) : (
                    <div className="space-y-4 font-serif text-[#3c2f2f]">
                       <div className="flex items-center gap-3">
                          <Sun size={18} className="text-[#6b8c6b]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">{modalLabels.light}</span>
                            <span>{entry.care?.light}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <Droplets size={18} className="text-[#6b8c6b]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">{modalLabels.water}</span>
                            <span>{entry.care?.water}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <Flower2 size={18} className="text-[#6b8c6b]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">{modalLabels.difficulty}</span>
                            <span>{entry.care?.difficulty}</span>
                          </div>
                       </div>
                    </div>
                  )}
                  
                  {entry.translatedBy && (
                    <div className="mt-6 pt-4 border-t border-dashed border-[#d6cbb5]/50">
                       <div className="flex items-center gap-3">
                          <Languages size={18} className="text-[#8c8275]" />
                          <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#8c8275]">Translated By</span>
                            <span className="font-handwriting text-xl text-[#3c2f2f]">{entry.translatedBy}</span>
                          </div>
                       </div>
                    </div>
                  )}
               </div>
            </div>

            {/* Right Col */}
            <div className="md:col-span-3 space-y-8">
               <div className="prose prose-stone max-w-none">
                  <h3 className="font-handwriting text-3xl text-[#3c2f2f] mb-4 border-b border-[#d6cbb5] pb-2 inline-block">{modalLabels.story}</h3>
                  <p className="font-serif text-lg leading-relaxed text-[#4a3f35] whitespace-pre-wrap">
                    {entry.story}
                  </p>
               </div>

               {entry.type === 'food' && (
                 <div className="grid gap-8">
                   <div className="bg-white/50 p-6 rounded border border-[#e6e1d6]">
                      <h4 className="font-serif text-xl font-bold text-[#3c2f2f] mb-4 uppercase tracking-widest text-xs">{modalLabels.ingredients}</h4>
                      <ul className="space-y-2">
                        {entry.ingredients?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-serif text-[#5c4f45]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#dcb25b] mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-serif text-xl font-bold text-[#3c2f2f] mb-4 uppercase tracking-widest text-xs">{modalLabels.method}</h4>
                      <ol className="space-y-6">
                        {entry.method?.map((step, idx) => (
                          <li key={idx} className="flex gap-4 font-serif text-[#4a3f35] leading-relaxed">
                            <span className="font-handwriting text-2xl text-[#dcb25b] font-bold opacity-60 w-6 flex-shrink-0 text-right">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                   </div>
                 </div>
               )}

               {entry.type === 'plant' && (
                 <div className="bg-[#f0f4e8] p-8 border border-[#d8dec8] relative mt-4">
                   <div className="absolute top-0 right-0 p-2 opacity-10">
                     <Flower2 size={80} />
                   </div>
                   <h4 className="font-handwriting text-3xl text-[#2f3c2f] mb-4">{modalLabels.gardenNotesTitle}</h4>
                   <p className="font-serif text-lg italic text-[#5c6b5c] leading-loose">
                     {isBengali(entry.title) 
                        ? `"প্রতিটি গাছ ধৈর্যের শিক্ষা দেয়। ${entry.title} আমাকে মনে করিয়ে দেয় যে বৃদ্ধি নিঃশব্দ, ধীর, এবং প্রায়শই ঘটে যখন আমরা তাকিয়ে থাকি না।" (Every plant teaches patience...)`
                        : `"Every plant teaches patience. Observing ${entry.title} has reminded me that growth is silent, slow, and often happens when we aren't looking."`
                     }
                   </p>
                   <div className="mt-6 pt-6 border-t border-[#ccd6b5] flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#5e7d38]">
                     <span>{staticText.header}</span>
                     <span className="flex items-center gap-2"><Calendar size={14}/> {modalLabels.monthYear(new Date())}</span>
                   </div>
                 </div>
               )}
            </div>
         </div>
         
         <div className="bg-[#ebe5d9] py-8 text-center border-t border-[#d6cbb5]">
            <Flower2 className="mx-auto text-[#d6cbb5] mb-2" size={20} />
            <p className="font-handwriting text-xl text-[#8c8275]">{modalLabels.footer}</p>
         </div>
      </div>
    </div>
  );
};

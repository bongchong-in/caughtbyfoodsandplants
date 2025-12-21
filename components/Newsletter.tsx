import React, { useState, memo } from 'react';
import { Mail, Send, Flower2 } from 'lucide-react';
import { staticText, uiLabels } from '../data/journalData';

const Newsletter: React.FC = memo(() => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-20 px-6 bg-[#f2ebe0]">
      <div className="max-w-xl mx-auto relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-16 bg-[#3c2f2f]/10 rounded-full blur-[1px] rotate-[-2deg]"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-12 border-2 border-[#8c8275] rounded-t-full z-20"></div>

        <div className="bg-[#fff9f0] p-8 md:p-12 border border-[#d6cbb5] shadow-lg rotate-[-1deg] relative">
          <div className="absolute top-0 left-0 w-full border-b-2 border-dashed border-[#e6e1d6] mt-4"></div>
          
          <div className="text-center space-y-6 pt-4">
            <div className="w-12 h-12 mx-auto bg-[#dcb25b]/20 rounded-full flex items-center justify-center text-[#b0893e]">
               <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-handwriting text-4xl text-[#3c2f2f]">{staticText.newsletter.title}</h3>
            <p className="font-serif text-[#4a4238] italic text-lg leading-relaxed">
              {staticText.newsletter.quote}
            </p>
            
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-4 relative z-10 max-w-sm mx-auto">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={uiLabels.subscribePlaceholder}
                  required
                  className="w-full bg-transparent border-b-2 border-[#d6cbb5] py-3 text-[#3c2f2f] placeholder-[#8c8275]/60 focus:outline-none focus:border-[#dcb25b] font-serif transition-colors text-center text-lg"
                />
                <div className="absolute right-0 bottom-3 text-[#dcb25b] opacity-0 hover:opacity-100 transition-opacity">
                  <Send size={16} />
                </div>
              </div>
              <button type="submit" className="mt-6 bg-[#3c2f2f] text-[#dcb25b] py-3 px-8 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#5c4033] hover:shadow-lg transition-all shadow-md mx-auto rounded-sm transform hover:-translate-y-0.5">
                {uiLabels.subscribeButton}
              </button>
            </form>
            
            <div className="absolute bottom-4 right-4 text-[#dcb25b]/20 rotate-[-15deg] pointer-events-none select-none">
               <Flower2 size={80} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Newsletter;
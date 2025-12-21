
import React, { memo } from 'react';
import { Flower2 } from 'lucide-react';
import { staticText, uiLabels, siteConfig } from '../data/journalData';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-[#3c2f2f] text-[#d6cbb5] py-20 px-6 text-center border-t-8 border-[#2b2121]">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="w-16 h-16 mx-auto bg-[#d6cbb5] rounded-full flex items-center justify-center text-[#3c2f2f]">
           <Flower2 size={32} />
        </div>
        <h2 className="text-3xl font-serif italic">{staticText.footer.title}</h2>
        <p className="text-lg font-serif opacity-80 leading-relaxed max-w-lg mx-auto">
          {staticText.footer.quote}
        </p>
        <div className="pt-10 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] font-bold text-[#dcb25b]">
          <a href={siteConfig.socialLinks.instagram} className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">{uiLabels.socials.instagram}</a>
          <a href={siteConfig.socialLinks.youtube} className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">{uiLabels.socials.youtube}</a>
        </div>
        <div className="pt-8 border-t border-[#d6cbb5]/10 mt-8">
           <div className="text-xs text-[#d6cbb5]/30 font-mono tracking-widest mb-2">
            © {new Date().getFullYear()} {staticText.footer.copyrightName}
          </div>
           <div className="text-[10px] text-[#d6cbb5]/30 font-mono tracking-widest">
            {staticText.footer.credits.prefix} <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#dcb25b] transition-colors hover:border-b hover:border-[#dcb25b]">{siteConfig.developer.name}</a> {staticText.footer.credits.suffix}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

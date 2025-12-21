import React, { useState, useEffect } from 'react';
import { assets, foodEntries, plantEntries, JournalEntry, staticText } from '../data/journalData';

import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import EntryList from './EntryList';
import Newsletter from './Newsletter';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import MenuOverlay from './MenuOverlay';
import { AboutModal, EntryModal } from './Modals';

const Journal: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  // Close modals on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
          setSelectedEntry(null);
          setShowAbout(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEntry || showAbout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedEntry, showAbout]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f2ebe0] text-[#3c2f2f] font-serif overflow-x-hidden selection:bg-[#dcb25b] selection:text-[#3c2f2f]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NOISE TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-50 mix-blend-multiply" 
           style={{ backgroundImage: assets.noiseTexture }}>
      </div>

      <Header onMenuOpen={() => setMenuOpen(true)} />

      <Hero onNavigate={scrollToSection} />

      <AboutSection onOpenAbout={() => setShowAbout(true)} />

      <EntryList 
        id="food-entries"
        type="food"
        title={staticText.sections.food.title}
        subtitle={staticText.sections.food.subtitle}
        entries={foodEntries}
        onSelect={setSelectedEntry}
      />

      <EntryList 
        id="plant-entries"
        type="plant"
        title={staticText.sections.plant.title}
        subtitle={staticText.sections.plant.subtitle}
        entries={plantEntries}
        onSelect={setSelectedEntry}
      />

      <Newsletter />
      <Footer />
      <FloatingContact />

      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {selectedEntry && <EntryModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />}

    </div>
  );
};

export default Journal;
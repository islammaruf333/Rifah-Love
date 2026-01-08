import { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import LoveQuotes from '@/components/LoveQuotes';
import Gallery from '@/components/Gallery';
import LoveMessage from '@/components/LoveMessage';
import Footer from '@/components/Footer';
import FloatingPetals from '@/components/FloatingPetals';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingPetals />

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center gradient-sky">
          <div className="font-romantic text-4xl text-rose animate-pulse">
            ভালোবাসা লোড হচ্ছে...
          </div>
        </div>
      }>
        <HeroSection />
      </Suspense>

      <LoveQuotes />
      <Gallery />
      <LoveMessage />
      <Footer />
    </main>
  );
};

export default Index;

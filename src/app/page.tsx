'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>
     
    </>
  );
}

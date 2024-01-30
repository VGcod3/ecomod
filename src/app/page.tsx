'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Investment from "@/components/Investment";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Investment />
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>
     
    </>
  );
}

'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>
    </>
  );
}

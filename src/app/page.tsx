'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import InnerPlanning from '@/components/InnerPlanning';
import Investment from "@/components/Investment";
import Advantages from "@/components/Advantages";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <InnerPlanning />
      <WhyUs />
      <Investment />
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>

    </>
  );
}

'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import InnerPlanning from '@/components/InnerPlanning';
import Investment from "@/components/Investment";
import Installment from "@/components/Installment";
import Advantages from "@/components/Advantages";
import PlanPhotos from "@/components/PlanPhotos";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <WhyUs />
      <InnerPlanning />
      <Investment />
      <PlanPhotos />
      <Installment />
      <FAQ />
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>

    </>
  );
}

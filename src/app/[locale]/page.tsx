"use client";
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import InnerPlanning from "@/components/InnerPlanning";
import Investment from "@/components/Investment";
import Installment from "@/components/Installment";
import Advantages from "@/components/Advantages";
import PlanPhotos from "@/components/PlanPhotos";
import FAQ from "@/components/FAQ";
import Technologies from "@/components/Technologies";
import SmoothScroll from "@/components/Animations/SmoothScroll";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Hero />
        <Advantages />
        <WhyUs />
        <InnerPlanning />
        <Investment />
        <Technologies />
        <PlanPhotos />
        <Installment />
        <Projects />
        <FAQ />
      </SmoothScroll>
      <div className="fixed -z-10">
        <ParticlesBackground />
      </div>
    </>
  );
}

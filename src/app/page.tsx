'use client'
import ParticlesBackground from "@/components/ParticlesBg";

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Advantages from "@/components/Advantages";

export default function Home() {
	return (
		<>
			<Hero />
			<Advantages />
			<WhyUs />
			<div className="fixed -z-10">
				<ParticlesBackground />
			</div>

		</>
	);
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							Final-year Computer Engineering student driven by creativity, curiosity and innovation. I specialize in digital system design, embedded development, and processor architecture — hoping to translate theory into reproducible, real-world solutions.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								I started through music — learning to play, perform and connect with others. It taught me discipline, persistence, together with creative thinking and the importance of idea expressions.<br /><br /> Today, from building custom RISC-V and MIPS processors to architecting IoT systems with STM32, Raspberry Pi and Arduino, my journey blends creativity with rigorous engineering and collaborative execution.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/resume/NgShuJie_Resume_ComputerEngineering_EmbeddedSystem_Oct2025_Internship.pdf" download>
								Download Embedded System & IoT Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
						<Button className="mt-6" asChild>
							<a href="/resume/NgShuJie_Resume_ComputerEngineering_FPGA_Oct2025_Internship.pdf" download>
								Download Front-end Chip Design Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/images/portfolio.jpg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Currently pursuing Bachelor’s degree in Computer Engineering at UTAR, with a focus on digital logic, embedded systems, and hardware-software integration. Previously an aspiring musician and performer.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Led and contributed to processor design projects, embedded system development and IoT applications. Applied programming, simulations, synthesis and verification across academic and personal projects.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in various embedded system, digital logic development tools, high and low level programming languages, and hardware description languages.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
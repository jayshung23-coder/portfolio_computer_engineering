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
							Computer Engineering graduate (CGPA 3.4150) from Universiti Tunku Abdul Rahman (UTAR), driven by creativity, curiosity and innovation. I specialise in digital system design, embedded development, processor architecture, and machine learning — translating theory into reproducible, real-world solutions.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Today, from building custom MIPS & RISC-V processors to architecting IoT systems with STM32, Raspberry Pi and Arduino, my journey blends creativity with rigorous engineering. During my internship at FootFallCam, I was recognised with a Top 10% Internship Certificate. My Final Year Project explored EEG-based music genre classification using deep learning models (CNN, CNN-LSTM, CNN-BiLSTM, CNN-GRU) built with PyTorch, bridging my passion for music and engineering.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/resume/NgShuJie_Resume.pdf" download>
								Download my Firmware / Embedded System / IC Design Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
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
									Completed Bachelor's degree in Computer Engineering at UTAR (CGPA 3.4150), with a focus on digital logic, embedded systems, and hardware-software integration. Previously an aspiring musician and performer.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Interned at FootFallCam, earning a Top 10% Internship Certificate. Led processor design projects, embedded system development, and IoT applications. Completed a Final Year Project on EEG-based music genre classification using PyTorch deep learning models with Optuna hyperparameter tuning.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in embedded systems (STM32, Arduino, Raspberry Pi), hardware description languages (SystemVerilog), machine learning frameworks (PyTorch, scikit-learn, Optuna, MNE-Python), and computer architecture.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
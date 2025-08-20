export const siteConfig = {
	name: 'Ng Shu Jie\'s Portfolio',
	description:
		'My Portfolio for Computer Engineering.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		/*{
			title: 'Experience',
			href: '/experience',
		},*/
		{
			title: 'Projects',
			href: '/projects',
		},
		/*{
			title: 'Certificates',
			href: '/certificates',
		},*/
		/*{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},*/
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/shujie-ng',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: '#',
		email: 's.j.ng@1utar.my',
		phone: 'https://wa.me/60165503369',
	},
};

/*export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'City, Country',
		startDate: 'Jan 2023',
		endDate: 'Apr 2023',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];*/

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using 2 Raspberry Pis to monitor sensors on temperature, light luminence and gyroscopic motions on Blynk IoT Platform. Telegram Bot is deployed to control Raspberry Pi remotely.',
		image: '/images/rpi.jpg',
		tags: ['IoT', 'Raspberry Pi', 'Python', 'Telegram Bot'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'RISC-V Pipeline Processor Design',
		description:
			'Designed a 5-stage pipelined RISC-V CPU with hazard detection and forwarding logic. Achieved 95% functional coverage across instruction set and control scenarios.',
		image: '/images/processor.jpg',
		tags: ['Processor Design', 'SystemVerilog', 'ModelSim', 'Quartus Prime'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'Restaurant Ordering System',
		description:
			'Created an application using C++ to login and make orders, then print out payment informations and QR code generation.',
		image: '/images/restaurant.png',
		tags: ['Ordering System', 'C++', 'Software Development'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'Investigate the Impact of Music on Brain Wave Activity',
		description:
			'Currently ongoing FYP Research project on implementing different machine learning models (CNN-LSTM, RF, SVM, etc.) using Python with different preprocessing approach, fine-tune and test the accuracy of trained model using a self-built Arduino-based EEG device.',
		image: '/images/ml.jpg',
		tags: ['Machine Learning', 'IoT', 'Healthcare', 'Arduino', 'Tensorflow'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'Room Monitoring and Automation System',
		description:
			'Created a temperature, humidity, luminance detecting system using STM32F429i-DISC1 board (in C language) with animated cat GUI design for system navigation using on-board buttons.',
		image: '/images/stm32.jpg',
		tags: ['Embedded System', 'C', 'GUI', 'STM32'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'DeLorean Time Machine Car Model from “Back to the Future”',
		description:
			'Constructed a model of the DeLorean time machine from the movie “Back to the Future” by using the circuit theory and basic electronics knowledge. The DeLorean time machine is mainly made with used tin can and powered by solar power.',
		image: '/images/car.jpg',
		tags: ['Electronics', 'Solar Power', 'Modeling'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'FIR Filter Design',
		description:
			'Designed and simulated a Finite Impulse Response(FIR) filter for digital signal processing tasks using MATLAB.',
		image: '/images/filter.png',
		tags: ['Digital Signal Processing', 'MATLAB', 'Passband Filter'],
		//link: '#',
		//repo: '#',
	},
	{
		title: 'Digital Clock Project',
		description:
			'Simulated a 24-hour digital clock using NI Multisim, utilizing counter ICs and 7 segment displays.',
		image: '/images/clock.png',
		tags: ['Digital Clock', 'NI Multisim', 'Simulation'],
		//link: '#',
		//repo: '#',
	},	
	{
		title: 'Traffic Light Control System - 8051 Microcontroller',
		description:
			'Programmed on 8051 microcontroller in Assembly language using Keil uVision3 to simulate traffic light patterns, demonstrating precise control over hardware timers and I/O.',
		image: '/images/8051.jpg',
		tags: ['Microcontroller', 'Assembly (ASM)', 'Timer', 'I/O'],
		//link: '#',
		//repo: '#',
	},	
	{
		title: 'Traffic Light Control System - FSM, Testbench design',
		description:
			'Developed a Finite State Machine-based traffic light system with timing logic and hardware simulation using ModelSim. Included robust testbench validation.',
		image: '/images/fsm.png',
		tags: ['SystemVerilog', 'FSM', 'Testbench', 'Quartus Prime'],
		//link: '#',
		//repo: '#',
	},	
	{
		title: 'Voltage Regulator & R-2R Ladder DAC Design',
		description:
			'Designed and analyzed circuits using NI Multisim, including adjustable output voltage regulators and digital-to-analog converters as part of electronics coursework.',
		image: '/images/dac.png',
		tags: ['DAC', 'Voltage Regulator', 'NI Multisim', 'Simulation'],
		//link: '#',
		//repo: '#',
	},	
	{
		title: 'Cascade Amplifier Design',
		description:
			'Constructed a multi-stage amplifier circuit with gain analysis, frequency response plotting, and hardware simulation using NI MultiSim.',
		image: '/images/amplifier.jpg',
		tags: ['Amplifier', 'NI Multisim', 'Simulation'],
		//link: '#',
		//repo: '#',
	},	
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Information Technology (Hons)',
		field: 'Computer Engineering',
		institution: 'Universiti Tunku Adbul Rahman',
		location: 'Kampar, Perak',
		startDate: 'Jun 2023',
		endDate: 'Present (Expected Jun 2026)',
		gpa: '3.47/4.0',
		achievements: [
			'Organizer of "Start Managing Your Personal Finance Now" Campus Wide Talk — Finance Leader'
		],
	},
	{
		degree: 'Foundation in Science',
		field: 'Science and Mathematics',
		institution: 'Universiti Tunku Abdul Rahman',
		location: 'Kampar, Perak',
		startDate: 'Jun 2022',
		endDate: 'Jun 2023',
		gpa: '3.70/4.0',
		achievements: [
			'President\'s List (2 Trimesters)',
			'Are you Digitally Literate Competition 2022 — 1st Runner Up',
		],
	},
	{
		degree: 'Bachelor in Music',
		field: 'Music Performance (Vocal)',
		institution: 'Beijing Contemporary Music Academy',
		location: 'Tong Zhou, Beijing',
		startDate: 'Aug 2017',
		endDate: 'Jun 2022',
		gpa: 'N/A',
		achievements: [
			'Acapella Performing Team — Baritone Singer',
			'QQ Music Campus Singing Competition 2019 — Participant',
			'Outdoor Live Event in Campus — Stage Performer',
		],
	},
	{
		degree: 'SPM',
		field: 'Science and Mathematics',
		institution: 'SMJK Hua Lian',
		location: 'Taiping, Perak',
		startDate: 'Jan 2012',
		endDate: 'Dec 2016',
		gpa: '6A\'s',
		achievements: [
			'1x Boy Scout\'s Marching Band — State Level Champion',
			'2x Boy Scout\'s Marching Band — School Level Champion',
			'Leader of Boy Scout\'s Patrol Team (2013)',
		],
	},
];

/*export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];*/

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Embedded System Development', level: 9, category: 'technical' },
	{ name: 'IoT Development', level: 8, category: 'technical' },
	{ name: 'Front-end Chip Design', level: 8, category: 'technical' },
	{ name: 'Computer Architecture', level: 7, category: 'technical' },
	{ name: 'Circuit Theory and Electronics', level: 6, category: 'technical' },
	{ name: 'Digital Signal Processing', level: 6, category: 'technical' },
	{ name: 'Networking', level: 5, category: 'technical' },
	{ name: 'Machine Learning', level: 5, category: 'technical' },
	{ name: 'Database Management', level: 4, category: 'technical' },
	{ name: 'Operating System', level: 4, category: 'technical' },

	// Software Skills
	{ name: 'Python', level: 9, category: 'software' },
	{ name: 'C/C++', level: 8, category: 'software' },
	{ name: 'SystemVerilog / Verilog', level: 8, category: 'software' },
	{ name: 'Vivado / ModelSim / Quartus Prime', level: 8, category: 'software' },
	{ name: 'Keil uVision / ArduinoIDE', level: 8, category: 'software' },
	{ name: 'Assembly Language', level: 7, category: 'software' },
	{ name: 'Microsoft Word / Excel / Powerpoint', level: 7, category: 'software' },
	{ name: 'HTML5 / CSS / Javascript / React / Bootstrap', level: 6, category: 'software' },
	{ name: 'Visual Studio Code', level: 6, category: 'software' },
	{ name: 'MATLAB', level: 5, category: 'software' },
	{ name: 'Cisco Packet Tracer / WireShark', level: 5, category: 'software' },
	{ name: 'Git', level: 3, category: 'software' },
	{ name: 'SQLPlus', level: 3, category: 'software' },

	// Soft Skills
	{ name: 'Adaptability', level: 10, category: 'soft' },
	{ name: 'Attention to Detail', level: 10, category: 'soft' },
	{ name: 'Collaboration', level: 9, category: 'soft' },
	{ name: 'Creativity', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Problem Solving', level: 7, category: 'soft' },
	{ name: 'Time Management', level: 7, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Chinese', level: 10, category: 'language' },
	{ name: 'Chinese - Hokkien', level: 7, category: 'language' },
	{ name: 'Malay', level: 6, category: 'language' },
	{ name: 'Japanese', level: 3, category: 'language' },
];

/*export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];*/
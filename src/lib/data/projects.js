export const allProjects = [
	{
		id: 'n3xa',
		name: 'N3XA',
		title: 'N3XA — ML-Powered SIEM with IDPS',
		symbolId: 'n3xa',
		category: 'Open Source · Cybersecurity · Machine Learning',
		description:
			'Open-source SIEM platform with Intrusion Detection and Prevention System capabilities, leveraging machine learning for threat detection, anomaly detection, and risk/response decisions.',
		tags: [
			'Open Source',
			'SIEM / IDPS',
			'XGBoost',
			'Isolation Forest',
			'LSTM',
			'Known-Threat Detection',
			'Anomaly Detection'
		],
		status: 'In Progress',
		featured: true,
		published: true,
		detailUrl: '/projects/n3xa',
		isOpenSource: true,
		mlComponents: [
			{ name: 'XGBoost', role: 'Supervised threat detection' },
			{ name: 'Isolation Forest', role: 'Anomaly detection' },
			{ name: 'LSTM', role: 'Behavioral & sequential analysis' }
		],
		coreAreas: [
			'Known-threat detection',
			'Anomaly detection',
			'Behavioral analysis',
			'ML-based threat analysis',
			'Risk / response decisions',
			'SIEM security event generation'
		],
		overview:
			'N3XA is an open-source Security Information and Event Management (SIEM) platform integrated with Intrusion Detection and Prevention System (IDPS) capabilities. It combines known-threat detection with machine learning architectures for anomaly detection and behavioral traffic analysis.',
		problemStatement:
			'Traditional security monitoring systems often rely heavily on signatures and static detection rules, making it difficult to identify anomalous or evolving network behavior. N3XA combines SIEM capabilities with multiple machine learning approaches to support known-threat detection, anomaly detection, and behavioral analysis within a unified security monitoring pipeline.',
		flowchart: [
			{ id: 'traffic', label: 'Network Traffic', desc: 'Raw ingress and egress packet stream ingestion' },
			{ id: 'processing', label: 'Traffic Processing / Analysis', desc: 'Packet parsing, flow extraction, and feature construction' },
			{
				id: 'ml_layer',
				label: 'ML Detection Layer',
				desc: 'Multi-model detection pipeline',
				subnodes: [
					{ name: 'XGBoost', role: 'Supervised Threat Detection' },
					{ name: 'Isolation Forest', role: 'Anomaly Detection' },
					{ name: 'LSTM', role: 'Behavioral / Sequential Analysis' }
				]
			},
			{ id: 'threat_eval', label: 'Threat Analysis', desc: 'Cross-model signal synthesis and anomaly scoring' },
			{ id: 'decision', label: 'Risk / Response Decision', desc: 'Risk assessment and response decision logic' },
			{ id: 'siem', label: 'SIEM / Security Event', desc: 'Event correlation, alert generation, and security incident tracking' }
		],
		implementationStatus: {
			implemented: [
				'Network traffic analysis pipeline',
				'Known-threat detection mechanisms',
				'Supervised threat classification using XGBoost',
				'Anomaly detection using Isolation Forest'
			],
			inProgress: [
				'Behavioral and sequential analysis using LSTM',
				'Automated risk evaluation and response decision logic'
			],
			planned: []
		},
		evaluationResults: [
			{
				dataset: 'CIC-IDS2017 (Test Harness & Attack Vectors)',
				metrics: [
					{ label: 'Binary Detection Accuracy', value: '75.81%' },
					{ label: 'Detection Precision', value: '100.00%' },
					{ label: 'Detection Recall', value: '60.53%' },
					{ label: 'Detection F1-Score', value: '75.41%' },
					{ label: 'False Positive Rate', value: '0.00%' },
					{ label: 'Multiclass Weighted Recall', value: '70.97%' },
					{ label: 'Multiclass Weighted F1-Score', value: '61.35%' },
					{ label: 'Feature Canonicalization Latency', value: '1.53 µs' }
				]
			}
		],
		modelEvaluation: [
			{
				name: 'XGBoost Classifier',
				role: 'Supervised Threat Detection',
				result: 'Evaluated across 12 traffic classes on CIC-IDS2017 flow vectors with 100% precision on attack test cases and zero false positive blocks.'
			},
			{
				name: 'Isolation Forest',
				role: 'Anomaly Detection',
				result: '150 estimators with 0.01 contamination factor for unsupervised statistical anomaly isolation and outlier flow scoring.'
			},
			{
				name: 'LSTM Sequential Network',
				role: 'Behavioral / Sequential Analysis',
				result: 'Behavioral and sequential traffic analysis model. Evaluation and testing are currently in progress.'
			}
		],
		evaluationEvidence: [
			{ label: 'Evaluated Test Scenarios', value: '62 Audit 2 verification test cases' },
			{ label: 'Defensive Isolation', value: '19/19 successful blocks, 0 false positive blocks' },
			{ label: 'Unit & Regression Tests', value: '44 Rust tests + 12 Python feature regression tests passed' },
			{ label: 'Feature Dimensionality', value: '5 canonical flow features (Flow Duration, Fwd/Bwd Packets, Bytes/s, Packets/s)' }
		],
		links: {
			github: 'https://github.com/Nebula4913/N3XA',
			demo: null
		}
	},
	{
		id: 'atom',
		name: 'ATOM',
		title: 'ATOM — Network World Model for Cybersecurity',
		symbolId: 'atom',
		category: 'Cybersecurity · Machine Learning · World Models',
		description:
			'A Network World Model that learns evolving network state and attacker progression: P(S[t+1] | S[t], E[t]), forecasting MITRE ATT&CK trajectories and threat escalation likelihood.',
		tags: [
			'World Models',
			'State Prediction',
			'MITRE ATT&CK',
			'VSN',
			'GRU Temporal Encoder',
			'Bayesian Network',
			'UNSW-NB15',
			'CIC-IDS2017'
		],
		status: 'In Progress',
		featured: true,
		published: true,
		detailUrl: '/projects/atom',
		isOpenSource: false,
		mathematicalFormulation: 'P(S[t+1] | S[t], E[t])',
		mlComponents: [
			{ name: 'Variable Selection Network (VSN)', role: 'Feature importance gating & representation' },
			{ name: '2-layer GRU Temporal Encoder', role: 'Temporal sequence dynamics encoding' },
			{ name: 'Forecast Head', role: 'Direct multi-horizon state projection' },
			{ name: 'Autoregressive Rollout Engine', role: 'Sequential network state progression' },
			{ name: 'MITRE ATT&CK Trajectory Head', role: 'Adversary tactic & technique forecasting' },
			{ name: 'Threat Escalation Likelihood Head', role: 'Probabilistic escalation quantification' }
		],
		secondaryLayerComponents: [
			{ name: 'XGBoost', role: 'Supervised threat detection' },
			{ name: 'Isolation Forest', role: 'Statistical anomaly isolation' },
			{ name: 'Bayesian Network', role: 'Probabilistic behavioral dependencies' }
		],
		coreAreas: [
			'Network state transition modeling',
			'Behavioral evidence synthesis E[t]',
			'Multi-horizon network state forecasting',
			'MITRE ATT&CK trajectory prediction',
			'Threat escalation likelihood quantification'
		],
		overview:
			'ATOM is a Network World Model engineered to learn the temporal dynamics of enterprise networks and adversary progression. By modeling network state transitions as P(S[t+1] | S[t], E[t]), ATOM forecasts future network states, predicts MITRE ATT&CK trajectories, and quantifies threat escalation likelihood before attacks manifest.',
		flowchart: [
			{ id: 'traffic', label: 'Network Traffic', desc: 'Raw telemetry and continuous network flow records' },
			{
				id: 'secondary_layer',
				label: 'Secondary Detection Layer',
				desc: 'Initial threat & anomaly feature extraction',
				subnodes: [
					{ name: 'XGBoost', role: 'Threat classification' },
					{ name: 'Isolation Forest', role: 'Anomaly scoring' },
					{ name: 'Bayesian Network', role: 'Probabilistic dependencies' }
				]
			},
			{ id: 'evidence', label: 'Behavioral Evidence E[t]', desc: 'Synthesized multi-sensor observation vector at time step t' },
			{
				id: 'world_model',
				label: 'World Model Core',
				desc: 'Deep generative temporal architecture',
				subnodes: [
					{ name: 'Variable Selection Network', role: 'Feature gating' },
					{ name: 'GRU Temporal Encoder', role: '2-layer sequence encoder' },
					{ name: 'Forecast Head', role: 'Direct multi-horizon projection' }
				]
			},
			{ id: 'rollout', label: 'Autoregressive Future-State Rollout', desc: 'Iterative rollout forecasting P(S[t+1] | S[t], E[t])' },
			{ id: 'mitre', label: 'MITRE ATT&CK Trajectory', desc: 'Adversary tactic progression pathway projection' },
			{ id: 'escalation', label: 'Threat Escalation Likelihood', desc: 'Risk escalation probability and impact quantification' }
		],
		evaluationResults: [
			{
				dataset: 'UNSW-NB15',
				metrics: [
					{ label: '1-Step State MAE', value: '0.5929', baseline: '0.7630', improvement: '22.29%' },
					{ label: 'Overall State MAE', value: '0.6016', baseline: '0.7549', improvement: '20.31%' },
					{ label: 'Threat Escalation F1', value: '88.69%' },
					{ label: 'Threat Escalation Recall', value: '99.94%' },
					{ label: 'MITRE Trajectory Accuracy', value: '69.53%' }
				]
			},
			{
				dataset: 'CIC-IDS2017',
				metrics: [
					{ label: '1-Step State MAE', value: '1.0922', baseline: '1.6059', improvement: '31.99%' },
					{ label: 'Overall State MAE', value: '1.0929', baseline: '1.6049', improvement: '31.90%' },
					{ label: 'MITRE Trajectory Accuracy', value: '84.91%' }
				]
			}
		],
		implementationStatus: {
			implemented: [
				'Variable Selection Network (VSN) feature gating',
				'2-layer GRU Temporal Encoder',
				'Multi-horizon state forecasting baseline on UNSW-NB15 and CIC-IDS2017',
				'Secondary layer integration with XGBoost, Isolation Forest, and Bayesian Network'
			],
			inProgress: [
				'Real-time autoregressive rollout optimization',
				'Dynamic MITRE ATT&CK trajectory calibration'
			],
			planned: []
		},
		links: {
			github: null,
			demo: null
		}
	},
	{
		id: 'regis',
		name: 'REGIS',
		title: 'REGIS — Local AI Malware Analysis Platform',
		symbolId: 'regis',
		category: 'Local AI · Malware Analysis',
		description:
			'Local AI-powered malware analysis and binary investigation platform.',
		tags: [
			'Local AI',
			'Malware Analysis',
			'Binary Analysis',
			'Static Analysis',
			'Decompilation',
			'AI-assisted investigation',
			'Address-level evidence/citations'
		],
		status: 'In Progress',
		featured: true,
		published: true,
		detailUrl: '/projects/regis',
		isOpenSource: false,
		mlComponents: [],
		coreAreas: [
			'Static binary analysis',
			'Reverse engineering',
			'Decompilation',
			'Malware triage',
			'AI-assisted investigation',
			'Address-level citations'
		],
		overview:
			'REGIS is a local AI-powered malware analysis and binary investigation platform engineered for offline local operation to preserve code privacy, providing static analysis, decompilation assistance, and address-level citations without cloud reliance.',
		flowchart: [
			{ id: 'sample', label: 'Binary / Malware Sample', desc: 'Target executable, PE, or ELF file ingestion' },
			{ id: 'static', label: 'Static Analysis', desc: 'Header inspection, section entropy, and string extraction' },
			{ id: 'decompile', label: 'Decompilation / Binary Analysis', desc: 'Control flow disassembly and intermediate representation' },
			{ id: 'evidence', label: 'Evidence Extraction', desc: 'API import hashing, behavioral artifacts, and call graphs' },
			{ id: 'ai', label: 'Local AI Analysis', desc: 'Offline local AI reasoning over disassembly contexts' },
			{ id: 'findings', label: 'Address-Level Findings / Investigation', desc: 'Pinpoint citation mapping linked to specific virtual addresses' }
		],
		implementationStatus: {
			implemented: [
				'Local offline operational environment',
				'Static binary parsing foundation',
				'Target disassembly framing'
			],
			inProgress: [
				'Decompilation assistance workflows',
				'Address-level citation generation for binary structures',
				'Local AI-assisted investigation workflows'
			],
			planned: []
		},
		evaluationStatus: 'System testing and evaluation are currently in progress.',
		links: {
			github: null,
			demo: null
		}
	},
	{
		id: 'drone-detection',
		name: 'Drone Detection System',
		title: 'Drone Detection System',
		symbolId: 'drone-detection',
		category: 'Computer Vision · Machine Learning',
		description:
			'Computer vision system using YOLOv8 for unauthorized drone detection.',
		tags: [
			'Computer Vision',
			'YOLOv8',
			'Object Detection',
			'Aerial Surveillance'
		],
		status: 'In Progress',
		featured: true,
		published: true,
		detailUrl: '/projects/drone-detection',
		isOpenSource: false,
		mlComponents: [
			{ name: 'YOLOv8', role: 'Real-time object detection & drone spatial identification' }
		],
		coreAreas: [
			'Computer vision detection',
			'YOLOv8 inference',
			'Unauthorized drone identification',
			'Surveillance monitoring'
		],
		overview:
			'The Drone Detection System is a computer vision project focused on the detection and identification of unauthorized drones using the YOLOv8 object detection architecture.',
		flowchart: [
			{ id: 'input', label: 'Input Image / Video', desc: 'Raw surveillance feed or recorded video frames' },
			{ id: 'yolo', label: 'YOLOv8 Detection', desc: 'Real-time convolutional object detection inference' },
			{ id: 'drone', label: 'Drone Detection', desc: 'Target classification and spatial bounding localization' },
			{ id: 'output', label: 'Detection Output', desc: 'Visual detection output and surveillance telemetry' }
		],
		implementationStatus: {
			implemented: [
				'YOLOv8 model integration for aerial object detection',
				'Image and video frame ingestion pipeline'
			],
			inProgress: [
				'Detection validation and perimeter alerting'
			],
			planned: []
		},
		evaluationStatus: 'Evaluation and testing are currently in progress.',
		links: {
			github: null,
			demo: null
		}
	},
	{
		id: 'n3mesis',
		name: 'N3MESIS',
		title: 'N3MESIS — Ethical Red Teaming Tool',
		symbolId: 'n3mesis',
		category: 'Reconnaissance · OSINT · Vulnerability Assessment',
		description:
			'Ethical red-team / penetration-testing system focused on security assessment workflow automation across reconnaissance, enumeration, OSINT, and vulnerability assessment.',
		tags: [
			'Reconnaissance',
			'Enumeration',
			'OSINT',
			'Vulnerability Assessment',
			'Workflow Automation'
		],
		status: 'In Progress',
		featured: false,
		published: false,
		detailUrl: '/projects/n3mesis',
		isOpenSource: false,
		mlComponents: [],
		coreAreas: [
			'Reconnaissance',
			'Enumeration',
			'OSINT',
			'Vulnerability assessment',
			'Security assessment workflows'
		],
		overview:
			'N3MESIS is an ethical red-team and penetration-testing tool engineered to automate repetitive phases of security assessments, including reconnaissance, attack-surface enumeration, OSINT gathering, and vulnerability assessment.',
		flowchart: [
			{ id: 'target', label: 'Target Scope', desc: 'Authorized IP ranges, domain perimeters, and CIDR blocks' },
			{ id: 'recon', label: 'Reconnaissance', desc: 'Passive surface mapping and infrastructure discovery' },
			{ id: 'enum', label: 'Enumeration', desc: 'Port scanning, service discovery, and banner analysis' },
			{ id: 'osint', label: 'OSINT', desc: 'Public asset intelligence, DNS records, and metadata extraction' },
			{ id: 'vuln_assess', label: 'Vulnerability Assessment', desc: 'Correlating discovered services with vulnerability catalogs' },
			{ id: 'findings', label: 'Security Findings', desc: 'Structured assessment reporting and risk prioritization' }
		],
		implementationStatus: {
			implemented: [
				'Reconnaissance workflow automation',
				'Network and service enumeration modules',
				'OSINT collection workflows'
			],
			inProgress: [
				'Vulnerability assessment correlation and reporting'
			],
			planned: []
		},
		links: {
			github: null,
			demo: null
		}
	}
];

export const publishedProjects = allProjects.filter((p) => p.published);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export const academicResearch = {
	id: 'qubo-rag',
	title: 'QUBO-Based Retrieval Optimization',
	category: 'Academic Research · Researching',
	status: 'Researching',
	description:
		'Researching the use of Quadratic Unconstrained Binary Optimization (QUBO) for improving retrieval selection in Retrieval-Augmented Generation (RAG) systems, with a focus on relevance, redundancy, and efficient evidence selection.',
	direction:
		'Current research explores whether the structure and ordering of retrieved evidence can affect LLM comprehension and generation quality beyond the selection of relevant chunks.',
	tags: ['QUBO', 'RAG', 'Information Retrieval', 'LLM']
};

export const verifiedSkills = {
	programming: ['Python', 'C', 'Rust', 'JavaScript'],
	systems: ['Linux', 'Computer Networks', 'Operating Systems'],
	cybersecurity: ['Network Security', 'Vulnerability Assessment', 'OSINT', 'Threat Detection'],
	machineLearning: ['Machine Learning', 'Deep Learning fundamentals'],
	toolsAndTechnologies: ['Node.js', 'Express.js', 'Nmap', 'Wireshark', 'Metasploit', 'Git']
};

export const verifiedAchievements = [
	{
		title: 'Winner — Young Technocrats 3.0',
		institution: 'KCG College of Technology',
		category: 'Competition Award'
	},
	{
		title: 'Finalist — CIH 2026',
		institution: 'Rathinam Campus',
		category: 'Hackathon Award'
	}
];

export const verifiedEducation = {
	institution: 'KCG College of Technology',
	degree: 'B.E. Computer Science and Engineering — Cybersecurity',
	cgpa: '8.61 / 10',
	duration: '2024 – 2028',
	location: 'Chennai, India',
	training: ['CCNA: Introduction to Networks']
};

export const verifiedExperience = [
	{
		company: 'Wyntrix Innovations (OPC) Pvt Ltd',
		role: 'Cyber Security Intern',
		duration: '30 days (Jun 2026 – Jul 2026)',
		dates: '08 June 2026 – 07 July 2026',
		mode: 'Offline',
		certificateTitle: 'CERTIFICATE OF INTERNSHIP COMPLETION',
		description: 'Completed a 30-day offline Cyber Security internship.'
	}
];

export const contactDetails = {
	email: 'yashwanth306002@gmail.com',
	github: 'https://github.com/Nebula4913',
	linkedin: 'https://www.linkedin.com/in/p-yashwanth-a14354326',
	resume: '/Yashwanth_P_Resume.pdf'
};

export function getProjectById(id = '') {
	if (id === 'regis-mk1') {
		return allProjects.find((p) => p.id === 'regis');
	}
	return allProjects.find((p) => p.id === id);
}

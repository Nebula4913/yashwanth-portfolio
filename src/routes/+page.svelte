<script>
	import Hero from '#lib/components/Hero.svelte';
	import FeaturedProjects from '#lib/components/FeaturedProjects.svelte';
	import {
		verifiedSkills,
		verifiedAchievements,
		verifiedEducation,
		verifiedExperience,
		contactDetails,
		academicResearch
	} from '#lib/data/projects.js';
</script>

<Hero />

<FeaturedProjects />

<section id="about" class="about-section" aria-labelledby="about-title">
	<div class="container">
		<header class="section-header">
			<span class="section-kicker">02 // About</span>
			<h2 id="about-title" class="section-title">About & Background</h2>
			<p class="section-subtitle">
				Cybersecurity engineering student focused on cybersecurity and machine learning.
			</p>
		</header>

		<div class="focus-bar">
			<span class="focus-bar-label">Current Focus:</span>
			<ul class="focus-tag-list" aria-label="Current technical focus areas">
				<li class="tag">Cybersecurity</li>
				<li class="tag">Machine Learning</li>
				<li class="tag">Threat Detection</li>
				<li class="tag">Security Assessment</li>
				<li class="tag">Security Systems</li>
			</ul>
		</div>

		<div class="profile-grid">
			<div class="profile-column">
				<div class="info-card">
					<div class="card-kicker">Education</div>
					<h3 class="card-title">{verifiedEducation.institution}</h3>
					<p class="card-subtitle">{verifiedEducation.degree}</p>
					<div class="meta-row">
						<span class="meta-item">CGPA: {verifiedEducation.cgpa}</span>
						<span class="meta-dot">·</span>
						<span class="meta-item">{verifiedEducation.duration}</span>
						<span class="meta-dot">·</span>
						<span class="meta-item">{verifiedEducation.location}</span>
					</div>
					<div class="training-block">
						<span class="training-label">Training:</span>
						<span class="training-name">{verifiedEducation.training[0]}</span>
					</div>
				</div>

				<div class="info-card">
					<div class="card-kicker">Experience</div>
					{#each verifiedExperience as exp}
						<div class="exp-item">
							<h3 class="card-title">{exp.company}</h3>
							<div class="meta-row">
								<span class="meta-item role-text">{exp.role}</span>
								<span class="meta-dot">·</span>
								<span class="meta-item">{exp.duration}</span>
								<span class="meta-dot">·</span>
								<span class="meta-item">{exp.mode}</span>
							</div>
							<p class="card-desc">{exp.description}</p>
						</div>
					{/each}
				</div>

				<div class="info-card">
					<div class="card-kicker">Verified Achievements</div>
					<ul class="achievements-list">
						{#each verifiedAchievements as ach}
							<li class="ach-item">
								<span class="ach-title">{ach.title}</span>
								<span class="ach-inst">{ach.institution}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="profile-column">
				<div class="info-card skills-card">
					<div class="card-kicker">Current Technical Skills</div>
					<p class="skills-disclaimer">
						Active technologies and core competencies defensible in technical assessment.
					</p>

					<div class="skills-groups">
						<div class="skill-group">
							<span class="skill-category">Programming</span>
							<ul class="skill-pill-list">
								{#each verifiedSkills.programming as skill}
									<li class="tag">{skill}</li>
								{/each}
							</ul>
						</div>

						<div class="skill-group">
							<span class="skill-category">Systems</span>
							<ul class="skill-pill-list">
								{#each verifiedSkills.systems as skill}
									<li class="tag">{skill}</li>
								{/each}
							</ul>
						</div>

						<div class="skill-group">
							<span class="skill-category">Cybersecurity</span>
							<ul class="skill-pill-list">
								{#each verifiedSkills.cybersecurity as skill}
									<li class="tag">{skill}</li>
								{/each}
							</ul>
						</div>

						<div class="skill-group">
							<span class="skill-category">Machine Learning</span>
							<ul class="skill-pill-list">
								{#each verifiedSkills.machineLearning as skill}
									<li class="tag">{skill}</li>
								{/each}
							</ul>
						</div>

						<div class="skill-group">
							<span class="skill-category">Tools & Technologies</span>
							<ul class="skill-pill-list">
								{#each verifiedSkills.toolsAndTechnologies as skill}
									<li class="tag">{skill}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="research" class="research-section" aria-labelledby="research-title">
	<div class="container">
		<header class="section-header">
			<span class="section-kicker">03 // Research</span>
			<h2 id="research-title" class="section-title">Academic Research</h2>
			<p class="section-subtitle">
				Combinatorial optimization and information retrieval for enhanced generative systems.
			</p>
		</header>

		<div class="research-card">
			<div class="research-header">
				<span class="research-category">{academicResearch.category}</span>
				<span class="status-pill">{academicResearch.status}</span>
			</div>

			<h3 class="research-title">{academicResearch.title}</h3>
			<p class="research-description">{academicResearch.description}</p>

			<div class="direction-box">
				<span class="direction-kicker">Current Research Direction:</span>
				<p class="direction-text">{academicResearch.direction}</p>
			</div>

			<div class="research-footer">
				<ul class="tag-list" aria-label="Research focus tags">
					{#each academicResearch.tags as tag}
						<li class="tag">{tag}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="contact" class="contact-section" aria-labelledby="contact-title">
	<div class="container">
		<header class="section-header">
			<span class="section-kicker">04 // Contact</span>
			<h2 id="contact-title" class="section-title">Get in Touch</h2>
			<p class="section-subtitle">
				Available for technical discussions, security research inquiries, and collaboration.
			</p>
		</header>

		<div class="contact-card">
			<div class="contact-info">
				<h3 class="contact-headline">Direct Communications</h3>
				<p class="contact-note">
					Open for discussions regarding security engineering, applied machine learning projects, or research inquiries.
				</p>

				<div class="contact-channels">
					<div class="channel-item">
						<span class="channel-label">Email</span>
						<a href={`mailto:${contactDetails.email}`} class="channel-link">
							{contactDetails.email}
						</a>
					</div>
					<div class="channel-item">
						<span class="channel-label">GitHub</span>
						<a href={contactDetails.github} target="_blank" rel="noreferrer noopener" class="channel-link">
							github.com/Nebula4913
						</a>
					</div>
					<div class="channel-item">
						<span class="channel-label">LinkedIn</span>
						<a href={contactDetails.linkedin} target="_blank" rel="noreferrer noopener" class="channel-link">
							linkedin.com/in/p-yashwanth-a14354326
						</a>
					</div>
					<div class="channel-item">
						<span class="channel-label">Resume</span>
						<a href={contactDetails.resume} download="Yashwanth_P_Resume.pdf" target="_blank" rel="noreferrer noopener" class="channel-link">
							Download Resume (PDF)
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		padding: 4.25rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.focus-bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2.25rem;
		flex-wrap: wrap;
	}

	.focus-bar-label {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.focus-tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
	}

	.profile-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 1.75rem;
		align-items: start;
	}

	.profile-column {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.info-card {
		background-color: var(--bg-card);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-md);
		padding: 1.625rem;
		transition: border-color var(--transition-base), transform var(--transition-base);
	}

	.info-card:hover {
		border-color: var(--border-accent);
		transform: translateY(-1px);
	}

	.card-kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent-blue);
		margin-bottom: 0.625rem;
		font-weight: 600;
	}

	.card-title {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
		letter-spacing: -0.01em;
	}

	.card-subtitle {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		margin-bottom: 0.625rem;
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--text-muted);
		flex-wrap: wrap;
		margin-bottom: 0.625rem;
	}

	.role-text {
		color: var(--accent-blue);
		font-weight: 500;
	}

	.card-desc {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.55;
	}

	.training-block {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--border-subtle);
		font-size: 0.85rem;
	}

	.training-label {
		font-family: var(--font-mono);
		color: var(--text-muted);
		font-size: 0.78125rem;
		text-transform: uppercase;
	}

	.training-name {
		color: var(--text-primary);
		font-weight: 500;
	}

	.achievements-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}

	.ach-item {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding-left: 0.875rem;
		border-left: 2px solid var(--accent-blue);
	}

	.ach-title {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.ach-inst {
		font-size: 0.8125rem;
		color: var(--text-muted);
		font-family: var(--font-mono);
	}

	.skills-disclaimer {
		font-size: 0.85rem;
		color: var(--text-muted);
		margin-bottom: 1.25rem;
		line-height: 1.5;
	}

	.skills-groups {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.skill-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.skill-category {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
		font-weight: 600;
	}

	.skill-pill-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
	}

	.research-section {
		padding: 4.25rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.research-card {
		background-color: var(--bg-card);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-md);
		padding: 2rem;
		max-width: 820px;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: border-color var(--transition-base), background-color var(--transition-base);
	}

	.research-card:hover {
		border-color: var(--border-accent);
		background-color: var(--bg-card-hover);
	}

	.research-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.research-category {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--accent-blue);
		letter-spacing: 0.03em;
		text-transform: uppercase;
	}

	.status-pill {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.2rem 0.55rem;
		border-radius: var(--radius-xs);
		background-color: var(--bg-tertiary);
		border: 1px solid var(--border-subtle);
		color: var(--accent-blue);
		font-weight: 500;
	}

	.research-title {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.015em;
	}

	.research-description {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.65;
	}

	.direction-box {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-sm);
		padding: 1.125rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.direction-kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: 0.02em;
	}

	.direction-text {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.research-footer {
		border-top: 1px solid var(--border-subtle);
		padding-top: 1.25rem;
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
	}

	.contact-section {
		padding: 4.25rem 0;
	}

	.contact-card {
		background-color: var(--bg-card);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-md);
		padding: 2.25rem;
		max-width: 720px;
	}

	.contact-headline {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.contact-note {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		margin-bottom: 1.75rem;
		line-height: 1.6;
	}

	.contact-channels {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
		border-top: 1px solid var(--border-subtle);
		padding-top: 1.25rem;
	}

	.channel-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-size: 0.9375rem;
	}

	.channel-label {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--text-muted);
		min-width: 70px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.channel-link {
		color: var(--accent-blue);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--transition-fast);
	}

	.channel-link:hover {
		color: var(--accent-blue-hover);
	}

	@media (prefers-reduced-motion: reduce) {
		.info-card {
			transition: none;
			transform: none !important;
		}
	}

	@media (max-width: 768px) {
		.about-section,
		.research-section,
		.contact-section {
			padding: 3rem 0;
		}

		.profile-grid {
			grid-template-columns: 1fr;
		}

		.channel-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}
</style>

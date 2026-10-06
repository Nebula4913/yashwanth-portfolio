<script>
	import ProjectCard from './ProjectCard.svelte';
	import { allProjects } from '#lib/data/projects.js';

	let { projects = allProjects } = $props();

	let showAll = $state(false);

	let publicProjects = $derived(projects.filter((p) => p.published));
	let featuredProjects = $derived(publicProjects.filter((p) => p.featured));

	let displayedProjects = $derived(
		showAll ? publicProjects : (featuredProjects.length > 0 ? featuredProjects : publicProjects)
	);

	function toggleShowAll() {
		showAll = !showAll;
	}
</script>

<section id="work" class="featured-projects-section" aria-labelledby="work-title">
	<div class="container">
		<header class="section-header project-section-header">
			<div class="header-text">
				<span class="section-kicker">01 // Work</span>
				<h2 id="work-title" class="section-title">Selected Projects</h2>
				<p class="section-subtitle">
					Network world models, intrusion defense platforms, malware reverse-engineering assistants, and surveillance detection.
				</p>
			</div>

			{#if publicProjects.length > featuredProjects.length}
				<div class="project-filter-actions">
					<button
						type="button"
						class="btn btn-secondary btn-sm toggle-all-btn"
						onclick={toggleShowAll}
						aria-expanded={showAll}
						aria-controls="projects-grid"
					>
						<span>{showAll ? `Show Featured (${featuredProjects.length})` : `View All Projects (${publicProjects.length})`}</span>
						<svg
							class="toggle-icon"
							class:rotated={showAll}
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
				</div>
			{/if}
		</header>

		<div id="projects-grid" class="projects-grid">
			{#each displayedProjects as project, index (project.id)}
				<div class="project-grid-item" style={`--stagger-index: ${index};`}>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.featured-projects-section {
		padding: 4.25rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.project-section-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.header-text {
		max-width: 680px;
	}

	.project-filter-actions {
		display: flex;
		align-items: center;
	}

	.toggle-all-btn {
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
	}

	.toggle-icon {
		transition: transform var(--transition-base);
	}

	.toggle-icon.rotated {
		transform: rotate(180deg);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.project-grid-item {
		display: flex;
		animation: cardFadeIn 350ms ease forwards;
		animation-delay: calc(var(--stagger-index, 0) * 60ms);
	}

	.project-grid-item :global(.project-card) {
		width: 100%;
	}

	@keyframes cardFadeIn {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.project-grid-item {
			animation: none;
		}
		.toggle-icon {
			transition: none;
		}
	}

	@media (max-width: 768px) {
		.featured-projects-section {
			padding: 3rem 0;
		}

		.project-section-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

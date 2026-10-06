<script>
	import ProjectSymbol from './ProjectSymbol.svelte';

	let { project } = $props();
</script>

<article class="project-card" aria-labelledby={`project-title-${project.id}`}>
	<div class="card-header">
		<div class="project-symbol" aria-hidden="true">
			<ProjectSymbol symbolId={project.symbolId || project.id} size={24} />
		</div>

		{#if project.status}
			<span class="status-pill">{project.status}</span>
		{/if}
	</div>

	<div class="card-body">
		<div class="project-category">{project.category}</div>

		<h3 id={`project-title-${project.id}`} class="project-name">
			{project.title || project.name}
		</h3>

		<p class="project-description">
			{project.description}
		</p>
	</div>

	<div class="card-footer">
		<ul class="tag-list" aria-label={`Core areas for ${project.name}`}>
			{#each project.tags as tag}
				<li class="tag">{tag}</li>
			{/each}
		</ul>

		<div class="link-wrapper">
			<a
				href={project.detailUrl}
				class="project-detail-link"
				aria-label={`View details and architecture for ${project.name}`}
			>
				<span>View Project Details</span>
				<svg
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
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</a>
		</div>
	</div>
</article>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		background-color: var(--bg-card);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-md);
		padding: 1.625rem;
		transition: border-color var(--transition-base), transform var(--transition-base), background-color var(--transition-base);
		position: relative;
	}

	.project-card:hover {
		border-color: var(--border-accent);
		background-color: var(--bg-card-hover);
		transform: translateY(-2px);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.project-symbol {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		background-color: var(--bg-tertiary);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-sm);
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

	.card-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-bottom: 1.375rem;
	}

	.project-category {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--accent-blue);
		margin-bottom: 0.375rem;
		letter-spacing: 0.015em;
	}

	.project-name {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.015em;
		margin-bottom: 0.75rem;
	}

	.project-description {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.card-footer {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		border-top: 1px solid var(--border-subtle);
		padding-top: 1.25rem;
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		list-style: none;
	}

	.link-wrapper {
		display: flex;
		align-items: center;
	}

	.project-detail-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--accent-blue);
		transition: color var(--transition-fast), gap var(--transition-fast);
	}

	.project-detail-link:hover {
		color: var(--accent-blue-hover);
		gap: 0.65rem;
	}
</style>

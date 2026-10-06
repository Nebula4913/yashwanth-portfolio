<script>
	let { steps = [], title = 'System Architecture Pipeline' } = $props();

	let activeStepId = $state('');

	function setActive(id = '') {
		activeStepId = id;
	}

	function clearActive() {
		activeStepId = '';
	}
</script>

<div class="flowchart-container" role="region" aria-label={title}>
	<div class="flowchart-header">
		<span class="flowchart-kicker">INTERACTIVE PIPELINE // HOVER OR FOCUS NODES</span>
	</div>

	<div class="pipeline-track">
		{#each steps as step, index (step.id)}
			<div
				class="pipeline-node-wrapper"
				class:active={activeStepId === step.id}
				onmouseenter={() => setActive(step.id)}
				onmouseleave={clearActive}
				onfocus={() => setActive(step.id)}
				onblur={clearActive}
				tabindex="0"
				role="button"
				aria-pressed={activeStepId === step.id}
				aria-describedby={step.desc ? `desc-${step.id}` : undefined}
			>
				<div class="node-card">
					<div class="node-main">
						<span class="step-num">0{index + 1}</span>
						<span class="node-title">{step.label}</span>
					</div>

					{#if step.desc}
						<p id={`desc-${step.id}`} class="node-desc">{step.desc}</p>
					{/if}

					{#if step.subnodes && step.subnodes.length > 0}
						<div class="subnodes-container">
							<span class="branch-label">Active Modules:</span>
							<div class="subnodes-grid">
								{#each step.subnodes as sub}
									<div class="subnode-item">
										<span class="subnode-name">{sub.name}</span>
										<span class="subnode-role">{sub.role}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				{#if index < steps.length - 1}
					<div class="connector-arrow" aria-hidden="true">
						<svg
							width="16"
							height="20"
							viewBox="0 0 16 20"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="8" y1="2" x2="8" y2="16" />
							<polyline points="4 12 8 16 12 12" />
						</svg>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.flowchart-container {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-md);
		padding: 2rem 1.75rem;
		position: relative;
	}

	.flowchart-header {
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flowchart-kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent-blue);
		font-weight: 600;
	}

	.pipeline-track {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		max-width: 680px;
		margin: 0 auto;
	}

	.pipeline-node-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		outline: none;
	}

	.node-card {
		width: 100%;
		background-color: var(--bg-card);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-sm);
		padding: 1rem 1.25rem;
		transition: border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);
	}

	.pipeline-node-wrapper:hover .node-card,
	.pipeline-node-wrapper:focus .node-card,
	.pipeline-node-wrapper.active .node-card {
		border-color: var(--border-accent);
		background-color: var(--bg-card-hover);
		transform: translateY(-1px);
		box-shadow: 0 4px 16px rgba(59, 130, 246, 0.08);
	}

	.pipeline-node-wrapper:focus-visible .node-card {
		outline: 2px solid var(--accent-blue);
		outline-offset: 2px;
	}

	.node-main {
		display: flex;
		align-items: center;
		gap: 0.875rem;
	}

	.step-num {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--accent-blue);
		padding: 0.2rem 0.45rem;
		background-color: var(--bg-tertiary);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-xs);
	}

	.node-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	.node-desc {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		margin-top: 0.4rem;
		line-height: 1.5;
	}

	.subnodes-container {
		margin-top: 0.875rem;
		padding-top: 0.75rem;
		border-top: 1px dashed var(--border-subtle);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.branch-label {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
	}

	.subnodes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.5rem;
	}

	.subnode-item {
		background-color: var(--bg-tertiary);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-xs);
		padding: 0.45rem 0.65rem;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.subnode-name {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent-blue);
	}

	.subnode-role {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	.connector-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 28px;
		color: var(--border-bright);
		transition: color var(--transition-fast), transform var(--transition-fast);
	}

	.pipeline-node-wrapper:hover .connector-arrow,
	.pipeline-node-wrapper.active .connector-arrow {
		color: var(--accent-blue);
		transform: translateY(2px);
	}

	@media (prefers-reduced-motion: reduce) {
		.node-card,
		.connector-arrow {
			transition: none;
			transform: none !important;
		}
	}

	@media (max-width: 640px) {
		.flowchart-container {
			padding: 1.5rem 1rem;
		}

		.subnodes-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

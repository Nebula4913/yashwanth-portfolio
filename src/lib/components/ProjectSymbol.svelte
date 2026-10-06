<script>
	let { symbolId, size = 22 } = $props();
</script>

{#if symbolId === 'n3xa'}
	<svg
		class="tech-symbol"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-label="N3XA Security Symbol"
	>
		<polygon points="12 2 20.5 7 20.5 17 12 22 3.5 17 3.5 7 12 2" />
		<circle cx="12" cy="12" r="3.25" />
		<line x1="12" y1="2" x2="12" y2="8.75" />
		<line x1="12" y1="15.25" x2="12" y2="22" />
	</svg>
{:else if symbolId === 'atom'}
	<svg
		class="tech-symbol"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-label="ATOM World Model Symbol"
	>
		<circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.2" />
		<ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(30 12 12)" />
		<ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-30 12 12)" />
		<circle cx="19.5" cy="8" r="1.25" fill="currentColor" />
		<circle cx="4.5" cy="16" r="1.25" fill="currentColor" />
	</svg>
{:else if symbolId === 'regis' || symbolId === 'regis-mk1'}
	<svg
		class="tech-symbol"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-label="REGIS Binary Analysis Symbol"
	>
		<rect x="3.5" y="4" width="17" height="16" rx="2" />
		<line x1="7.5" y1="8.5" x2="12" y2="8.5" />
		<line x1="7.5" y1="12" x2="14" y2="12" />
		<line x1="7.5" y1="15.5" x2="11" y2="15.5" />
		<circle cx="16.5" cy="12" r="1.5" fill="currentColor" />
	</svg>
{:else if symbolId === 'n3mesis'}
	<svg
		class="tech-symbol"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-label="N3MESIS Assessment Symbol"
	>
		<circle cx="12" cy="12" r="9" />
		<line x1="12" y1="3" x2="12" y2="7.5" />
		<line x1="12" y1="16.5" x2="12" y2="21" />
		<line x1="3" y1="12" x2="7.5" y2="12" />
		<line x1="16.5" y1="12" x2="21" y2="12" />
		<circle cx="12" cy="12" r="2.25" />
	</svg>
{:else if symbolId === 'drone-detection'}
	<svg
		class="tech-symbol"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-label="Drone Detection System Symbol"
	>
		<circle cx="12" cy="12" r="2.5" />
		<line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
		<line x1="17.5" y1="6.5" x2="6.5" y2="17.5" />
		<circle cx="5" cy="5" r="2" />
		<circle cx="19" cy="5" r="2" />
		<circle cx="5" cy="19" r="2" />
		<circle cx="19" cy="19" r="2" />
	</svg>
{:else}
	<span class="symbol-fallback">YP</span>
{/if}

<style>
	.tech-symbol {
		display: block;
		color: var(--accent-blue);
		transition: transform var(--transition-base), color var(--transition-base), filter var(--transition-base);
	}

	:global(.project-card:hover) .tech-symbol,
	:global(.symbol-container:hover) .tech-symbol {
		transform: scale(1.08);
		color: var(--accent-blue-hover);
	}

	.symbol-fallback {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--accent-blue);
	}

	@media (prefers-reduced-motion: reduce) {
		.tech-symbol {
			transition: none;
		}
		:global(.project-card:hover) .tech-symbol,
		:global(.symbol-container:hover) .tech-symbol {
			transform: none;
		}
	}
</style>

<script>
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeydown(event = new KeyboardEvent('keydown')) {
		if (event.key === 'Escape' && isMenuOpen) {
			isMenuOpen = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="navbar-wrapper">
	<div class="container">
		<nav class="navbar" aria-label="Main Navigation">
			<a href="/" class="brand" onclick={closeMenu} aria-label="Yashwanth P Home">
				<span class="brand-mark">YP</span>
				<span class="brand-name">Yashwanth P</span>
			</a>

			<ul class="nav-links desktop-only">
				<li><a href="#work" class="nav-link">Work</a></li>
				<li><a href="#about" class="nav-link">About</a></li>
				<li><a href="#research" class="nav-link">Research</a></li>
				<li><a href="#contact" class="nav-link">Contact</a></li>
			</ul>

			<div class="nav-actions desktop-only">
				<a
					href="/Yashwanth_P_Resume.pdf"
					download="Yashwanth_P_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary btn-sm resume-btn"
					aria-label="Download Resume"
				>
					<span>Resume</span>
					<svg
						class="icon-download"
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
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
				</a>
			</div>

			<button
				type="button"
				class="mobile-toggle"
				onclick={toggleMenu}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-nav"
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			>
				<span class="hamburger-bar" class:active={isMenuOpen}></span>
				<span class="hamburger-bar" class:active={isMenuOpen}></span>
				<span class="hamburger-bar" class:active={isMenuOpen}></span>
			</button>
		</nav>
	</div>

	{#if isMenuOpen}
		<div id="mobile-nav" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
			<ul class="mobile-nav-links">
				<li><a href="#work" class="mobile-nav-link" onclick={closeMenu}>Work</a></li>
				<li><a href="#about" class="mobile-nav-link" onclick={closeMenu}>About</a></li>
				<li><a href="#research" class="mobile-nav-link" onclick={closeMenu}>Research</a></li>
				<li><a href="#contact" class="mobile-nav-link" onclick={closeMenu}>Contact</a></li>
			</ul>
			<div class="mobile-nav-actions">
				<a
					href="/Yashwanth_P_Resume.pdf"
					download="Yashwanth_P_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary btn-sm resume-btn-mobile"
					onclick={closeMenu}
					aria-label="Download Resume"
				>
					<span>Resume</span>
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.navbar-wrapper {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		background-color: var(--bg-nav);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-subtle);
	}

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.625rem;
		text-decoration: none;
		color: var(--text-primary);
	}

	.brand-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: var(--radius-xs);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		color: var(--accent-blue);
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.brand-name {
		font-family: var(--font-sans);
		font-size: 0.9375rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		color: var(--text-primary);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		list-style: none;
	}

	.nav-link {
		font-size: 0.875rem;
		color: var(--text-secondary);
		transition: color var(--transition-fast);
		font-weight: 500;
	}

	.nav-link:hover {
		color: var(--text-primary);
	}

	.resume-btn {
		font-size: 0.8125rem;
		gap: 0.4rem;
	}

	.icon-download {
		opacity: 0.75;
	}

	.mobile-toggle {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 28px;
		height: 20px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.hamburger-bar {
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--text-primary);
		transition: transform var(--transition-fast), opacity var(--transition-fast);
	}

	.hamburger-bar.active:nth-child(1) {
		transform: translateY(9px) rotate(45deg);
	}

	.hamburger-bar.active:nth-child(2) {
		opacity: 0;
	}

	.hamburger-bar.active:nth-child(3) {
		transform: translateY(-9px) rotate(-45deg);
	}

	.mobile-menu {
		display: none;
		border-top: 1px solid var(--border-subtle);
		background-color: var(--bg-primary);
		padding: 1.25rem 1.5rem 1.75rem;
	}

	.mobile-nav-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.mobile-nav-link {
		display: block;
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-secondary);
		padding: 0.35rem 0;
	}

	.mobile-nav-link:hover {
		color: var(--text-primary);
	}

	.resume-btn-mobile {
		width: 100%;
		text-align: center;
	}

	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}

		.mobile-menu {
			display: block;
		}
	}
</style>

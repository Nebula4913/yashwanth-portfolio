<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container">
		<div class="footer-inner">
			<div class="footer-brand-section">
				<div class="footer-brand">
					<span class="brand-mark">YP</span>
					<span class="brand-name">Yashwanth P</span>
				</div>
				<p class="footer-tagline">
					Cybersecurity + Machine Learning
				</p>
				<p class="copyright">
					&copy; {currentYear} Yashwanth P. All rights reserved.
				</p>
			</div>

			<div class="footer-links-group">
				<div class="footer-column">
					<h3 class="footer-column-heading">Navigation</h3>
					<ul class="footer-links">
						<li><a href="#work" class="footer-link">Work</a></li>
						<li><a href="#about" class="footer-link">About</a></li>
						<li><a href="#research" class="footer-link">Research</a></li>
						<li><a href="#contact" class="footer-link">Contact</a></li>
					</ul>
				</div>

				<div class="footer-column">
					<h3 class="footer-column-heading">Connect</h3>
					<ul class="footer-links">
						<li>
							<a
								href="https://github.com/Nebula4913"
								target="_blank"
								rel="noreferrer noopener"
								class="footer-link"
							>
								<span>GitHub</span>
								<svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/p-yashwanth-a14354326"
								target="_blank"
								rel="noreferrer noopener"
								class="footer-link"
							>
								<span>LinkedIn</span>
								<svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="mailto:yashwanth306002@gmail.com"
								class="footer-link"
							>
								<span>Email</span>
							</a>
						</li>
						<li>
							<a
								href="/Yashwanth_P_Resume.pdf"
								download="Yashwanth_P_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								class="footer-link"
								aria-label="Download Resume"
							>
								<span>Resume</span>
								<svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" y1="15" x2="12" y2="3" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="system-status">
				<span class="status-dot"></span>
				<span class="status-label">Operational // System Baseline</span>
			</div>
			<div class="build-info">
				<span>Portfolio UI v0.1</span>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: var(--bg-primary);
		border-top: 1px solid var(--border-subtle);
		padding: 4rem 0 2.5rem;
		margin-top: auto;
	}

	.footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 3rem;
		flex-wrap: wrap;
		padding-bottom: 2.5rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.footer-brand-section {
		max-width: 320px;
	}

	.footer-brand {
		display: inline-flex;
		align-items: center;
		gap: 0.625rem;
		margin-bottom: 0.75rem;
	}

	.brand-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: var(--radius-xs);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		color: var(--accent-blue);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 700;
	}

	.brand-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.footer-tagline {
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-bottom: 1rem;
		font-family: var(--font-mono);
	}

	.copyright {
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	.footer-links-group {
		display: flex;
		gap: 4rem;
		flex-wrap: wrap;
	}

	.footer-column {
		min-width: 140px;
	}

	.footer-column-heading {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.footer-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.footer-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.875rem;
		color: var(--text-secondary);
		transition: color var(--transition-fast);
	}

	.footer-link:hover {
		color: var(--accent-blue);
	}

	.external-icon {
		opacity: 0.6;
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 2rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text-muted);
		flex-wrap: wrap;
		gap: 1rem;
	}

	.system-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: var(--status-active);
	}

	.build-info {
		letter-spacing: 0.04em;
	}

	@media (max-width: 640px) {
		.site-footer {
			padding: 3rem 0 2rem;
		}

		.footer-inner {
			flex-direction: column;
			gap: 2rem;
		}

		.footer-links-group {
			gap: 2.5rem;
			width: 100%;
		}

		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

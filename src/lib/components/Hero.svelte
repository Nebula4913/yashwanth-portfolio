<section class="hero-section" aria-labelledby="hero-title">
	<div class="container">
		<div class="hero-content">
			<div class="domain-badge">
				<span class="status-indicator"></span>
				<span class="domain-text">Cybersecurity + Machine Learning</span>
			</div>

			<h1 id="hero-title" class="hero-name">
				Yashwanth P
			</h1>

			<p class="hero-positioning">
				Focusing on AI-based intrusion detection, local malware analysis, and security assessment automation across cybersecurity and machine learning.
			</p>

			<div class="hero-actions">
				<a href="#work" class="btn btn-primary">
					<span>View Projects</span>
					<svg
						width="15"
						height="15"
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

				<a
					href="https://github.com/Nebula4913"
					target="_blank"
					rel="noreferrer noopener"
					class="btn btn-secondary"
					aria-label="GitHub Profile"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						/>
					</svg>
					<span>GitHub</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		padding: 4.125rem 0 3.25rem;
		border-bottom: 1px solid var(--border-subtle);
		background: linear-gradient(
			180deg,
			rgba(13, 19, 31, 0.45) 0%,
			rgba(8, 12, 20, 0.8) 100%
		);
	}

	.hero-content {
		max-width: 740px;
	}

	.domain-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.3rem 0.7rem;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-medium);
		border-radius: var(--radius-sm);
		margin-bottom: 1.125rem;
	}

	.status-indicator {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background-color: var(--accent-blue);
	}

	.domain-text {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-primary);
		letter-spacing: 0.02em;
	}

	.hero-name {
		font-size: 2.375rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		line-height: 1.18;
		margin-bottom: 1rem;
	}

	.hero-positioning {
		font-size: 1.075rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 660px;
		margin-bottom: 1.875rem;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	@media (max-width: 640px) {
		.hero-section {
			padding: 2.75rem 0 2.25rem;
		}

		.hero-name {
			font-size: 1.875rem;
		}

		.hero-positioning {
			font-size: 1rem;
			margin-bottom: 1.5rem;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.hero-actions .btn {
			width: 100%;
		}
	}
</style>

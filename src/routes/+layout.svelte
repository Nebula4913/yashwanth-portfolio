<script>
	import favicon from '#lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Yashwanth P — Cybersecurity + Machine Learning</title>
	<meta
		name="description"
		content="Technical portfolio of Yashwanth P: Cybersecurity engineer specializing in systems security, vulnerability analysis, and applied machine learning."
	/>
</svelte:head>

<div class="site-wrapper">
	<a href="#main-content" class="skip-link">Skip to main content</a>

	<Navbar />

	<main id="main-content">
		{@render children()}
	</main>

	<Footer />
</div>

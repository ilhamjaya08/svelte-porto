<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Footer from './Footer.svelte';
	
</script>



<div class="app">
	<Header />

	<script
			src="https://cdn.jsdelivr.net/npm/mouseee@1.3.0/lib/index.js"
            type="module">
	</script>

	<script>
    const mouseeeConfig = {
      color: "#fff", // cursor border color
      size: 20, // cursor size
      trailColor: "#fff", // trail color
      trailTime: 300, // trail duration time
      showTrail: true, // show trail
      clickAnimation: true, // animation on click
    };
	</script>

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>

<script>
	import Header from './Header.svelte';
	import Navbar from "../components/Navbar.svelte"
	import Sidebar from "../components/Sidebar.svelte"

	import './styles.css';
	import Footer from './Footer.svelte';
	import { inject } from '@vercel/analytics';
	inject();

	let open = false;
</script>


<div class="app">
	<Sidebar bind:open/>
	<Navbar bind:sidebar={open}/>

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

    	<!--Start of Tawk.to Script-->
		<script type="text/javascript">
			var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
			(function(){
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.tawk.to/660d717fa0c6737bd127ed28/1hqi86mvt';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
			})();
			</script>
			<!--End of Tawk.to Script-->

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

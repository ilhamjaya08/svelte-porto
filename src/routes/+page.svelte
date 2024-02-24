<script>
	import welcome from '$lib/images/ilhamjaya08-light.svg';
</script>

<svelte:head>
	<title>ilhamjaya08 | Portfolio</title>
	<meta name="description" content="Svelte Portfolio by ilhamjaya08" />
	<meta name="title" content="ilhamjaya08 | Portfolio">
    <meta name="keywords" content="portfolio, svelte, sveltekit, svelte-portfolio, ui, ux, ilhamjaya08">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="revisit-after" content="1 days">
    <meta name="author" content="ilhamjaya08">
</svelte:head>

<section>

    <span class="welcome">
   	   <img src={welcome} alt="Welcome" />
	</span>

	

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}


	.welcome {
		display: block;
		position: relative;
		margin-top: -10%;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

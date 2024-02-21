<script>
	import ilhamjaya08 from '$lib/images/ilhamjaya08-light.svg';
</script>

<svelte:head>
	<title>ilhamjaya08 | About</title>
	<meta name="description" content="About section for ilhamjaya08 Portfolio" />
</svelte:head>

<div class="about">
	<span class="logo-about">
		<img src={ilhamjaya08} alt="ilhamjaya08 Logo" />
	</span>
</div>

<style>
	.logo-about {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.logo-about img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
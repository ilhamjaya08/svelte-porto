<script>
	import welcome from '$lib/images/ilhamjaya08-light.svg';
	import Typing from '../components/typing.svelte';
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

    <!---<span class="welcome">
   	   <img src={welcome} alt="Welcome" />
	</span>-->
	<Typing />
	<div class="fixed bottom-4 right-4">
	  <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
		<a href="/csoon">
		<svg xmlns="http://www.w3.org/2000/svg" class="bot-icon" height="2.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.326-1H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.583a1.423 1.423 0 0 1 1 .016V4.5A1.5 1.5 0 0 0 13.5 3h-3zm-2 9h1.908a1.415 1.415 0 0 0-.408.997v.006H5.31a.81.81 0 0 0-.81.81v.437c0 .69.131 1.456.802 2.069C5.99 16.446 7.34 17 10 17c1.55 0 2.655-.188 3.444-.47a1.422 1.422 0 0 0 .678.419a1.3 1.3 0 0 0-.117.439c-.916.367-2.137.59-3.755.61V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5zm6.378-2.218l.348 1.071a2.206 2.206 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.207 2.207 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.218 2.218 0 0 0-.65-.977a2.208 2.208 0 0 0-.748-.426l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.578 1.578 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.765a1.576 1.576 0 0 1-.984.998l-.765.248a.303.303 0 0 0-.146.46c.036.05.087.09.146.11l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-6.174-.527l.07.053Z"/></svg>
		Live Chat with Bot</a>
	  </button>
	</div>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
	<p>wouide</p>
</section>

<style>
	.bot-icon {
		display: block;
		margin-left: 35%;
	}

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

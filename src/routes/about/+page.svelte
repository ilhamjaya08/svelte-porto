<script>
	import ilhamjaya08 from '$lib/images/ilhamjaya08-light.svg';
	import { Card, Button } from 'flowbite-svelte';
	import education from '$lib/data/Education'
</script>

<svelte:head>
	<title>ilhamjaya08 | About</title>
	<meta name="description" content="About section for ilhamjaya08 Portfolio" />
</svelte:head>

<div class="about">
	<span class="logo-about">
		<img src={ilhamjaya08} alt="ilhamjaya08 Logo" />
	</span>
	<p>
		Hi Everyone! Let. me introduce myself, my name is Muhammad Ilham Jaya. I was born at Karanganyar on 18 March 2008. 
		I am currently still studying at SMK Negeri 5 Surakarta majoring in Software Engineering. I like coding, creating software, and doing other daily routines.
		Below is some information regarding biodata, background, profile, etc. about me
	</p>
</div>

<h1 class="text-black font-mono text-left mt-5">Education Background</h1>

{#each education as edu}
<div class="p-1 w-full md:w-1/2 mt-[10px]">
	<div class="rounded-lg shadow-lg border-y-cyan-950 bg-white">
	  <img src={edu.img} alt="" class="rounded-t-lg relative float-left">
	  <div class="p-2">
		<h5 class="text-grey-700 mb-2">{edu.name}</h5 >
		<p class="">{edu.type}</p>
	  </div>
  
	</div>
  </div>
{/each}

<style>
	.about p {
		font-family: "Fira Code", monospace;
		font-size: 16px;
	}
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
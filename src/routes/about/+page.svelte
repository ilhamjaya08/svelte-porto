<script>
	import ilhamjaya08 from '$lib/images/ilhamjaya08-light.svg';
	import { Card, Button } from 'flowbite-svelte';
	import education from '$lib/data/Education'
	import address from '$lib/data/Address'
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


<div class="grid">
<h1 class="text-black font-mono text-left mt-5">Educational Background</h1>

{#each education as edu}
<div class="p-1 w-full md:w-1/2 mt-[10px] ">
	<div class="rounded-lg shadow-lg card">
	  <img src={edu.img} alt="" class="rounded-t-lg relative float-left">
	  <div class="p-2">
		<h5 class="text-grey-700 mb-2">{edu.name} ({edu.year})</h5 >
		<p class="font-serif text-xs ml-[37px]">{edu.type}</p>
	  </div>
  
	</div>
  </div>
{/each}

<h1 class="text-black font-mono text-left mt-5">Where do I live?</h1>
{#each address as adr}
<div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 float-left">
	<img class="w-full" src={adr.img} alt="Karanganyar">
	<div class="px-6 py-4">
	  <div class="font-bold text-xl mb-2">{adr.city}, {adr.province}</div>
	  <p class="text-gray-600 text-base">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
	  </p>
	</div>
	<div class="px-6 py-4">
	  <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#photography</span>
	  <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#travel</span>
	  <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#winter</span>
	</div>
  </div>
{/each}
</div>

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

    .card {
		background-color: #FFF;
		border: 2px solid #000;
		border-radius: 6px;
		box-shadow: inset 0 2px 0 #E5E5E5;
		font-family: inherit;
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 0.1rem;
		outline: none;
		padding: 0.3rem ;
		width: 100%;
	}
	
	.logo-about img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
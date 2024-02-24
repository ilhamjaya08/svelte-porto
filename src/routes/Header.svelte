<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/ilhamjaya08-light.svg';
	import Icon from '@iconify/svelte';

	let showMenu = false;

    function toggleNavbar() {
      showMenu = !showMenu;
    }
</script>

<header>
	<div class="corner">
		<a href="https://www.ilhamjaya08.me">
			<img src={logo} alt="ilhamjaya08logo" />
		</a>
	</div>

	<div>
		<div>
		  <nav
			class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
		  >
			<div class="flex items-center justify-between">
			  
			  <!-- Mobile menu button -->
			  <!-- svelte-ignore a11y-click-events-have-key-events -->
			  <!-- svelte-ignore a11y-no-static-element-interactions -->
			  <div on:click={toggleNavbar} class="flex md:hidden">
				<button
				  type="button"
				  class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				  >
					<path
					  stroke-linecap="round"
					  stroke-linejoin="round"
					  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				  </svg>
				</button>
			  </div>
			</div>
	  
			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
			  class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
			>
			  <a class="text-gray-800 hover:text-blue-400 font-serif font-bold font-navbar" href="/">
				<Icon icon="uil:home" style="float: left; margin-right: 5px;" />
				HOME
			  </a>
			  <a class="text-gray-800 hover:text-blue-400 font-serif font-bold font-navbar" href="/about">
				<Icon icon="ic:outline-info" style="float: left; margin-right: 5px;"  />
				ABOUT
			  </a>
			  <a class="text-gray-800 hover:text-blue-400 font-serif font-bold font-navbar" href="/experience">
				<Icon icon="simple-icons:knowledgebase" style="float: left; margin-right: 5px;" />
				EXPERIENCE
			  </a>
			  <a class="text-gray-800 hover:text-blue-400 font-serif font-bold font-navbar" href="/contact">
				<Icon icon="grommet-icons:contact-info" style="float: left; margin-right: 5px;" />
				CONTACT
			  </a>
			  
			  <a class="text-gray-800 hover:text-blue-400 font-serif font-bold font-navbar" href="/resume">
				<Icon icon="pepicons-pencil:cv" style="float: left; margin-right: 5px;" />
				RESUME
			  </a>
			  
			</div>
		  </nav>
		</div>
	  </div>
  

	<div class="corner">
		<a href="https://github.com/ilhamjaya08/svelte-porto">
			<Icon icon="eos-icons:fork-outlined" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.font-navbar{
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	/*nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}*/
</style>
<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'
	
	export let sidebar = false
</script>

<header class="flex sticky justify-between antialiased bg-gradient-to-r from-sky-500 via-blue-600 to-purple-700 p-2 items-center text-gray-600 border-b-2">
	<nav class="flex ">
		<Hamburger bind:open={sidebar}/>
		<Logo/>	
	</nav>
	<nav class="flex">
	<Menu />
	</nav>
</header>
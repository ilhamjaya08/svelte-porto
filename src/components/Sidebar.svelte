<script>
	export let open = false
</script>

<aside class="absolute w-full h-full antialised bg-gradient-to-r from-sky-500 via-blue-600 to-purple-700 border-r-2 shadow-lg" class:open>
	<nav class="p-12 mt-[20px] font-mono uppercase text-xl">
		<ul class="tree block">
			<li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
					About me</a>
			</li>
			<li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
				Experience</a>
			 <ul>
			  <li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
					Skill</a>
			  </li>
			  <li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
				Roadmap</a>
			  </li>
			  <li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
				Certificate</a>
			  </li>
			  <li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
				Projects</a>
			  </li>
			  <li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
				Career</a>
			  </li>
			 </ul>
			</li>
			<li>
			  <a href="/about" class="hover:no-underline hover:text-gray-600">
				Service</a>
			</li>
			<li>
				<a href="/about" class="hover:no-underline hover:text-gray-600">
					Contact</a>
			</li>
			<li>
				<a href="/resume" class="hover:no-underline hover:text-gray-600 ">
				Resume</a>
			</li>
			<li>
				<a href="http://blog.ilhamjaya08.me" class="hover:no-underline hover:text-gray-600 ">
				Blog</a>
			</li>
		   </ul>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}

	ul.tree, ul.tree ul {
    list-style: none;
     margin: 0;
     padding: 0;
   } 
   ul.tree ul {
     margin-left: 10px;
   }
   ul.tree li {
     margin: 0;
     padding: 0 7px;
     line-height: 20px;
     color: #369;
     font-weight: bold;
     border-left:1px solid rgb(100,100,100);

   }
   ul.tree li:last-child {
       border-left:none;
   }
   ul.tree li:before {
      position:relative;
      top:-0.3em;
      height:1em;
      width:12px;
      color:white;
      border-bottom:1px solid rgb(100,100,100);
      content:"";
      display:inline-block;
      left:-7px;
   }
   ul.tree li:last-child:before {
      border-left:1px solid rgb(100,100,100);   
   }
</style>
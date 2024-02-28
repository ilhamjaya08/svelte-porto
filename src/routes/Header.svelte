<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/ilhamjaya08-light.svg';
	import Icon from '@iconify/svelte';
</script>

<header>
	<div class="corner">
		<a href="https://www.ilhamjaya08.me">
			<img src={logo} alt="ilhamjaya08logo" />
		</a>
	</div>

    <div class="floating-container animate-pulse">
    <div class="floating-button">
		<svg xmlns="http://www.w3.org/2000/svg" class="floating-icon-menu" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"/></g></svg>
	</div>
    <div class="element-container">

    <a href="/about"> 
	  <span class="float-element tooltip-left">
        <svg xmlns="http://www.w3.org/2000/svg" class="floating-icon-about" width="1.5em" height="1.5em" viewBox="0 0 36 36"><path fill="currentColor" d="M25.39 25.45a1 1 0 0 0-1.38.29c-1.41 2.16-4 4.81-6.31 5.7s-4.12.57-4.84 0c-.31-.27-1.12-1-.43-3.49c.46-1.66 3.32-9.48 4-11.38l-2.18.28c-.69 1.86-3.29 8.84-3.76 10.58c-.68 2.49-.34 4.3 1.09 5.56A5.59 5.59 0 0 0 15 34a9.53 9.53 0 0 0 3.45-.7c2.79-1.09 5.72-4.12 7.26-6.47a1 1 0 0 0-.32-1.38" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M19.3 11a4.5 4.5 0 1 0-4.5-4.5a4.5 4.5 0 0 0 4.5 4.5m0-7a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 19.3 4" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M11.81 15c.06 0 6.27-.82 7.73-1c.65-.1 1.14 0 1.3.15s.21.8-.07 1.68c-.61 1.86-3.69 11-4.59 13.71a8 8 0 0 0 1.29-.38a7.32 7.32 0 0 0 1.15-.6c1.23-3.56 3.53-10.46 4.05-12.04s.39-2.78-.3-3.6a3.16 3.16 0 0 0-3.08-.83c-1.43.15-7.47.94-7.73 1a1 1 0 0 0 .26 2Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
	  </span> 
	</a>
    
    <a href="/contact"> 
		<span class="float-element tooltip-left">
		  <svg xmlns="http://www.w3.org/2000/svg" class="floating-icon-contact" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM4 0h16v2H4zm0 22h16v2H4zm8-10a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10zm-8.19-.49c.61-.52 2.03-1 3.19-1c1.17 0 2.59.48 3.2 1z"/></svg>
		</span> 
	</a>
    <a href="/resume"> 
		<span class="float-element tooltip-left">
			<svg xmlns="http://www.w3.org/2000/svg" class="floating-icon-resume" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
		</span> 
	</a>
  </div>
</div>

	<div class="corner">
		<a href="https://github.com/ilhamjaya08/svelte-porto">
			<Icon icon="eos-icons:fork-outlined" />
		</a>
	</div>
</header>

<style>

@import url("https://fonts.googleapis.com/css?family=Roboto");
@-webkit-keyframes come-in {
  0% {
    -webkit-transform: translatey(100px);
            transform: translatey(100px);
    opacity: 0;
  }
  30% {
    -webkit-transform: translateX(-50px) scale(0.4);
            transform: translateX(-50px) scale(0.4);
  }
  70% {
    -webkit-transform: translateX(0px) scale(1.2);
            transform: translateX(0px) scale(1.2);
  }
  100% {
    -webkit-transform: translatey(0px) scale(1);
            transform: translatey(0px) scale(1);
    opacity: 1;
  }
}
@keyframes come-in {
  0% {
    -webkit-transform: translatey(100px);
            transform: translatey(100px);
    opacity: 0;
  }
  30% {
    -webkit-transform: translateX(-50px) scale(0.4);
            transform: translateX(-50px) scale(0.4);
  }
  70% {
    -webkit-transform: translateX(0px) scale(1.2);
            transform: translateX(0px) scale(1.2);
  }
  100% {
    -webkit-transform: translatey(0px) scale(1);
            transform: translatey(0px) scale(1);
    opacity: 1;
  }
}
* {
  cursor: none;
  margin: 0;
  padding: 0;
}

.floating-container {
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 0;
  margin: 35px 25px;
}
.floating-container:hover {
  height: 300px;
}
.floating-container:hover .floating-button {
  box-shadow: 0 10px 25px rgba(44, 179, 240, 0.6);
  -webkit-transform: translatey(5px);
          transform: translatey(5px);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.floating-container:hover .element-container .float-element:nth-child(1) {
  -webkit-animation: come-in 0.4s forwards 0.2s;
          animation: come-in 0.4s forwards 0.2s;
}
.floating-container:hover .element-container .float-element:nth-child(2) {
  -webkit-animation: come-in 0.4s forwards 0.4s;
          animation: come-in 0.4s forwards 0.4s;
}
.floating-container:hover .element-container .float-element:nth-child(3) {
  -webkit-animation: come-in 0.4s forwards 0.6s;
          animation: come-in 0.4s forwards 0.6s;
}
.floating-container .floating-button {
  position: absolute;
  width: 65px;
  height: 65px;
  background: #2cb3f0;
  bottom: 0;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: 10px 20px;
  color: white;
  line-height: 65px;
  text-align: center;
  font-size: 23px;
  z-index: 100;
  box-shadow: 0 10px 25px -5px rgba(44, 179, 240, 0.6);
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.floating-icon-menu {
	margin-top: 15%;
	margin-left: 15%;
}
.floating-icon-contact {
	position: absolute;
	margin: 13px 13px;
}
.floating-icon-about {
	position: absolute;
	margin: 13px 13px;
}
.floating-icon-resume {
	position: absolute;
	margin: 13px 13px;
}
.floating-container .float-element {
  position: relative;
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 15px auto;
  color: white;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  z-index: 0;
  opacity: 0;
  -webkit-transform: translateY(100px);
          transform: translateY(100px);
}
.floating-container .float-element:nth-child(1) {
  background: #42A5F5;
  box-shadow: 0 20px 20px -10px rgba(66, 165, 245, 0.5);
}
.floating-container .float-element:nth-child(2) {
  background: #4CAF50;
  box-shadow: 0 20px 20px -10px rgba(76, 175, 80, 0.5);
}
.floating-container .float-element:nth-child(3) {
  background: #FF9800;
  box-shadow: 0 20px 20px -10px rgba(255, 152, 0, 0.5);
}

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

	/*.font-navbar{
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}*/

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
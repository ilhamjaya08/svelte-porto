<script>
    import Icon from '@iconify/svelte';
    let date = new Date();
    let year = date.getFullYear();
</script>

<footer>
    <p>Developed with 
        <Icon icon="devicon:svelte" class="svelte-icon" style="display: inline; margin-top: -1%;"/>
       By ilhamjaya08 ©{year}
    </p>
</footer>

<style>
    
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
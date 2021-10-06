<script>
	import { onMount } from 'svelte';
	import '../scss/main.scss';
	import '../scss/styleguide.scss';

	let ready = false;

	onMount(()=>{
		ready = true;
	})
</script>

{#if ready}
	<main>
		<slot />
	</main>
{/if}
<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>¿Qué pasa, Riachuelo?</title>
</svelte:head>

<div class='container'>
		<img class='main-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />

		<div class="botonera">
			  <Button
				    skin="primary"
					style="text-transform: none"
				    on:click={()=>{
				      goto('/primeravez')
				    }}
			  >
				    Ingreso por primera vez
			  </Button>
			  <Button
				    skin="secondary "
					style="color: #f0a300; border-color:#f0a300; text-transform: none"
				    href='https://mapaqpr.farn.org.ar'
			  >
				    Ingreso al mapa
			  </Button>
		</div>

</div>
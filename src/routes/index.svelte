<script>
	import Button from '$lib/jui-components/Button.svelte';

	let home = true;
	let first_time = false;
	let vecino_cuenca_matanza_riachuelo = false;
	let integrante_comunidad_educativa = false;
	let integrante_comunidad_cientifica = false;
	let funcionario_publico = false;

</script>

<svelte:head>
	{#if home}
		<title>¿Qué pasa, Riachuelo?</title>
	{/if}
	{#if first_time}
		<title>Ingreso por primera vez</title>
	{/if}
</svelte:head>

<style>
	:global(html, body, #svelte, main, .container){
		height: 100%;
	}
	:global(.container, .botonera){
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	:global(.botonera button, .botonera a){
		margin-bottom: 1em;
		width: 25em;
		height: 4em;
		justify-content: center;
		display: flex;
	}

	.c-h1{
		font-size: 6.2rem;
	}

	.c-h2{
		font-size: 3.4rem;
	}

	.info-home{
		border-left: 4px solid #c1bcbc;
    	padding-left: 10px;
	}

	.info-no-home{
		display: flex;
	}

	.info-no-home div{
		width: 35em;
		padding-right: 5em;
	}
	
	.info-home .c-h3{
		margin: 0;
	}

	.ingreso{
		border: 1px solid gray;
	}

	.ingreso .text{
		top: -15px;
		position: relative;
		left: 15px;
		background-color: white;
		padding: 11px;
		font-size: 18px;
		font-weight: bold;
	}

	.ingreso .botonera{
		margin: 4em;
	}

</style>
  
<div class='container'>
	{#if home}
		<img src='/images/Logo QPR_1.png' alt='logo QPR' />
	
		<div class="botonera">
			<Button 
				skin="primary"
				on:click={()=>{
					home=false;
					first_time=true;
				}}
			>
				Ingreso por primera vez
			</Button>
			<Button 
				skin="secondary uppercase"
				href='https://quepasa.mapseed.org'
			>
				Ingreso al mapa
			</Button>
		</div>
	{/if}

	{#if first_time}
		<div class='ingreso'>
			<span class='text'>Ingreso como</span>
			<div class="botonera">
				<Button 
					skin="primary"
					on:click={()=>{
						first_time=false;
						vecino_cuenca_matanza_riachuelo = true;
					}}
				>
					Vecino de la cuenca Matanza-Riachuelo
				</Button>
				<Button 
					skin="primary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_educativa = true;
					}}
				>
					Integrante de la comunidad educativa
				</Button>
				<Button  
					skin="primary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_cientifica = true;
					}}
				>
					Integrante de la Comunidad Cientifica
				</Button>
				<Button  
					skin="primary"
					on:click={()=>{
						first_time=false;
						funcionario_publico = true;
					}}
				>
					Funcionario publico
				</Button>
			</div>
		</div>
	{/if}

	{#if vecino_cuenca_matanza_riachuelo}
		<h1 class='c-h2'>Vecino de la cuenca Matanza-Riachuelo</h1>
		<div class='info-no-home'>
			<div>
				<h4 class='c-h4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
				</h4>
			</div>
			<img src="https://via.placeholder.com/150" alt="p">
		</div>
		<div class="botonera">
			<Button 
				skin="primary"
				href='https://quepasa.mapseed.org'
			>
				Ingreso al mapa
			</Button>
		</div>
	{/if}

	{#if integrante_comunidad_educativa}
		<h1 class='c-h2'>Integrante de la comunidad educativa</h1>
		<div class='info-no-home'>
			<div>
				<h4 class='c-h4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
				</h4>
			</div>
			<img src="https://via.placeholder.com/150" alt="p">
		</div>
		<div class="botonera">
			<Button 
				skin="primary"
				href='https://quepasa.mapseed.org'
			>
				Ingreso al mapa
			</Button>
		</div>
	{/if}

	{#if integrante_comunidad_cientifica}
		<h1 class='c-h2'>Integrante de la comunidad cientifica</h1>
		<div class='info-no-home'>
			<div>
				<h4 class='c-h4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
				</h4>
			</div>
			<img src="https://via.placeholder.com/150" alt="p">
		</div>
		<div class="botonera">
			<Button 
				skin="primary"
				href='https://quepasa.mapseed.org'
			>
				Ingreso al mapa
			</Button>
		</div>
	{/if}

	{#if funcionario_publico}
		<h1 class='c-h2'>Funcionario publico</h1>
		<div class='info-no-home'>
			<div>
				<h4 class='c-h4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
				</h4>
			</div>
			<img src="https://via.placeholder.com/150" alt="p">
		</div>
		<div class="botonera">
			<Button 
				skin="primary"
				href='https://quepasa.mapseed.org'
			>
				Ingreso al mapa
			</Button>
		</div>
	{/if}

</div>
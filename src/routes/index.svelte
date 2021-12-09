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
		justify-content: center;
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

	.main-logo{
		margin-top: 4em;
		margin-bottom: 70px;
	}
	
	.ingreso{
		background-color: #ffffff;
		padding: 18px;
		padding-top: 22px;
		height: 460px;
		width: 440px;
	}

	.title{
		font-size: 18px;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		margin-top: 35px;
		margin-bottom: 25px;
	}

	.botonera{
		margin: 4em;
		margin-top: 1em;
	}
	
	.card-button-container{
		margin-top: 0;
	}
	
	.gradient-background{
		background: rgb(161,205,231);
		background: linear-gradient(153deg, rgba(161,205,231,1) 0%, rgba(162,186,145,1) 48%, rgba(239,204,90,1) 100%);
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.logo-container{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 30px;
		border-bottom: 2px solid #aeadb3;
	}
	
	.card-logo{
	width: 160px;
	align-self: center;
	
	}

</style>
  
<div class='container'>
	{#if home}
		<img class='main-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
	
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
	<div class="gradient-background">
		<div class='ingreso'>
			<div class='logo-container'>
				<img class='card-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
			</div>
			<p class='title'>Ingreso como</p>
			<div class="botonera card-button-container">
				<Button 
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						vecino_cuenca_matanza_riachuelo = true;
					}}
				>
					Vecino de la cuenca Matanza-Riachuelo
				</Button>
				<Button 
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_educativa = true;
					}}
				>
					Integrante de la comunidad educativa
				</Button>
				<Button  
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_cientifica = true;
					}}
				>
					Integrante de la Comunidad Cientifica
				</Button>
				<Button  
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						funcionario_publico = true;
					}}
				>
					Funcionario publico
				</Button>
			</div>
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
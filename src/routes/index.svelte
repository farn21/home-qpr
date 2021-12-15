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
	
	:global(body.dark-mode) {
		background-color: #ffffff;
		color: #000000;
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

	.c-h2{
		font-size: 2.2rem;
		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		margin: 0;
	}
	.main-logo{
		margin-top: 4em;
		margin-bottom: 70px;
		max-width: 350px;
	}
	
	.ingreso{
		background-color: #ffffff;
		padding: 18px;
		padding-top: 22px;
		max-height: 460px;
		max-width: 440px;
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
		margin: 1em;
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
	
	.user-type-card{
		background-color: #ffffff;
		box-sizing: border-box;
		padding-top: 22px;
		padding-bottom: 22px;
		max-width: 760px;
	}
	
	.logo-container{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 30px;
		border-bottom: 1px solid #aeadb3;
	}
	
	.card-logo{
		width: 160px;
		align-self: center;
	}
	
	.card-header{
		background-color: transparent;
		padding: 0;
		margin-bottom: 10px;
	}
	.card-header-title{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: transparent;
		padding: 0;
	}
	
	.card-body{
		border: 1px solid #D9D9D9;
		border-radius: 10px;
		margin-top: 15px;
	}
	
	.icon-container{
	display: inline-block;
	}
	
	.card-icon{
	margin: 15px;
	margin-left: 0;
	width: 50px;
	}
	
	.regular-text{
		font-family: 'Montserrat', sans-serif;
		font-size: 11px;
		padding-bottom: 10px;
	}
	
	.bold-text{
		font-family: 'Montserrat', sans-serif;
		font-size: 11px;
		font-weight: 700;
	}
	
	@media (min-width: 320px) {
		.user-type-card, .ingreso{width: 90%;}
		.user-type-card{
		margin-top: 30px;
		padding: 10px;
		}
		.science-card{margin-top: 50px;} 
		.gradient-background{
			overflow-y: scroll;
		}
		.main-logo{width: 70%;}
		.card-icon{width: 30px;}
		.c-h2{
		font-size:1.8rem;
		margin-left: 10px;
		}
		:global(.botonera button, .botonera a){
		width: 21em;
	}
	}
	@media (min-width: 480px) {
		.user-type-card, .ingreso{
		width: 80%;
		}
		
		.user-type-card{margin-top: 120px}
		.gradient-background{
			overflow-y: scroll;
		}
		
		.main-logo{width: 60%;}
		
		.science-card{margin-top: 160px;}
	}
	
	@media (min-width:768px) {
	.user-type-card{
		padding: 45px;
		margin-top: 100px;
		}
	.gradient-background{
		overflow-y: scroll;
	}
	
	.science-card{margin-top: 200px;}
	}
	
	@media (min-width:1024px){
		.gradient-background{
			overflow: hidden;
		padding: 0;
		}
		
		.user-type-card{margin-top: 40px}
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
					Habitante u organización de la Cuenca
				</Button>
				<Button 
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_educativa = true;
					}}
				>
					Comunidad educativa
				</Button>
				<Button  
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						integrante_comunidad_cientifica = true;
					}}
				>
					Comunidad científica
				</Button>
				<Button  
					skin="tertiary"
					on:click={()=>{
						first_time=false;
						funcionario_publico = true;
					}}
				>
					Gobierno - Agente de Gobierno
				</Button>
			</div>
		</div>
		</div>
	{/if}

	{#if vecino_cuenca_matanza_riachuelo}
		<div class="gradient-background">
			<div class='user-type-card'>
				<div class='logo-container'>
						<img class='card-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
				</div>
				<div class='card-header'>	
					<div class='card-header-title'>	
						<div class='icon-container'>
							<img class='card-icon' src='/icons/Asset_community.png' alt='ícono habitante' />
						</div>
						<h1 class='c-h2'>Habitante u organización de la Cuenca</h1>
					</div>
				</div>
				<p class='bold-text'>Querés mejorar / transformar la cuenca para el beneficio de todos/para vivir en espacio/barrios más saludables e inclusivos.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SiFAP.</p>
					<p class='regular-text'>· Podés compartir tu experiencia sobre calidad de agua, procesos de relocalizaciones de familias y actividades de conservación de áreas naturales.</p>
					<p class='regular-text'>· Podés conocer experiencias participativas para conocer y transformar la cuenca</p>
					</div>
			</div>
			<div class="botonera">
				<Button 
				class='mobile-button'
					skin="secondary-white"
					href='https://quepasa.mapseed.org'
				>
					Ingreso al mapa
				</Button>
			</div>
		</div>
	{/if}

	{#if integrante_comunidad_educativa}
		<div class="gradient-background">
			<div class='user-type-card education-card'>
				<div class='logo-container'>
						<img class='card-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
				</div>
				<div class='card-header'>	
					<div class='card-header-title'>	
						<div class='icon-container'>
							<img class='card-icon' src='/icons/Asset_education.png' alt='ícono comunidad educativa' />
						</div>
						<h1 class='c-h2'>Comunidad educativa</h1>
					</div>
				</div>
				<p class='bold-text'>Querés concientizar sobre la importancia de cuidar el medio ambiente y llevar adelante acciones pedagógicas para valorar los recursos bio-culturales de la cuenca.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SiFAP.</p>
					<p class='regular-text'>· Podés poner en práctica algunos principios de la Ley de Educación Ambiental como la participación y formación ciudadana y el cuidado del patrimonio natural y cultural.</p>
					<p class='regular-text'>· Podés organizar salidas didácticas y contribuir a generar datos sobre estos temas.</p>
					</div>
			</div>
			<div class="botonera">
				<Button 
				class='mobile-button'
					skin="secondary-white"
					href='https://quepasa.mapseed.org'
				>
					Ingreso al mapa
				</Button>
			</div>
		</div>
	{/if}

	{#if integrante_comunidad_cientifica}
		<div class="gradient-background">
			<div class='user-type-card science-card'>
				<div class='logo-container'>
						<img class='card-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
				</div>
				<div class='card-header'>	
					<div class='card-header-title'>	
						<div class='icon-container'>
							<img class='card-icon' src='/icons/Asset_science.png' alt='ícono comunidad científica' />
						</div>
						<h1 class='c-h2'>Comunidad científica</h1>
					</div>
				</div>
				<p class='bold-text'>Investigás sobre temáticas socio-ambientales y querés que tu trabajo tenga impacto en el bien común. Tenés experiencia en investigación ciudadana/comunitaria/participativa o te gustaría tenerla.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SiFAP.</p>
					<p class='regular-text'>· Podés encontrar información generada por ciudadanos sobre hábitat, vivienda, calidad del agua, procesos de relocalización de familias y actividades de conservación de áreas naturales.</p>
					<p class='regular-text'>· Podés conocer experiencias de producción de conocimiento participativo, comunitario, ciudadano y encontrar herramientas para poder iniciar un nuevo proyecto de ciencia social ciudadana.</p>
					</div>
			</div>
			<div class="botonera">
				<Button 
				class='mobile-button'
					skin="secondary-white"
					href='https://quepasa.mapseed.org'
				>
					Ingreso al mapa
				</Button>
			</div>
		</div>
	{/if}

	{#if funcionario_publico}
		<div class="gradient-background">
			<div class='user-type-card government-card'>
				<div class='logo-container'>
						<img class='card-logo' src='/images/Logo QPR_1.png' alt='logo QPR' />
				</div>
				<div class='card-header'>	
					<div class='card-header-title'>	
						<div class='icon-container'>
							<img class='card-icon' src='/icons/Asset_government.png' alt='ícono agente de gobierno' />
						</div>
						<h1 class='c-h2'>Gobierno - Agente de Gobierno</h1>
					</div>
				</div>
				<p class='bold-text'>Trabajás en el gobierno municipal, provincial o nacional y querés contribuir con acciones transformadoras para la justicia ambiental de la cuenca.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SiFAP.</p>
					<p class='regular-text'>· Podés conocer qué piensa la ciudadanía sobre hábitat, vivienda, calidad de agua, procesos de relocalización de familias y actividades de conservación de áreas naturales</p>
					<p class='regular-text'>· Podés compartir información pública de tu área.</p>
					</div>
			</div>
			<div class="botonera">
				<Button 
				class='mobile-button'
					skin="secondary-white"
					href='https://quepasa.mapseed.org'
				>
					Ingreso al mapa
				</Button>
			</div>
		</div>
	{/if}
</div>
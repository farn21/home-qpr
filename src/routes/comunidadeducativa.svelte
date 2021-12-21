<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>Ingreso por primera vez</title>
</svelte:head>

<div class='container'>

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

</div>

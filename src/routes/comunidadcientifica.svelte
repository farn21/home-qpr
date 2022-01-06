<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>Ingreso por primera vez</title>
</svelte:head>

<div class='container'>

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
				    <p class='bold-text'>Investigás sobre temáticas socio-ambientales y querés que tu trabajo tenga impacto en el bien común. Te interesa la investigación participativa.</p>
				    <div class='card-body'>
					      <p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización y reurbanización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SINIA.</p>
					      <p class='regular-text'>· Podés encontrar información generada por la comunidad sobre hábitat, calidad del agua, procesos de relocalizaciones y reurbanizaciones, y actividades de conservación de áreas naturales.</p>
					      <p class='regular-text'>· Podés conocer experiencias de producción de conocimiento participativo y encontrar herramientas para poder iniciar un nuevo proyecto de ciencia social ciudadana.</p>
					  </div>
			</div>
			<div class="botonera">
				  <Button
				      class='mobile-button'
					    skin="secondary-white"
					    href='https://mapaqpr.farn.org.ar'
				  >
					    Ingreso al mapa
				  </Button>
			</div>
		</div>

</div>

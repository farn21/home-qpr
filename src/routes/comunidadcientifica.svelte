<script>
  import Button from '$lib/jui-components/Button.svelte';
  import Navbar from '$lib/jui-components/Navbar.svelte'
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>Ingreso por primera vez</title>
</svelte:head>

<div class="main">
	<Navbar skin="gray-50">
		<div class="navbar-container">
			<div class='icon-container nav-icon-container' on:click={()=>{goto('/primeravez')}}>
				<img class='card-icon nav-icon' src='/icons/Asset_back.png' alt='Volver' />
			</div>
			<p class="title navbar-title">Perfil</p>
		</div>
	</Navbar>

	<div class='container'>
	
			<div class="gradient-background">
				  <div class='ingreso'>
						<div class='card-header'>	
							  <div class='card-header-title'>	
									<div class='icon-container'>
										  <img class='card-icon' src='/icons/Asset_science.png' alt='ícono comunidad científica' />
									</div>
									<h1 class='c-h2'>Comunidad científica</h1>
							  </div>
						</div>
						<p class='bold-text'>Investigas sobre temáticas socio-ambientales y querés que tu trabajo tenga impacto en el bien común. te interesa la investigación participativa.</p>
						<div class='card-body'>
							<div class="item-container">
								<div class="circulo"></div>
								<p class='regular-text'>Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización y reurbanización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SINIA.</p>
							</div>
							<div class="item-container">
								<div class="circulo"></div>
								<p class='regular-text'>Podés encontrar información generada por la comunidad sobre hábitat, calidad del agua, procesos de relocalizaciónes y reurbanizaciones, y actividades de conservación de áreas naturales.</p>
							</div>
							<div class="item-container">
								<div class="circulo"></div>
								<p class='regular-text'>Podés conocer experiencias de producción de conocimiento participativo y encontrar herramientas para poder iniciar un nuevo proyecto de ciencia social ciudadana.</p>
							</div>
						  </div>
				</div>
			</div>
			<div class="botonera">
				  <Button
					  class='mobile-button'
						skin="secondary"
						style="color: #f0a300; border-color:#f0a300; text-transform: none"
						href='https://mapaqpr.farn.org.ar'
				  >
						Ingreso al mapa
				  </Button>
			</div>
	
	</div>
</div>


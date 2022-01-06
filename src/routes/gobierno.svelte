<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>Ingreso por primera vez</title>
</svelte:head>

<div class='container'>
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
						<h1 class='c-h2'>Comunidad de política pública</h1>
					</div>
				</div>
				<p class='bold-text'>Trabajás o contribuís con la toma de decisiones en un área del Estado de los niveles  municipal, provincial o nacional y querés influir con acciones transformadoras para la justicia ambiental de la cuenca.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización y reurbanización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SINIA.</p>
					<p class='regular-text'>· Podés conocer qué piensa la ciudadanía sobre hábitat, calidad de agua, procesos de relocalización  y reurbanización  y actividades de conservación de áreas naturales.</p>
					<p class='regular-text'>· Podés compartir información pública de tu área.</p>
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

<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
		<title>Ingreso por primera vez</title>
</svelte:head>

<div class='container'>

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
						<h1 class='c-h2'>Habitante u organización de la cuenca</h1>
					</div>
				</div>
				<p class='bold-text'>Querés transformar la cuenca para el beneficio de todos, para vivir en espacios y barrios más saludables e inclusivos.</p>
				<div class='card-body'>
					<p class='regular-text'>· Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización y reurbanización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SINIA.</p>
					<p class='regular-text'>· Podés compartir tu experiencia sobre calidad de agua, procesos de relocalización y reurbanización  y actividades de conservación de áreas naturales.</p>
					<p class='regular-text'>· Podés conocer experiencias participativas de la cuenca.</p>
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

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
								<img class='card-icon' src='/icons/Asset_community.png' alt='ícono habitante' />
							</div>
							<h1 class='c-h3'>Habitante u organización de la cuenca</h1>
						</div>
					</div>
					<p class='bold-text'>Querés transformar la cuenca para el beneficio de todos, para vivir en espacios y barrios más saludables e inclusivos.</p>
					<div class='card-body'>
						<div class="item-container">
							<div class="circulo"></div>
							<p class='regular-text'>Podés encontrar información pública sobre procesos de protección de áreas naturales, calidad de agua y procesos de relocalización de los barrios, villas y asentamientos producida por ACUMAR, RENABAP, ADA y SiFAP.
							</p>
						</div>
						<div class="item-container">
							<div class="circulo"></div>
							<p class='regular-text'>Podés reportar sobre calidad de agua, procesos de relocalizaciones de familias y actividades de conservación de áreas naturales.
							</p>
						</div>
						<div class="item-container">
							<div class="circulo"></div>
							<p class='regular-text'>Podés conocer más sobre el patrimonio biológico y cultural de la CMR.</p>
						</div>
						<div class="item-container">
							<div class="circulo"></div>
							<p class='regular-text'>Podés conocer experiencias participativas para conocer y transformar la cuenca.</p>
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
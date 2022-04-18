<script>
  import Navbar from '$lib/jui-components/Navbar.svelte'
  import { goto } from '$app/navigation';
</script>

<svelte:head>
    <title>Ingreso por primera vez</title>
</svelte:head>

<Navbar skin="gray-50">
	<div class="navbar-container">
		<div class='icon-container nav-icon-container' on:click={()=>{goto('/')}}>
			<img class='card-icon nav-icon' src='/icons/Asset_back.png' alt='Volver' />
		</div>
		<p class="title navbar-title">Perfil</p>
	</div>
</Navbar>

<div class='container'>

	  <div class="gradient-background">
		    <div class='ingreso'>
			      <h3 class='title'>Elige un perfil</h3>
			      <div>
					<div class='card-header' on:click={()=>{goto('/vecinocuenca')}}>
						<div class='card-header-title'>
							<div class='icon-container'>
								<img class='card-icon' src='/icons/Asset_community.png' alt='ícono habitante' />
							</div>
							<h3 class='c-h4'>Habitante u organización de la cuenca</h3>
							<div class='icon-container next'>
								<img class='card-icon icon-next' src='/icons/Asset_next.png' alt='ícono habitante' />
							</div>
						</div>
					</div>
					<div class='card-header' on:click={()=>{goto('/comunidadeducativa')}}>
						<div class='card-header-title'>
							<div class='icon-container'>
								<img class='card-icon' src='/icons/Asset_education.png' alt='ícono habitante' />
							</div>
							<h3 class='c-h4'>Comunidad educativa</h3>
							<div class='icon-container next'>
								<img class='card-icon icon-next' src='/icons/Asset_next.png' alt='ícono habitante' />
							</div>
						</div>
					</div>
					<div class='card-header' on:click={()=>{goto('/comunidadcientifica')}}>
						<div class='card-header-title'>
							<div class='icon-container'>
								<img class='card-icon' src='/icons/Asset_science.png' alt='ícono habitante' />
							</div>
							<h3 class='c-h4'>Comunidad científica</h3>
							<div class='icon-container next'>
								<img class='card-icon icon-next' src='/icons/Asset_next.png' alt='ícono habitante' />
							</div>
						</div>
					</div>
					<div class='card-header' on:click={()=>{goto('/gobierno')}}>
						<div class='card-header-title'>
							<div class='icon-container'>
								<img class='card-icon' src='/icons/Asset_government.png' alt='ícono habitante' />
							</div>
							<h3 class='c-h4'>Comunidad de política pública</h3>
							<div class='icon-container next'>
								<img class='card-icon icon-next' src='/icons/Asset_next.png' alt='ícono habitante' />
							</div>
						</div>
					</div>
			      </div>
		    </div>
		</div>

</div>

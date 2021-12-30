<script>
  import Button from '$lib/jui-components/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
    <title>Ingreso por primera vez</title>
</svelte:head>

<div class='container'>

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
                             goto('/vecinocuenca')
					          }}
				        >
					          Habitante u organización de la Cuenca
				        </Button>
				        <Button
					          skin="tertiary"
					          on:click={()=>{
                             goto('/comunidadeducativa')
					          }}
				        >
					          Comunidad educativa
				        </Button>
				        <Button
					          skin="tertiary"
					          on:click={()=>{
                             goto('/comunidadcientifica')
					          }}
				        >
					          Comunidad científica
				        </Button>
				        <Button
					          skin="tertiary"
					          on:click={()=>{
                             goto('/gobierno')
					          }}
				        >
					          Gobierno
				        </Button>
			      </div>
		    </div>
		</div>

</div>

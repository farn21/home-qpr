<script lang="ts">
	import {
		MDBContainer, 
		MDBRow, 
		MDBCol,
		MDBBtn
	} from "mdbsvelte";

</script>

<svelte:head>
	<title>Primera vez</title>
</svelte:head>

<style>
	:global(html, body, #svelte, main, .container){
		height: 100%;
	}
	:global(.container){
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
</style>

<MDBContainer >
    <MDBRow center>
        <MDBCol size=8>
            <div>
                <span>Ingreso como</span>
                <MDBBtn color="primary" size="lg">
                    Ingreso por primera vez
                </MDBBtn>
                <MDBBtn color="primary" size="lg">
                    Ingreso al mapa
                </MDBBtn>
            </div>
        </MDBCol>
    </MDBRow>
</MDBContainer>
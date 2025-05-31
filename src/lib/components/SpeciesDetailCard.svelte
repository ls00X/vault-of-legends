<script>
  export let species;
  import { page } from '$app/stores';
  $: fromCharacter = $page.url.searchParams.get('fromCharacter');
</script>

<div class="card bg-dark text-light p-4">
  <div class="row g-4 align-items-start">
    
    <!-- Linke Seite: Name + Beschreibung -->
    <div class="col-md-8">
      <h2 class="card-title">{species.name}</h2>
      <p class="card-text">{species.description}</p>
    </div>

    <!-- Rechte Seite: Bild -->
    <div class="col-md-4 text-end">
        <img src={species.image} alt={species.name}
          class="img-fluid rounded shadow" style="max-height: 300px;" />
    </div>
  </div>

  <!-- Traits unterhalb -->
    <div class="mt-4">
      <h5>Traits</h5>
      <ul class="list-group list-group-flush">
        {#each species.traits as trait}
          <li class="list-group-item bg-dark text-light border-light">{trait}</li>
        {/each}
      </ul>
    </div>
<div class="mt-4">
  {#if fromCharacter}
    <a href={`/characters/${fromCharacter}`} class="btn-light"> Zurück zum Charakter</a>
  {:else}
    <a href="/species" class="btn-light"> Zurück zur Übersicht</a>
  {/if}
</div>

 
   

     
</div>

 

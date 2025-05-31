<script>
  export let cls;
  import { page } from '$app/stores';
  $: fromCharacter = $page.url.searchParams.get('fromCharacter');
</script>

<div class="card bg-dark text-light p-4">
  <!-- Oberer Bereich: Bild und Beschreibung nebeneinander -->
  <div class="row g-4 align-items-start">
    <!-- Linke Spalte: Titel + Beschreibung -->
    <div class="col-md-8">
      <h2 class="card-title">{cls.name}</h2>
      <p class="card-text">{cls.description}</p>
    </div>

    <!-- Rechte Spalte: Bild -->
    {#if cls.image}
      <div class="col-md-4 text-end">
        <img
          src={cls.image}
          alt={cls.name}
          class="img-fluid rounded shadow class-image" style="max-height: 300px"/>
      </div>
    {/if}
  </div>

  <!-- Stärke und Schwächen unten drunter -->
  <div class="mt-4">
    <h5>Stärken</h5>
    <ul>
      {#each cls.strengths as strength}
        <li>{strength}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-4">
    <h5>Schwächen</h5>
    <ul>
      {#each cls.weaknesses as weakness}
        <li>{weakness}</li>
      {/each}
    </ul>
  </div>


    <div class="mt-4">
  {#if fromCharacter}
    <a href={`/characters/${fromCharacter}`} class="btn-light">Zurück zum Charakter</a>
  {:else}
    <a href="/classes" class="btn-light">Zurück zur Übersicht</a>
  {/if}
</div>
</div>

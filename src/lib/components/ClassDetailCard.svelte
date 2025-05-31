<script>
  export let cls;
  import { page } from '$app/stores';
  $: fromCharacter = $page.url.searchParams.get('fromCharacter');
</script>

<div class="card bg-dark text-light p-4">
  <h2 class="card-title">{cls.name}</h2>
  <p class="card-text">{cls.description}</p>

  
    <h5 class="mt-4">Stärken</h5>
    <ul>
      {#each cls.strengths as strength}
        <li>{strength}</li>
      {/each}
    </ul>
  

    <h5 class="mt-4">Schwächen</h5>
    <ul>
      {#each cls.weaknesses as weakness}
        <li>{weakness}</li>
      {/each}
    </ul>

    <div class="mt-4">
  {#if fromCharacter}
    <a href={`/characters/${fromCharacter}`} class="btn-light">Zurück zum Charakter</a>
  {:else}
    <a href="/classes" class="btn-light">Zurück zur Übersicht</a>
  {/if}
</div>
</div>

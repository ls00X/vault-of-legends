<script>
  import { page } from '$app/stores';
  import { get } from 'svelte/store';

  const { classData } = $props();

  // Get the 'fromCharacter' query param from the current page URL
  function fromCharacter() {
    const url = get(page).url;
    return new URLSearchParams(url.search).get('fromCharacter');
  }
</script>


<div class="card bg-dark text-light p-4">
  <div class="row g-4 align-items-start">
    <div class="col-md-8">
      <h2 class="card-title">{classData.name}</h2>
      <p class="card-text">{classData.description}</p>
    </div>

    {#if classData.image}
      <div class="col-md-4 text-end">
        <img
          src={classData.image}
          alt={classData.name}
          class="img-fluid rounded shadow class-image"
          style="max-height: 300px"
        />
      </div>
    {/if}
  </div>

  <div class="mt-4">
    <h5>Stärken</h5>
    <ul>
      {#each classData.strengths as strength}
        <li>{strength}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-4">
    <h5>Schwächen</h5>
    <ul>
      {#each classData.weaknesses as weakness}
        <li>{weakness}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-4">
    {#if fromCharacter()}
      <a href={`/characters/${fromCharacter()}`} class="btn-light">Zurück zum Charakter</a>
    {:else}
      <a href="/classes" class="btn-light">Zurück zur Übersicht</a>
    {/if}
  </div>
</div>
<script>
  export let character;
</script>

<div class="card bg-dark text-light h-100">
  {#if character.imageUrl}
    <img
      src={character.imageUrl}
      alt={character.name}
      class="card-img-top"
    />
  {:else}
    <img
      src="/Platzhalter.png"
      alt="Platzhalter"
      class="card-img-top"
    />
  {/if}
    <!-- Inhalt -->
  <div class="card-body d-flex flex-column justify-content-between">
    <!-- Name + Infos -->
    <div class="mb-3 flex-grow-1 d-flex flex-column">
      <h5 class="card-title character-name-fixed">{character.name}</h5>
      <p class="card-text mb-0">
        Level: {character.level}<br />
        Spezies: {character.speciesName}<br />
        Klasse: {character.className}
      </p>
    </div>

    <!-- Button unten -->
    <div class="mt-auto">
      <a href={`/characters/${character._id}`} class="btn btn-standard w-100">Details</a>
    </div>
  </div>
</div>
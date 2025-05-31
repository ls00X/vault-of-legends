<div class="card bg-dark text-light p-4">
  <div class="row g-4 align-items-start">
    <!-- Bild -->
    <div class="col-md-4">
      {#if character.imageUrl}
        <img src={character.imageUrl} alt={character.name} class="img-fluid rounded" />
      {/if}
    </div>

    <!-- Basisdaten zweispaltig -->
    <div class="col-md-8">
      <h2 class="card-title">{character.name}</h2>

      <div class="row mt-3">
        <div class="col-md-6">
          <p><strong>Level:</strong> {character.level}</p>
          <p><strong>Klasse:</strong>
  <a href={`/classes/${character.classId}?fromCharacter=${character._id}`} class="btn-light">
  {character.className}
</a>
</p>

<p><strong>Spezies:</strong>
  <a href={`/species/${character.speciesId}?fromCharacter=${character._id}`} class="btn-light">
  {character.speciesName}
</a>
   
</p>
        </div>
        <div class="col-md-6">
          <p><strong>Rüstungsklasse:</strong> {character.armorClass}</p>
          <p><strong>Trefferpunkte:</strong> {character.hitPoints}</p>
          <p><strong>Proficiency Bonus:</strong> {character.proficiencyBonus}</p>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-4" />

  <h4>Fähigkeiten</h4>
  <div class="row">
    {#each Object.entries(character.abilities) as [key, ability]}
      <div class="col-md-4">
        <p><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {ability.score} (Mod: {ability.mod})</p>
      </div>
    {/each}
  </div>

  <hr class="my-4" />
  <h4>Hintergrund</h4>
  <p>{character.background}</p>

  <hr class="my-4" />

  <div class="d-flex gap-2">
    <a href="/characters" class="btn-light">Zurück</a>
    <a href={`/characters/${character._id}/edit`} class="btn-standard">Bearbeiten</a>
    <form method="POST" action="?/delete" on:submit={handleDelete}>
      <button type="submit" class="btn-löschen">Löschen</button>
    </form>
  </div>
</div>

<script>
  export let character;

  function handleDelete(event) {
    const confirmed = confirm('Diesen Charakter wirklich löschen?');
    if (!confirmed) {
      event.preventDefault();
    }
  }
</script>

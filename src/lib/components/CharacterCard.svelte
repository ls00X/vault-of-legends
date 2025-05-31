<script>
  export let character;
</script>

<div class="card bg-dark text-light h-100">
  <img src={character.imageUrl} class="card-img-top" alt="Bild von {character.name}" />
  <div class="card-body">
    <h5 class="card-title">{character.name}</h5>
    <p class="card-text">
      Klasse: {character.className}<br />
      Spezies: {character.speciesName}<br />
      Level: {character.level}
    </p>
    <a href={`/characters/${character._id}`} class="btn-standard">Details</a>
  </div>
</div>


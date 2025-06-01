<script>
    import CharacterCard from '$lib/components/CharacterCard.svelte';
    const { data } = $props();
</script>

<h1>Alle Characters</h1>

<div class="mt-4 mb-4">
<a href="/characters/new" class="btn-standard"> Neuen Charakter erstellen</a>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {#each data.characterList as c}
    <div class="col">
      <CharacterCard character={c} />
    </div>
  {/each}
</div>

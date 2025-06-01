<script>
  import SpeciesCard from '$lib/components/SpeciesCard.svelte';
  const { data } = $props();
</script>

<h1>Species</h1>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {#each data.speciesList as s}
    <div class="col">
      <SpeciesCard species={s} />
    </div>
  {/each}
</div>
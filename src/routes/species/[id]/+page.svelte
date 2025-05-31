<script>
  import SpeciesDetailCard from '$lib/components/SpeciesDetailCard.svelte';
  export let data;
</script>

<SpeciesDetailCard species={data.speciesData} />

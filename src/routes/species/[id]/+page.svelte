<script>
  import SpeciesDetailCard from '$lib/components/SpeciesDetailCard.svelte';
  const { data } = $props();
</script>

<SpeciesDetailCard species={data.speciesData} />
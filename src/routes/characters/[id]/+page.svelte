<script>
  import CharacterDetailCard from '$lib/components/CharacterDetailCard.svelte';
  const { data } = $props();
</script>

<CharacterDetailCard character={data.character} />

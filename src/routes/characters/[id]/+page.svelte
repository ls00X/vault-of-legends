<script>
  import CharacterDetailCard from '$lib/components/CharacterDetailCard.svelte';
  export let data;
</script>

<CharacterDetailCard character={data.character} />

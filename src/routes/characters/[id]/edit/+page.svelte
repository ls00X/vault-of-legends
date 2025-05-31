<script>
  import CharacterForm from '$lib/components/CharacterForm.svelte';
  export let data;
</script>

<h1>{data.character.name} bearbeiten</h1>
<CharacterForm
  character={data.character}
  classList={data.classList}
  speciesList={data.speciesList}
  submitLabel="Speichern"
/>

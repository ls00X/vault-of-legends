<script>
  import CharacterForm from '$lib/components/CharacterForm.svelte';
  export let data;
</script>

<h1>Neuen Charakter erstellen</h1>
<CharacterForm
  classList={data.classList}
  speciesList={data.speciesList}
  submitLabel="Erstellen"
/>

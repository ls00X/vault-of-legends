<script>
  import ClassDetailCard from '$lib/components/ClassDetailCard.svelte';
  const { data } = $props();
</script>

<ClassDetailCard classData={data.classData} />

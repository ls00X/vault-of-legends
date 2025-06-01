<script>
  import ClassCard from '$lib/components/ClassCard.svelte';
  const { data } = $props();
</script>

<h1>Classes</h1>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {#each data.classList as cls}
    <div class="col">
      <ClassCard classData={cls} />
    </div>
  {/each}
</div>

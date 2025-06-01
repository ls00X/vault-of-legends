<script>
  const { classData } = $props();
</script>

<div class="card bg-dark text-light h-100">
  {#if classData.image}
    <img src={classData.image} class="card-img-top" alt={`Bild von ${classData.name}`} />
  {/if}
  <div class="card-body d-flex justify-content-between align-items-center px-3 py-2">
    <h5 class="card-title mb-0">{classData.name}</h5>
    <a class="btn-standard" href={`/classes/${classData._id}`}>Details</a>
  </div>
</div>

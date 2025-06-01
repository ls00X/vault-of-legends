<script>
  const { species } = $props();
</script>

<div class="card bg-dark text-light h-100">
  {#if species.image}
    <img src={species.image} class="card-img-top" alt={`Bild von ${species.name}`} />
  {/if}
  <div class="card-body d-flex justify-content-between align-items-center px-3 py-2">
    <h5 class="card-title mb-0">{species.name}</h5>
    <a class="btn-standard" href={`/species/${species._id}`}>Details</a>
  </div>
</div>

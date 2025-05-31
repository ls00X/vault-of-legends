<script>
  export let classData;
</script>

<div class="card bg-dark text-light h-100">
     {#if classData.image}
    <img src={classData.image} class="card-img-top" alt="Bild von {classData.name}" />
  {/if}
  <div class="card-body">
    <h5 class="card-title">{classData.name}</h5>
    <p class="card-text">{classData.description}</p>
    <a href={`/classes/${classData._id}`} class="btn-standard">Details</a>
  </div>
</div>

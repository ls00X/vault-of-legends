<script>
  export let classData;
</script>

<div class="card bg-dark text-light h-100">
   
   <img src={classData.image} class="card-img-top" alt="Bild von {classData.name}" />
 
  <div class="card-body d-flex justify-content-between align-items-center px-3 py-2">
    <h5 class="card-title mb-0">{classData.name}</h5>
   <!--  <p class="card-text">{classData.description}</p> -->
    <a href={`/classes/${classData._id}`} class="btn-standard">Details</a>
  </div>
</div>

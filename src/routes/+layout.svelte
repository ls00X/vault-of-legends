<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="layout-wrapper text-light min-vh-100 d-flex flex-column">
  <Navbar />

  <main class="container my-4 flex-grow-1">
    <slot />
  </main>

 <footer class="footer text-center">
  <small>© 2025 Vault of Legends</small>
</footer>
</div>

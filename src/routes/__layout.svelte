<script>
  import "../app.css";
  import Navigation from "$lib/components/Navigation/index.svelte";
  import Footer from "$lib/components/Footer/index.svelte";
</script>

<Navigation />
<main
  class="grid justify-center w-full max-w-full min-h-screen p-3 overflow-hidden md:w-3/4 place-self-center"
>
  <slot />
</main>

<Footer />

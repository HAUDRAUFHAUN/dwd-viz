<script lang="ts" context="module">
  import type { LoadInput, LoadOutput } from "@sveltejs/kit";

  export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
    const res = await fetch("/warnings/sea/de-sea-warning");

    if (res.ok) return { props: { data: await res.text() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Hochsee Unwetterwarnungen 🌊 - dwd viz</title>
</svelte:head>
<section class="flex flex-col items-center mt-3 lg:mt-6 xl:mt-9">
  <img
    src="/favicon.png"
    alt="logo"
    width="720"
    height="720"
    class="w-32 h-32 p-2 mb-3 rounded-lg shadow-xl lg:mb-6 drop-shadow-lg lg:p-4"
  />

  <h1
    class="mb-2 text-xl text-center xl:mb-6 lg:text-2xl xl:text-3xl font-larrikin"
  >
    🌊 Hochsee Unwetterwarnungen 🇩🇪
  </h1>
  <br />
  <article class="w-5/6 font-mono">
    {@html data.toString()}
  </article>
</section>

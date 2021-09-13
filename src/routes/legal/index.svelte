<script>
  let externalPackages = [
    { url: "https://tabler-icons.io/", name: "Tabler Icons" },
    { url: "https://tailwindcss.com/", name: "tailwindcss" },
    { url: "https://kit.svelte.dev/", name: "SvelteKit" },
  ];

  let fonts = [
    {
      url: "https://fonts.google.com/specimen/Palette+Mosaic",
      name: "Palette Mosaic",
    },
    {
      url: "https://www.fontshare.com/fonts/sharpie",
      name: "Sharpie",
    },
    {
      url: "https://nomadfonts.com/larrikin",
      name: "Larrikin",
    },
  ];
</script>

<svelte:head>
  <title>legal - dwd viz</title>
</svelte:head>
<section class="flex flex-col items-center mt-3 lg:mt-6 xl:mt-9">
  <img
    src="/favicon.png"
    alt="logo"
    width="720"
    height="720"
    class="w-32 h-32 p-2 mb-3 rounded-lg shadow-xl lg:mb-6 drop-shadow-lg lg:p-4"
  />

  <h1 class="mb-3 text-xl text-center lg:text-2xl xl:text-3xl font-larrikin">
    🧑‍⚖️ legal
  </h1>
  <section class="font-mono font-medium text-justify text-gray-700 xl:text-lg">
    This site is built with:
    <ul class="list-disc list-inside">
      {#each externalPackages as pack}
        <li>
          <a href={pack.url} target="_blank" rel="noopener" class="underline">
            {pack.name}
          </a>
        </li>
      {/each}
    </ul>
    <br />
    It's using following external fonts:
    <ul class="list-disc list-inside">
      {#each fonts as font}
        <li>
          <a href={font.url} target="_blank" rel="noopener" class="underline">
            {font.name}
          </a>
        </li>
      {/each}
    </ul>
  </section>
</section>

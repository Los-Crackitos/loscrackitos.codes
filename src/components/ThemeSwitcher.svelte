<script>
  import Moon24 from 'carbon-icons-svelte/lib/Moon24';
  import Sun24 from 'carbon-icons-svelte/lib/Sun24';
  import { isDarkTheme } from '../stores';

  const toggleTheme = () => {
    isDarkTheme.update((currentTheme) => !currentTheme);
  };
</script>

<button
  class="my-3 transition-all duration-200 z-10 outline-none focus:outline-none"
  type="button"
  aria-label="Theme switcher"
  on:click="{toggleTheme}">
  {#if $isDarkTheme}
    <Moon24 class="fill-current text-white hover:text-pink" />
  {:else}
    <Sun24 class="fill-current text-white hover:text-pink" />
  {/if}
</button>

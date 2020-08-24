<script>
  import LanguageSelector from './LanguageSelector.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import { isDarkTheme } from '../stores';
</script>

<header class="flex justify-between items-start p-6">
  <h1 class="text-xl">Los Crackitos</h1>
  <div class="inline-flex">
    <LanguageSelector />
    <span class="border-l border{isDarkTheme ? '' : '-dark'}-blue m-3"></span>
    <ThemeSwitcher />
  </div>
</header>

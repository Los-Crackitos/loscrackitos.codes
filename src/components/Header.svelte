<script>
  import LanguageSelector from './LanguageSelector.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import { isDarkTheme } from '../stores';
</script>

<header class="flex justify-between items-start p-6">
  <div class="inline-flex">
    <h1>Los Crackitos</h1>
    <nav>
      <a href="#about" class="ml-6">About</a>
      <a href="#projects" class="ml-6">Projects</a>
    </nav>
  </div>
  <div class="inline-flex">
    <LanguageSelector />
    <span class="border-l border{isDarkTheme ? '' : '-dark'}-blue m-3"></span>
    <ThemeSwitcher />
  </div>
</header>

<script>
  import LanguageSelector from './LanguageSelector.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header class="flex justify-between items-center p-6 text-white">
  <div class="inline-flex">
    <h1 class="uppercase hidden sm:block ">Los Crackitos</h1>
    <nav>
      <a href="#about" class="ml-0 sm:ml-6 hover:text-pink">About</a>
      <a href="#projects" class="ml-6 hover:text-pink">Projects</a>
    </nav>
  </div>
  <div class="inline-flex">
    <LanguageSelector />
    <span class="border-l border-pink m-3"></span>
    <ThemeSwitcher />
  </div>
</header>

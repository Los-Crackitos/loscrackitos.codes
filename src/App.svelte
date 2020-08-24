<script>
  import { t } from 'svelte-i18n';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import { isDarkTheme } from './stores';
</script>

<main
  class="h-screen flex flex-col justify-between {$isDarkTheme ? 'bg-dark-blue text-blue' : 'bg-white text-dark-blue'}">
  <Header />
  <h1 class="text-center uppercase text-5xl font-hairline">{$t('hello')} Los Crackitos</h1>
  <Footer />
</main>

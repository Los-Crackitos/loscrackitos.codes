<script>
  import { t } from 'svelte-i18n';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import { isDarkTheme } from './stores';
</script>

<main class="{$isDarkTheme ? 'bg-dark-theme text-white' : 'bg-light-theme text-dark-green'}">
  <section class="h-screen flex flex-col justify-between ">
    <Header />
    <div class="h-full flex items-center justify-center">
      <h1 class="text-center uppercase text-5xl font-hairline">{$t('hello')} Los Crackitos</h1>
    </div>
  </section>
  <About />
  <Projects />
  <section class="h-16 flex flex-col justify-between">
    <Footer />
  </section>
</main>

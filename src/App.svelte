<script>
  import Home from './components/Home.svelte';
  import Footer from './components/Footer.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import { isDarkTheme } from './stores';
</script>

<main class="{$isDarkTheme ? 'bg-green text-white' : 'bg-white text-green'}">
  <Home />
  <About />
  <Projects />
  <section class="h-16 flex flex-col justify-between">
    <Footer />
  </section>
</main>

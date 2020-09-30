<script>
  import { t } from 'svelte-i18n';
  import Header from './Header.svelte';

  import { isDarkTheme } from '../stores';
</script>

<section
  class="h-screen flex flex-col justify-between bg-cover bg-center"
  style="background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/build/images/home_bg_{$isDarkTheme ? 'dark' : 'light'}-op.jpg')">
  <Header />
  <div class="flex flex-col items-center justify-center mx-10 text-white">
    <h1 class="flex text-center uppercase text-4xl md:text-5xl font-hairline mb-4">Los Crackitos</h1>
    <span class="flex text-base text-center">{$t('description')}</span>
  </div>
  <div class="py-24" style="background: linear-gradient(4deg, #e01d67 50%, rgba(0,0,0,0) 50.3%)"></div>
</section>

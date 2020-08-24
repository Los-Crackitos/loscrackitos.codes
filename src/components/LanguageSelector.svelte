<script>
  import { writable } from 'svelte/store';
  import { locale, locales } from 'svelte-i18n';
  import FlagFR from '../../public/images/flag-fr.svg';
  import FlagGB from '../../public/images/flag-gb.svg';
  import { isDarkTheme } from '../stores';

  const sortLocales = () => {
    const allLocales = [...[$locale], ...$locales];
    return allLocales.filter((item, index) => allLocales.indexOf(item) === index);
  };

  const orderedLocales = writable(sortLocales());

  const toggleLanguage = (newLocale) => {
    locale.set(newLocale);
    locale.subscribe(() => {});

    const localeSelector = document.getElementById('localeSelector');
    localeSelector.style.pointerEvents = 'none';
    setTimeout(() => {
      localeSelector.style.pointerEvents = 'auto';
    }, 200);

    orderedLocales.update(() => sortLocales());
  };
</script>

<style>
  div {
    width: 20px;
  }
  div:hover {
    width: 65px;
  }
</style>

<div id="localeSelector" class="flex overflow-hidden transition-all duration-200 z-10">
  <ul class="inline-flex items-center">
    {#each $orderedLocales as locale, index}
      <li
        on:click="{toggleLanguage(locale)}"
        class="{index === 0 ? 'pr-3' : 'pl-3'} border-r border{isDarkTheme ? '' : '-dark'}-blue cursor-pointer
        first:cursor-default">
        {#if locale === 'en-US'}
          <FlagGB height="20" class="rounded-full" />
        {:else}
          <FlagFR height="20" class="rounded-full" />
        {/if}
      </li>
    {/each}
  </ul>
</div>

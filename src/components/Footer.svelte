<script>
  import { t } from 'svelte-i18n';
  import Fork24 from 'carbon-icons-svelte/lib/Fork24';
  import Link from './_shared/Link.svelte';

  import { isDarkTheme } from '../stores';

  const currentYear = new Date().getFullYear();
</script>

<footer
  class="flex justify-between flex-wrap px-6 pt-12 pb-6"
  style="background-image: linear-gradient(359deg, #e01d67 73%, {$isDarkTheme ? '#073B4C' : 'white'} 73.5%)">
  <p class="w-full text-center pb-5 md:p-0 md:w-auto">
    {$t('made_with')} 🍺 {$t('in')}
    <Link
      href="https://www.google.com/maps/search/?api=1&amp;query=Lille%2C%20France"
      title="Lille {$t('on')} Google Map">
      Lille, France
    </Link>
    -
    <span class="font-bold">{currentYear}</span>
  </p>
  <div class=" flex justify-center">
    <Link href="https://github.com/Los-Crackitos/loscrackitos.codes" title="Fork me {$t('on')} Github">
      <Fork24 />
    </Link>
  </div>
</footer>

<script>
  import { t } from 'svelte-i18n';
  import Fork24 from 'carbon-icons-svelte/lib/Fork24';
  import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub24';
  import Link from './_shared/Link.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="flex flex-col md:flex-row justify-between flex-wrap bg-pink text-white p-6">
  <p class="text-center pb-5 md:p-0">
    {$t('made_with')}
    🍺
    {$t('in')}
    <Link href="https://www.google.com/maps/search/?api=1&query=Lille%2C%20France" title="Lille {$t('on')} Google Map">
      Lille, France
    </Link>
    -
    <span class="font-bold">{currentYear}</span>
  </p>
  <div class="flex justify-center">
    <Link
      href="https://github.com/Los-Crackitos"
      title="{$t('visit', { values: { name: 'Los Crackitos', profile: 'Github' } })}"
      class="ml-0 md:ml-3">
      <LogoGithub24 />
    </Link>
    <Link href="https://github.com/Los-Crackitos/loscrackitos.codes" title="{$t('fork')}" class="ml-3">
      <Fork24 />
    </Link>
  </div>
</footer>

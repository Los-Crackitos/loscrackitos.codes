<script>
  import { t } from 'svelte-i18n';
  import Link from './_shared/Link.svelte';

  export let avatar;
</script>

<div class="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden border shadow-lg p-6">
  <div class="flex justify-center">
    <img class="w-24 h-24 rounded-full m-6" src="{avatar.img}" alt="{$t('avatar')} {avatar.name}" />
  </div>
  <div class="flex flex-col w-full">
    <div class="text-center lg:text-left mx-6">
      <div class="font-bold text-xl mb-2">{avatar.name}</div>
      <p>{$t(avatar.bio)}</p>
    </div>
  </div>
  <div class="flex flex-row lg:flex-col space-x-4 lg:space-y-4 lg:space-x-reverse mt-6 lg:mt-0">
    {#each avatar.links as externalLink}
      <Link
        href="{externalLink.url}"
        title="{$t('visit', { values: { profile: externalLink.linkTitle, name: avatar.name } })}">
        <svelte:component this="{externalLink.icon}" />
      </Link>
    {/each}
  </div>
</div>

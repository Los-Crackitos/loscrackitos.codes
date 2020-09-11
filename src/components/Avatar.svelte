<script>
  import { t } from 'svelte-i18n';

  export let avatar;
</script>

<div class="w-full lg:w-2/4 py-12 flex justify-center px-6">
  <div class="w-full h-full lg:h-auto px-2 rounded overflow-hidden shadow-lg flex flex-col lg:flex-row items-center">
    <div class="flex justify-center w-full">
      <img class="w-24 h-24 rounded-full" src="{avatar.img}" alt="{$t('avatar')} {avatar.name}" />
    </div>
    <div class="flex flex-col w-full">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{avatar.name}</div>
        <p class="text-gray-700 text-base">{$t(avatar.bio)}</p>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 flex flex-row space-x-4 lg:flex-col lg:space-y-4 lg:space-x-reverse">
      {#each avatar.links as externalLink}
        <a href="{externalLink.url}">
          <svelte:component this="{externalLink.icon}" />
        </a>
      {/each}
    </div>
  </div>
</div>

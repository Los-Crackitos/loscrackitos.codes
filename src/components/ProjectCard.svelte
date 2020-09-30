<script>
  import { t } from 'svelte-i18n';
  import Folder24 from 'carbon-icons-svelte/lib/Folder24';

  export let title;
  export let details;
</script>

<div
  class="min-h-full flex flex-col justify-between rounded-lg border shadow-lg transition duration-300 ease-in-out
  hover:border-pink p-6">
  <p class="text-xl font-bold inline-flex items-center">
    <span class="mr-2">
      <Folder24 />
    </span>
    {title}
  </p>
  <p class="my-4">{$t(`projects_descriptions.${title}`)}.</p>
  <div>
    {#each details as detail}
      <p class="inline-flex items-center align-middle mr-3">
        <span
          class="mr-1 {detail.type === 'language' ? `rounded-full w-3 h-3` : ''}"
          style="background-color: {detail.color}">
          {#if detail.type !== 'language'}
            <svelte:component this="{detail.icon}" />
          {/if}
        </span>
        {detail.value}
      </p>
    {/each}
  </div>
</div>

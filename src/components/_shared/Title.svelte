<script>
  export let title;
</script>

<h2 class="flex items-center max-w-xs mx-12 my-6 text-3xl border-blue border-b" id="{title.toLowerCase()}">
  <span class="mr-3">
    <slot />
  </span>
  {title}
</h2>

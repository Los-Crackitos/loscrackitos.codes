<script>
  let classes;

  export { classes as class };
  export let href;
  export let title;
</script>

<a
  href="{href}"
  target="_blank"
  title="{title}"
  rel="noreferrer"
  class="font-bold hover:underline fill-current hover:text-green {classes}">
  <slot />
</a>

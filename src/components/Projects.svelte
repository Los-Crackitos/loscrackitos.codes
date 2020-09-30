<script>
  import FolderDetails32 from 'carbon-icons-svelte/lib/FolderDetails32';
  import Star20 from 'carbon-icons-svelte/lib/Star20';
  import Fork20 from 'carbon-icons-svelte/lib/Fork20';
  import Certificate20 from 'carbon-icons-svelte/lib/Certificate20';
  import Title from './_shared/Title.svelte';
  import ProjectCard from './ProjectCard.svelte';

  const projects = [
    {
      title: 'excelante',
      repository: 'https://github.com/Los-Crackitos/Excelante',
      details: [
        {
          type: 'language',
          value: 'Go',
          color: '#00add8',
        },
        {
          type: 'info',
          value: 17,
          icon: Star20,
        },
        {
          type: 'info',
          value: 0,
          icon: Fork20,
        },
        {
          type: 'info',
          value: 'MIT',
          icon: Certificate20,
        },
      ],
    },
    {
      title: 'transport-api',
      repository: 'https://github.com/Los-Crackitos/transport-api',
      details: [
        {
          type: 'language',
          value: 'Python',
          color: '#3572a5',
        },
        {
          type: 'info',
          value: 0,
          icon: Star20,
        },
        {
          type: 'info',
          value: 0,
          icon: Fork20,
        },
        {
          type: 'info',
          value: 'MIT',
          icon: Certificate20,
        },
      ],
    },
    {
      title: 'svelte-tailwind-i18n-template',
      repository: 'https://github.com/Los-Crackitos/svelte-tailwind-i18n-template',
      details: [
        {
          type: 'language',
          value: 'JavaScript',
          color: '#f1e05a',
        },
        {
          type: 'info',
          value: 0,
          icon: Star20,
        },
        {
          type: 'info',
          value: 0,
          icon: Fork20,
        },
      ],
    },
    {
      title: 'sendver',
      repository: 'https://github.com/Los-Crackitos/Sendver',
      details: [
        {
          type: 'language',
          value: 'JavaScript',
          color: '#f1e05a',
        },
        {
          type: 'info',
          value: 1,
          icon: Star20,
        },
        {
          type: 'info',
          value: 0,
          icon: Fork20,
        },
        {
          type: 'info',
          value: 'MIT',
          icon: Certificate20,
        },
      ],
    },
  ];
</script>

<section>
  <Title title="Projects">
    <FolderDetails32 />
  </Title>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-12 my-6">
    {#each projects as project}
      <a href="{project.repository}" rel="noreferrer" target="_blank">
        <ProjectCard title="{project.title}" details="{project.details}" />
      </a>
    {/each}
  </div>
</section>
<div class="py-24" style="background: linear-gradient(358deg, #e01d67 50%, rgba(0,0,0,0) 50.3%)"></div>

<script>
  import FolderDetails32 from 'carbon-icons-svelte/lib/FolderDetails32';
  import Star20 from 'carbon-icons-svelte/lib/Star20';
  import Fork20 from 'carbon-icons-svelte/lib/Fork20';
  import Certificate20 from 'carbon-icons-svelte/lib/Certificate20';
  import Title from './_shared/Title.svelte';
  import ProjectCard from './ProjectCard.svelte';

  import { isDarkTheme } from '../stores';

  const projects = [
    {
      title: 'excelante',
      repository: 'https://github.com/Los-Crackitos/Excelante',
      details: [
        {
          type: 'language',
          value: 'Go',
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

<section
  class="flex flex-col pt-8"
  style="background-image: linear-gradient(4deg, {$isDarkTheme ? '#073B4C' : 'white'} 83%, #e01d67 83.5%);">
  <Title title="Projects">
    <FolderDetails32 />
  </Title>
  <div class="mx-12 my-48 flex flex-col lg:flex-row justify-center">
    {#each projects as project}
      <a href="{project.repository}" target="_blank" class="min-h-full my-5 lg:mx-5 lg:my-0">
        <ProjectCard title="{project.title}" details="{project.details}" />
      </a>
    {/each}
  </div>
</section>

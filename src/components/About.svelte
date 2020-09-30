<script>
  import Earth32 from 'carbon-icons-svelte/lib/Earth32';
  import LogoGitHub32 from 'carbon-icons-svelte/lib/LogoGithub32';
  import LogoLinkedIn32 from 'carbon-icons-svelte/lib/LogoLinkedin32';
  import LogoTwitter32 from 'carbon-icons-svelte/lib/LogoTwitter32';
  import Events32 from 'carbon-icons-svelte/lib/Events32';
  import Title from './_shared/Title.svelte';
  import Avatar from './Avatar.svelte';
  import { isDarkTheme } from '../stores';

  const avatars = [
    {
      name: 'Jérôme Pogeant',
      img: '/build/images/jerome-op.jpg',
      bio: 'jerome_bio',
      links: [
        {
          linkTitle: 'site',
          url: 'https://jeromepogeant.com/',
          icon: Earth32,
        },
        {
          linkTitle: 'Github',
          url: 'https://github.com/Jerome1337',
          icon: LogoGitHub32,
        },
        {
          linkTitle: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jeromepogeant/',
          icon: LogoLinkedIn32,
        },
        {
          linkTitle: 'Twitter',
          url: 'https://twitter.com/jeromepogeant',
          icon: LogoTwitter32,
        },
      ],
    },
    {
      name: 'Robin Baraffe',
      img: '/build/images/robin-op.jpg',
      bio: 'robin_bio',
      links: [
        {
          linkTitle: 'Github',
          url: 'https://github.com/Thyrael',
          icon: LogoGitHub32,
        },
        {
          linkTitle: 'LinkedIn',
          url: 'https://www.linkedin.com/in/robin-baraffe',
          icon: LogoLinkedIn32,
        },
        {
          linkTitle: 'Twitter',
          url: 'https://twitter.com/RobinBaraffe',
          icon: LogoTwitter32,
        },
      ],
    },
  ];
</script>

<section class="bg-pink {isDarkTheme ? 'text-white' : 'text-green'}">
  <Title title="About">
    <Events32 />
  </Title>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-12 py-6">
    {#each avatars as avatar}
      <Avatar avatar="{avatar}" />
    {/each}
  </div>
</section>
<div class="py-24" style="background: linear-gradient(4deg, rgba(0,0,0,0) 50%, #e01d67 50.3%)"></div>

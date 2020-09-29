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
      img: './images/jerome.jpg',
      bio: 'jerome_bio',
      links: [
        {
          url: 'https://jeromepogeant.com/',
          icon: Earth32,
        },
        {
          url: 'https://github.com/Jerome1337',
          icon: LogoGitHub32,
        },
        {
          url: 'https://www.linkedin.com/in/jeromepogeant/',
          icon: LogoLinkedIn32,
        },
        {
          url: 'https://twitter.com/jeromepogeant',
          icon: LogoTwitter32,
        },
      ],
    },
    {
      name: 'Robin Baraffe',
      img: './images/robin.jpg',
      bio: 'robin_bio',
      links: [
        {
          url: '#',
          icon: Earth32,
        },
        {
          url: 'https://github.com/Thyrael',
          icon: LogoGitHub32,
        },
        {
          url: 'https://www.linkedin.com/in/robin-baraffe',
          icon: LogoLinkedIn32,
        },
        {
          url: 'https://twitter.com/RobinBaraffe',
          icon: LogoTwitter32,
        },
      ],
    },
  ];
</script>

<section
  class="pt-8 mt-8"
  style="background-image: linear-gradient(4deg, #e01d67 75%, {$isDarkTheme ? '#073B4C' : 'white'} 75.5%);">
  <Title title="About">
    <Events32 />
  </Title>
  <div class="flex flex-col lg:flex-row justify-center items-centern ">
    {#each avatars as avatar}
      <Avatar {avatar} />
    {/each}
  </div>
</section>

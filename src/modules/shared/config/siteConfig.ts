const siteConfig = {
  links: [
    {
      href: '/',
      label: 'Home',
      matches: (path: string) => path === '/',
    },
    {
      href: '/blog',
      label: 'Blog',
      matches: (path: string) => path.includes('/blog'),
    },
    {
      href: '/work',
      label: 'Portfolio',
      matches: (path: string) => path === '/work',
    },
    {
      href: '/resume',
      label: 'Resume',
      matches: (path: string) => path === '/resume',
    },
  ],
};

export default siteConfig;

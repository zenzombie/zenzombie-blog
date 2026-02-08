// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://zenzombie.me',
	integrations: [
		starlight({
			title: 'zenzombie',
			customCss: ['./src/styles/custom.css'],
			routeMiddleware: './src/routeData.ts',
			pagination: false,
			head: [
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'zenzombie' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zenzombie/zenzombie.me' }],
			sidebar: [
				{
					label: 'Essays',
					collapsed: true,
					autogenerate: { directory: 'essays' },
				},
				{ label: 'About', slug: 'about' },
			],
		}),
	],
});

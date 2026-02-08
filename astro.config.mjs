// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://zenzombie.me',
	integrations: [
		starlight({
			title: 'zenzombie',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zenzombie/zenzombie.me' }],
			sidebar: [
				{ label: 'About', slug: 'about' },
				{
					label: 'Essays',
					autogenerate: { directory: 'essays' },
				},
			],
		}),
	],
});

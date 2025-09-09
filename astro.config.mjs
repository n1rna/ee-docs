// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Easy Env - ee',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/n1rna/ee-cli' }],
			plugins: [starlightThemeFlexoki()],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Schemas', slug: 'concepts/schemas' },
						{ label: 'Sheets', slug: 'concepts/sheets' },
						{ label: 'Projects', slug: 'concepts/projects' },
						{ label: 'Environments', slug: 'concepts/environments' },
					],
				},
			],
		}),
	],
});

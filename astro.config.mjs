// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import astroExpressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroExpressiveCode({
			// You can optionally override the plugin's default settings here
			frames: {
				// Example: Hide the "Copy to clipboard" button
				showCopyToClipboardButton: true,
			},
		}),
		starlight({
			title: "Easy Env - ee",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/n1rna/ee-cli",
				},
			],
			plugins: [starlightThemeFlexoki()],
			sidebar: [
				{
					label: "Getting Started",
					items: [
						{ label: "Installation", slug: "getting-started/installation" },
						{ label: "Quick Start", slug: "getting-started/quick-start" },
					],
				},
				{
					label: "CLI Documentation",
					items: [
						{ label: "Project Configuration", slug: "cli/project-configuration" },
						{ label: "Schemas", slug: "cli/schemas" },
						{ label: "Config Sheets", slug: "cli/config-sheets" },
						{ label: "Apply Command", slug: "cli/apply" },
						{ label: "Root Command", slug: "cli/root-command" },
					],
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

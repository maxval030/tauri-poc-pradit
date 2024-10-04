import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	clearScreen: false,
	server: {
		host: host || false,
		port: 5173,
		strictPort: true,
		hmr: host
			? {
					protocol: 'ws',
					host,
					port: 5172
				}
			: undefined
	}
});

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		exclude: ['flowbite', 'tailwind-merge', 'flowbite-svelte', 'flowbite-svelte-icons', '@floating-ui/dom']
	}
});

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(
		{ sass: { includePaths: ['src'] }}
	),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
			  noExternal: []
			},
			optimizeDeps: {
			  include: ['layercake']
			},
			css: {
			  postcss: {}
			}
		},
		adapter: vercel()
	}
};

export default config;

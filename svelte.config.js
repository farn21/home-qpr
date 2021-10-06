import preprocess from 'svelte-preprocess';

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
		}
	}
};

export default config;

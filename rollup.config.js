import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

export default {
	external: ['@tadashi/fd'],
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'es'
		}
	],
	plugins: [
		svelte({emitCss: false}),
		resolve({browser: true})
	]
}

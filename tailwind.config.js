/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-black': '#2d2e32',
				'main-white': '#f2eded',
				'main-green': '#80c679',
			},
		},
	},
	plugins: [],
};

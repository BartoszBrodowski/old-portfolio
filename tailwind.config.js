/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-black': '#2d2e32',
				'main-white': '#f2eded',
				'main-offwhite': '#f0f0f1',
				'main-green': '#80c679',
				'linkedin-blue': '#0a66c2',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				card: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
			},
			backgroundImage: {
				'profile-image': 'url(./src//assets/images/shina.png)',
			},
			keyframes: {
				'image-flow': {
					'0%, 100%': {
						'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
					'50%': {
						'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
					},
				},
				'status-glow': {
					'0%': {
						'box-shadow': '0 0 0 0 rgba(36, 171, 30, 0.5)',
					},
					'50%': {
						'box-shadow': '0 0 10px 8px rgba(36, 171, 30, 0)',
					},
				},
			},
			animation: {
				'image-flow': 'image-flow 8s ease-in-out infinite',
				'status-glow': 'status-glow 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};

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
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				image: 'box-shadow 15px 15px 50px rgba(0,0,0,0.2)',
			},
			backgroundImage: {
				'profile-image': 'url(./src//assets/images/shina.png)',
			},
			keyframes: {
				'image-flow': {
					'0%': {
						'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
					'50%': {
						'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
					},

					'100%': {
						'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
				},
			},
			animation: {
				'image-flow': 'image-flow 8s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};

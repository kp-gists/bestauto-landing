import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			lineHeight: {
				'64': '64px',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' },
				},
				moveUpDown: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(50px)' },
				},
				moveLeftRight: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-50px)' },
				},
			},
			animation: {
				wiggle: 'wiggle 3s ease-in-out 3', // 3s duration, ease-in-out timing, and only run once
				moveUpDown: 'moveUpDown 10s ease-in-out infinite',
				moveLeftRight: 'moveLeftRight 10s ease-in-out infinite',
			},
		},
	},
	plugins: [require('daisyui')],
};
export default config;

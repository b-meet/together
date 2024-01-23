/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-light-bg": "#FEFEFE",
				"secondary-light-bg": "#F2F5F7",
				"primary-dark-bg": "#151718",
				"secondary-dark-bg": "#232627",
				"main-blue": "#0285FF",
				"main-purple": "#A15AFE",
				"main-pink": "#FF98EA",
				"main-red": "#F14D1B",
				"main-green": "#3FDC76",
			},
			width: {},
			borderWidth: {
				"main-content": "20px",
			},
			borderRadius: {
				"4xl": "30px",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
	darkMode: "class",
};

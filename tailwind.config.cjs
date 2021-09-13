const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				"palette-mosaic": ['"Palette Mosaic"', ...defaultTheme.fontFamily.sans],
				"larrikin": ['"Larrikin"', ...defaultTheme.fontFamily.serif],
				"sharpie": ["'Sharpie VF'", "'Sharpie'", ...defaultTheme.fontFamily.serif]
			},
			colors: {
				"sky": colors.sky
			}
		},
	},
	plugins: [],
};

module.exports = config;

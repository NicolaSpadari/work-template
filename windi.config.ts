import { defineConfig } from "vite-plugin-windicss";
import colors from "windicss/colors";

const clayFonts = "system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"";

const classRange = (size, startAt = 0) => {
	return Array.from(Array(size).keys()).map(i => i + startAt);
};

const windiConfig = {
	prefix: "tw:",
	attributify: false,
	important: true,
	darkMode: false,
	safelist: [
		classRange(100).map(i => `tw:p-${i}`),
		classRange(100).map(i => `tw:pt-${i}`),
		classRange(100).map(i => `tw:pb-${i}`),
		classRange(100).map(i => `tw:pl-${i}`),
		classRange(100).map(i => `tw:pr-${i}`),
		classRange(100).map(i => `tw:px-${i}`),
		classRange(100).map(i => `tw:py-${i}`),
		classRange(100).map(i => `tw:m-${i}`),
		classRange(100).map(i => `tw:mt-${i}`),
		classRange(100).map(i => `tw:mb-${i}`),
		classRange(100).map(i => `tw:ml-${i}`),
		classRange(100).map(i => `tw:mr-${i}`),
		classRange(100).map(i => `tw:mx-${i}`),
		classRange(100).map(i => `tw:my-${i}`),
	],
	blocklist: [
		"w-100",
		"h-100",
		"mt-5",
		classRange(6).map(i => `p-${i}`),
		classRange(6).map(i => `pt-${i}`),
		classRange(6).map(i => `pb-${i}`),
		classRange(6).map(i => `pr-${i}`),
		classRange(6).map(i => `pl-${i}`),
		classRange(6).map(i => `px-${i}`),
		classRange(6).map(i => `py-${i}`),
		classRange(6).map(i => `m-${i}`),
		classRange(6).map(i => `mt-${i}`),
		classRange(6).map(i => `mb-${i}`),
		classRange(6).map(i => `mr-${i}`),
		classRange(6).map(i => `ml-${i}`),
		classRange(6).map(i => `mx-${i}`),
		classRange(6).map(i => `my-${i}`),
	],
	corePlugins: {
		container: false,
	},
	extract: {
		include: ["index.html", "src/**/*.{vue,html,js}"],
		exclude: ["node_modules", ".gitignore", ".gitattribute", ".eslint", ".eslingignore", "prettierrc", ".prettierignore"],
	},
	theme: {
		extend: {
			inset: {
				unset: "unset",
			},
		},
		fontFamily: {
			text: `Font1,${clayFonts}`,
			heading: `Font2,${clayFonts}`,
		},
		colors: {
			// https://windicss.org/utilities/colors.html#colors
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
		},
		zIndex: {
			5: 5,
			10: 10,
			20: 20,
			30: 30,
			40: 40,
			50: 50,
			60: 60,
			70: 70,
			80: 80,
			90: 90,
			100: 100,
			dropdown: 1000,
			sticky: 1020,
			fixed: 1030,
			backdrop: 1040,
			modal: 1050,
			popover: 1060,
			tooltip: 1070,
			top: 1100,
		},
		screens: {
			"xs": "0px",
			"sm": "576px",
			"md": "768px",
			"lg": "992px",
			"xl": "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [require("windicss/plugin/aspect-ratio")],
};

const configuration = defineConfig(windiConfig);

export default configuration;

import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";

const classRange = (size: number, startAt = 0) => {
	return Array.from(Array(size).keys()).map((i) => i + startAt);
};

const generateRules = (variants: string[], num: number) => {
    const vrnts = [] as string[];
    variants.forEach((variant) => vrnts.push(...classRange(num).map((i) => `${variant}-${i}`)));

    return vrnts;
};

export default defineConfig({
    rules: [
        ["z-dropdown", { "z-index": 1000 }],
        ["z-sticky", { "z-index": 1020 }],
        ["z-fixed", { "z-index": 1030 }],
        ["z-backdrop", { "z-index": 1040 }],
        ["z-modal", { "z-index": 1050 }],
        ["z-popover", { "z-index": 1060 }],
        ["z-tooltip", { "z-index": 1070 }],
        ["z-top", { "z-index": 1100 }]
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                heading: {
                    name: "Montserrat",
                    weights: ["400", "700"]
                },
                sans: {
                    name: "DM Sans",
                    weights: ["400", "700"]
                }
            }
        })
    ],
    theme: {
        breakpoints: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
            uw: "2000px"
        }
    },
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    preprocess: (utility) => {
        if (utility.includes("!"))
return utility;
        return `!${utility}`;
    },
    safelist: generateRules([
        "p", "px", "py", "pl", "pr", "pt", "pb", "m", "mt", "mb", "ml", "mr", "mx", "my"
    ], 50),
    blocklist: [
        "w-100",
		"h-100",
        "container",
        ...generateRules([
            "p", "px", "py", "pl", "pr", "pt", "pb", "m", "mt", "mb", "ml", "mr", "mx", "my"
        ], 5)
    ]
});

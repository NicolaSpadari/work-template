const colors = require("tailwindcss/colors");
const clayFonts = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
const clayBreakpoints = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
};

module.exports = {
    prefix: "tw-",
    important: true,
    purge: false,
    dark: false,
    corePlugins: {
        // Disable
        // clear: false,
        // float: false,
        // borderCollapse: false,
        // tableLayout: false,
        // fill: false,
        // stroke: false,
        // strokeWidth: false,
        // accessibility: false,
        // fontSmoothing: false,
        // fontVariantNumeric: false,
        // placeholderColor: false,
        // placeholderOpacity: false,
        // textTransform: false,
        // verticalAlign: false,
    },
    theme: {
        // Extend
        fontFamily: {
            text: `Barlow,${clayFonts}`,
            heading: `Montserrat,${clayFonts}`,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
        },
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "1rem",
            "2xl": "1.5rem",
            full: "9999px",
        },
        zIndex: {
            0: 0,
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
        },
        screens: clayBreakpoints,
    },
};

import { defineConfig } from "vite-plugin-windicss";
import colors from "windicss/colors";

const clayFonts = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

export default defineConfig({
    prefix: "tw-",
    attributify: false,
    important: true,
    darkMode: false,
    corePlugins: {
        container: false,
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
            xs: "0px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
});

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("./node_modules/tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{html,js}"],
    tailwindConfig: "./styles/tailwind.config.js",
    tailwindAttributes: ["className"],
    theme: {
        fontFamily: {
            sans: ["poppins", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            backgroundImage: {
                "about-us": "url('./src/assets/about-us.jpg')",
            },
        },
        screens: {
            mobile: "300px",
            tablet: "1000px",
            laptop: "1024px",
        },
    },
    plugins: [],
};

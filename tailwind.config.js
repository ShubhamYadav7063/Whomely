/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    tailwindConfig: "./styles/tailwind.config.js",
    tailwindAttributes: ["className"],
    theme: {
        fontFamily: {
            sans: [
                "poppins",
                {
                    fontFeatureSettings: '"cv11", "ss01"',
                    fontVariationSettings: '"opsz" 32',
                },
            ],
        },
        extend: {
            backgroundImage: {
                "about-us": "url('./src/assets/about-us.jpg')",
            },
        },
    },
    plugins: [],
};

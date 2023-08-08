/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    tailwindConfig: "./styles/tailwind.config.js",
    tailwindAttributes: ["className"],
    theme: {
        fontFamily: {
            sans: ["poppins"],
        },
        extend: {
            backgroundImage: {
                "about-us":
                    "url('./src/assets/about-us.jpg')",
            },
        },
    },
    plugins: [],
};

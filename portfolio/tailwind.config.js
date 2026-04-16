/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#020617",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                shimmer: "shimmer 2.5s linear infinite",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "100% 0" },
                    "100%": { backgroundPosition: "-100% 0" },
                },
            },
        },
    },
    plugins: [],
};

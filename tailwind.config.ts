import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./app/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#03a4cb",
            },

            backgroundImage: {
                "hero-bcg": "url('/assets/images/bcg.png')",
                "hero-bcg-mobile": "url('/assets/images/bcg-mobile.jpg')",
            },
        },
    },
    plugins: [],
} satisfies Config;

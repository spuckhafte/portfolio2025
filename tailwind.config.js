/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte, js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "main": ["Montserrat", "sans-serif"],
            },
        },  
        // breakpoints for responsive design (this is tailwind.config.js)
        screens: {
            'sm': '640px',
            'md': '870px',
            'lg': '1024px',
            'xl': '1280px',
        },
    },
    plugins: [],
}


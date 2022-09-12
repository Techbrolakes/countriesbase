/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '2rem',
        },
        extend: {
            colors: {
                d100: '#202C36',
                d200: '#2B3945',
                l100: '#F8f8f8',
                b100: '#0039a6',
                b200: '#5072A7',
            },
            fontFamily: {
                primary: ['inter', 'sans-serif'],
                Secondary: ['Dancing Script', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

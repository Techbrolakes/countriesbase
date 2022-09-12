/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                d100: '#202C36',
                l100: '#FAFAFA',
            },
            fontFamily: {
                primary: ['inter', 'sans-serif'],
                Secondary: ['Dancing Script', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // kalau kamu taruh di luar src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  // The 'require' will not work in a browser environment without a build step,
  // but the DaisyUI CDN link in index.html handles the plugin functionality.
  plugins: [require("daisyui")], 

  // DaisyUI specific configuration
  daisyui: {
    themes: ["night"], // Set the default theme
  },
}

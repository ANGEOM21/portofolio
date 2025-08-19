/**
 * This file is not strictly necessary when using the Tailwind CDN script,
 * as configuration can be done in a <script> tag in index.html.
 * However, it is included as it represents the standard configuration
 * for a project using Tailwind CSS and DaisyUI with a build tool like Vite.
 */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx"
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

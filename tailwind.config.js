/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
      colors: {
        'custom-red': '#d80032', // Replace with your hex color value
      },
      backgroundImage: {
        'custom-bg': "url('https://images.unsplash.com/photo-1713019511375-4db954c8c694?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Adjust path if in `public`
      },
      fontSize: {
        'custom-font1': '50px', // Add a custom font size
        'custom-font2': '15px', // Add a custom font size
      },
    },
  },
  plugins: [],
}


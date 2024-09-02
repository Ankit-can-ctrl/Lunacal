/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-all": "0 20px 50px rgba(0, 0, 0, 0.7)",
        "dark-bottom-right": "4px 4px 10px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

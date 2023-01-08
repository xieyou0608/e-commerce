/** @type {import('tailwindcss').Config} */
module.exports = {
  // 這個 config 在 nx serve 的時候可能是在 nx workspace 跑，所以路徑要改成這樣
  content: [
    './apps/next-app/src/pages/**/*.{js,jsx,ts,tsx}',
    './apps/next-app/src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

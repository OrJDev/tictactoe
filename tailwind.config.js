/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sxs': '530px',
        'mfx': '400px',
        'msx': '330px',
        'ssm': '310px',
        's4': "265px",
        'ss4': '610px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xss': '180px'
      },
      colors: {
        black: {
          bg: '#1F2632',
          light: '#29313D'
        },
        gray: 'rgba(156,163,175, 1)',
        white: '#FFFFFF',
      }
    }
  },
  plugins: [],
}

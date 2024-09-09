/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-stage-grotesk)', ...fontFamily.sans],
        primary: ['var(--font-next-sphere)', ...fontFamily.sans]
      },

      colors: {
        primary: {
          DEFAULT: '#50C3E9'
        },
        dark: {
          '16181B': '#16181B',
          '1E242B': '#1E242B'
        }
      },

      letterSpacing: {
        '0.01em': '0.01em',
        '1%': '0.01em',
        '0.02em': '0.02em',
        '2%': '0.02em',
        '0.26px': '0.26px'
      },

      fontSize: {
        13: '13px',
        15: '15px'
      },

      spacing: {
        3.75: '15px',
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        12.5: '50px',
        15: '60px',
        25: '100px'
      },

      borderRadius: {
        5: '5px',
        10: '10px',
        20: '20px'
      },

      borderWidth: {
        3: '3px',
        5: '5px',
        7: '7px',
        9: '9px',
        10: '10px'
      },

      backgroundImage: {}
    }
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

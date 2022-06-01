const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090C0F",
        secondary: '#C8A96A',
        tertiary: '#222222',
      },
      fontFamily: {
        sans: ["Forum", ...defaultTheme.fontFamily.sans],
        "open-sans": "Open Sans",
      },
    },
  },
  variants: {},
  plugins: [],
};

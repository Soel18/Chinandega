import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  import: {
    theme: {
  extend: {
    fontFamily: {
      patrick: ['"Patrick Hand"', 'cursive'],
      chewy: ['"Chewy"', 'cursive'], 
      transform: ['hover', 'focus'], // Asegura que las transformaciones están habilitadas en los estados hover/focus
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
    },
  },
},
  },
  plugins: [],
});

export default config;



import { trimmedTextPlugin } from "./src/第7章_Tailwind_CSSをカスタマイズする/trimmedTextPlugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/index.html"],
  theme: {
    extend: {},
  },
  plugins: [trimmedTextPlugin],
};

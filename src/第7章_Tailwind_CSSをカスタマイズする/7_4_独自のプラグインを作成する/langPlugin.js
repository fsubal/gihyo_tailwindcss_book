import plugin from "tailwindcss/plugin";

export const langPlugin = plugin(
  ({ matchVariant, theme }) =>
    matchVariant("lang", (value) => `&:lang(${value})`, {
      values: theme("lang"),
    }),
  {
    theme: {
      lang: {
        ja: "ja",
        en: "en",
      },
    },
  },
);

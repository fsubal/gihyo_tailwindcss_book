import plugin from "tailwindcss/plugin";

const TEXT_SIZE = {
  12: { fontSize: 12, lineHeight: 20 },
  14: { fontSize: 14, lineHeight: 20 },
  16: { fontSize: 16, lineHeight: 24 },
  20: { fontSize: 20, lineHeight: 28 },
};

const leadingCancel = {
  display: "block",
  width: 0,
  height: 0,
  content: '""',
};

export const trimmedTextPlugin = plugin(({ addComponents, addUtilities }) => {
  const trimmedTextClasses = Object.fromEntries(
    Object.entries(TEXT_SIZE).map(([name, { fontSize, lineHeight }]) => {
      const margin = (lineHeight - fontSize) / 2;

      return [
        `.trimmed-text-${name}`,
        {
          "font-size": `${fontSize}px`,
          "line-height": `${lineHeight}px`,
          "&::before": {
            ...leadingCancel,
            marginTop: `${-margin}px`,
          },
          "&::after": {
            ...leadingCancel,
            marginBottom: `${-margin}px`,
          },
        },
      ];
    }),
  );

  addComponents(trimmedTextClasses);

  addUtilities({
    ".no-trim": {
      "&::before": {
        content: "none",
      },
      "&::after": {
        content: "none",
      },
    },
  });
});

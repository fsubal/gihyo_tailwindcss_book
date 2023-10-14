import plugin from "tailwindcss/plugin";

export const defineVarNameInGlobalCss = plugin.withOptions(
  /**
   * @param {Record<'light' | 'dark', Record<string, string>>} theme
   */
  ({ light, dark }) =>
    ({ addBase }) => {
      addBase({
        ":root": toCssVariables(light),
        "@media (prefers-color-scheme: dark)": {
          ":root": toCssVariables(dark),
        },
      });
    },
);

/**
 * @type {Record<string, string>} theme
 */
export function generateVarNames(theme) {
  return Object.fromEntries(
    Object.keys(theme).map((name) => [name, `var(--color-${name})`]),
  );
}

/**
 * @type {Record<string, string>} theme
 */
function toCssVariables(theme) {
  return Object.fromEntries(
    Object.entries(theme).map(([name, value]) => [`--color-${name}`, value]),
  );
}

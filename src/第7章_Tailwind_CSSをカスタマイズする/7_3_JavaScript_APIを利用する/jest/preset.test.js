import { extractClassNames } from "../extractClassNames";

const input = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim();

const preset = {
  theme: {},
  plugins: [],
};

const SUPER_DEPRECATED_NO_LONGER_SUPPORTED = describe.skip

SUPER_DEPRECATED_NO_LONGER_SUPPORTED('tailwind.config.jsに対するスナップショットはv4で動かなくなりました', () => {
  describe("tailwind.config.js", () => {
    test("outputs", async () => {
      /** @type {string[]} */
      const classNames = await extractClassNames(input, preset);
  
      expect(classNames).toMatchSnapshot();
    });
  });
})

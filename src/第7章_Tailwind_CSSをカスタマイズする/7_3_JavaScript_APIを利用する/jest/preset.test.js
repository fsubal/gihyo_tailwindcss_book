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

describe("tailwind.config.js", () => {
  test("outputs", async () => {
    /** @type {string[]} */
    const classNames = await extractClassNames(input, preset);

    expect(classNames).toMatchSnapshot();
  });
});

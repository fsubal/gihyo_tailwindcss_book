import { describe, test, expect } from "vitest";

import preset from "../tailwind.config.js";
import { extractClassNames } from "../extractClassNames";

const input = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim();

describe("tailwind.config.js", () => {
  test("outputs", async () => {
    /** @type {string[]} */
    const classNames = await extractClassNames(input, preset);

    expect(classNames).toMatchSnapshot();
  });
});

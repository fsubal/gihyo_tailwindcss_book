import { extractClassNames } from "../extractClassNames";

const input = '@import "tailwindcss";';

const preset = {
  theme: {},
  plugins: [],
};

const SUPER_DEPRECATED_NO_LONGER_SUPPORTED = describe.skip

/**
 * このスナップショットテストはv4以上で動きません。
 * 当時のスナップショットがどういう内容だったかを見たい場合は以下。
 *
 * @see https://github.com/fsubal/gihyo_tailwindcss_book/tree/e5e1d1fe0bbb017ba3a3d177397bce46de47ae08/src/%E7%AC%AC7%E7%AB%A0_Tailwind_CSS%E3%82%92%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%99%E3%82%8B/7_3_JavaScript_API%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B
 */
SUPER_DEPRECATED_NO_LONGER_SUPPORTED('tailwind.config.jsに対するスナップショットはv4で動かなくなりました', () => {
  describe("tailwind.config.js", () => {
    test("outputs", async () => {
      /** @type {string[]} */
      const classNames = await extractClassNames(input, preset);
  
      expect(classNames).toMatchSnapshot();
    });
  });
});

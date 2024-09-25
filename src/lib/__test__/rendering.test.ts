import { expect, test } from "vitest";
import { renderer } from "../renderer";

test("Simple heading without any styling, h1", () => {
  expect(
    renderer({
      content: "Hello",
      styling: [],
      typeOfContent: "heading",
      headingType: "h1",
    }),
  ).toMatchInlineSnapshot(`
    <h1>
      Hello
    </h1>
  `);
});

test("Simple heading without any styling, h3", () => {
  expect(
    renderer({
      content: "Hello",
      styling: [],
      typeOfContent: "heading",
      headingType: "h3",
    }),
  ).toMatchInlineSnapshot(`
    <h3>
      Hello
    </h3>
  `);
});

test("Simple paragraph without any styling ", () => {
  expect(
    renderer({
      content: "Hello",
      styling: [],
      typeOfContent: "paragraph",
    }),
  ).toMatchInlineSnapshot(`
    <p>
      Hello
    </p>
  `);
});

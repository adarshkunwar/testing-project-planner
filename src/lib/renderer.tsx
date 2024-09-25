import { helper } from "../types/renderer";

export const renderer = (helper: helper): JSX.Element => {
  if (!helper) return <></>;
  if (!helper.content) return <></>;
  if (helper.typeOfContent === "heading") {
    // TypeScript knows that headingType exists here
    const HeadingTag = helper.headingType; // Extract the tag dynamically

    return <HeadingTag>{helper.content}</HeadingTag>;
  }
  return <></>;
};

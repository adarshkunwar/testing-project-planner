import { helper } from "../types/renderer";

export const renderer = (helper: helper): JSX.Element => {
  if (!helper) return <></>;
  if (!helper.content) return <></>;
  if (helper.typeOfContent === "heading") {
    // TypeScript knows that headingType exists here
    const HeadingTag = helper.headingType; // Extract the tag dynamically

    return <HeadingTag className="text-2xl">{helper.content}</HeadingTag>;
  }
  if (helper.typeOfContent === "paragraph") {
    return <p>{helper.content}</p>;
  }
  return <></>;
};

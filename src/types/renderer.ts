type typeOfContent = "heading" | "paragraph" | "list" | "image";

type styles = {
  attribute: string;
  value: string;
};

export type helper = {
  content: string;
  styling: styles[];
} & (
  | {
      typeOfContent: "heading";
      headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    }
  | { typeOfContent: Exclude<typeOfContent, "heading"> }
);

export type helperRenderr = (helper: helper) => JSX.Element;

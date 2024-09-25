type typeOfContent = "heading" | "paragraph" | "list" | "image";

export type helper = {
  content: string;
  styling: string;
} & (
  | {
      typeOfContent: "heading";
      headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    }
  | { typeOfContent: Omit<typeOfContent, "heading"> }
);

export type helperRenderr = (helper: helper) => JSX.Element;

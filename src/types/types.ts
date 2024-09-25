type type = "text" | "file" | "radio" | "select";
type width =
  | "full"
  | "half"
  | "third"
  | "two-third"
  | "quarter"
  | "three-quarter";

export type option = {
  name: string;
  value: string;
};

export type inputBoxProps = {
  name: string;
  width: width;
  label: string;
  value: string;
  setValue: (value: string) => void;
} & (
  | {
      type: Exclude<type, "select" | "radio">;
    }
  | {
      type: Exclude<type, "text" | "file">;
      option: option[];
    }
);

export type inputBox = (props: inputBoxProps) => JSX.Element;

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

export type inputBox = {
  name: string;
  width: width;
  label: string;
  value: string;
  setValue: (value: string) => void;
} & (
  | {
      type: Omit<type, "select" | "radio">;
    }
  | {
      type: Omit<type, "text" | "file">;
      option: option[];
    }
);

import { inputBoxProps } from "../types/types";

export const InputBox: React.FC<inputBoxProps> = (props) => {
  const { label, name, type, setValue, value, width } = props;
  if (type == "text") {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        style={{ width: width }}
      />
    );
  }
  return <> </>;
};

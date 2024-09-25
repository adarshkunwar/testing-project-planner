import { useState } from "react";
import { InputBox } from "./inputbox";
import { Tsection } from "../types/ui";

type sectionProps = {
  sectionId: number;
  section: Tsection;
  setSectionCollection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section = ({ sectionId, setSectionCollection }: sectionProps) => {
  const [width, setWidth] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    setSectionCollection((prev: Tsection[]) => {
      const newSection = {
        sectionId: sectionId.toString(),
        sectionValue: [
          {
            width,
            type,
            content,
          },
        ],
      };
      const newSectionCollection = [...prev];
      newSectionCollection[sectionId] = newSection;
      return newSectionCollection;
    });
  };

  return (
    <div>
      <InputBox
        label="width"
        name="width"
        setValue={setWidth}
        value={width}
        type="text"
        width="quarter"
      />
      <InputBox
        label="type"
        name="type"
        setValue={setType}
        value={type}
        type="text"
        width="quarter"
      />
      <InputBox
        label="content"
        name="content"
        setValue={setContent}
        value={content}
        type="text"
        width="full"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Section;

import { useEffect, useState } from "react";
import { TComplete, Tsection } from "../types/ui";
import Section from "./section";

type Tprops = {
  setPage: React.Dispatch<React.SetStateAction<TComplete[]>>;
};

const Left = ({ setPage }: Tprops) => {
  const [sectionsCollection, setSectionCollection] = useState<Tsection[]>([]);
  useEffect(() => {
    console.log(sectionsCollection);
    setPage((prev: TComplete[]) => {
      const newSection = {
        pageHeading: "",
        pageNumber: "2",
        forms: sectionsCollection,
      };

      const newSectionCollection = [...prev];
      newSectionCollection[0] = newSection;
      return newSectionCollection;
    });
  }, [sectionsCollection, setPage]);

  return (
    <>
      {sectionsCollection.map((section, index) => (
        <Section
          key={index}
          sectionId={index}
          section={section}
          setSectionCollection={setSectionCollection}
        />
      ))}
      {/* If you want to dynamically add sections */}
      <button
        onClick={() =>
          setSectionCollection([
            ...sectionsCollection,
            { sectionId: "", sectionValue: [] },
          ])
        }
      >
        Add Section
      </button>
    </>
  );
};

export default Left;

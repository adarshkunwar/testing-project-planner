import { renderer } from "../lib/renderer";
import { TComplete, Tfield, Tsection } from "../types/ui";

type TRight = {
  page: TComplete[];
};

const Right = ({ page }: TRight) => {
  return (
    <div className="right">
      {page.map((item: TComplete, pageIndex) => (
        <div key={pageIndex}>
          <h2>{item.pageHeading}</h2>
          <div>
            {item.forms.map((data: Tsection) => (
              <div key={data.sectionId}>
                <h3>{data.sectionId}</h3>
                {data.sectionValue.map((field: Tfield, fieldIndex) => {
                  const values = {
                    content: field.content,
                    typeOfContent: field.type,
                    // Assuming you want to set headingType dynamically based on the field type
                    styling: [],
                    headingType: field.type === "heading" ? "h1" : undefined,
                  };
                  return <div key={fieldIndex}>{renderer(values)}</div>;
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;

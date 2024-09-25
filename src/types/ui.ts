export type Tfield = {
  width: string;
  type: string;
  content: string;
};

export type Tsection = {
  sectionId: string;
  sectionValue: field[];
};

export type TComplete = {
  pageHeading: string;
  pageNumber: string;
  forms: Tsection[];
};

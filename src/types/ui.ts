export type Tfield = {
  width: string;
  type: string;
  content: string;
};

export type Tsection = {
  sectionId: string;
  sectionValue: Tfield[];
};

export type TComplete = {
  pageHeading: string;
  pageNumber: string;
  forms: Tsection[];
};

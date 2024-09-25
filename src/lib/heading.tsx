import { helper } from "../types/helper";

export const heading = (helper: helper): JSX.Element => {
  return <h1>{helper.content}</h1>;
};

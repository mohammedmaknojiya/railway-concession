import moment from "moment";

import { DISPLAY_DATE_FORMAT } from "./constants";

export const getFormattedDisplayDate = (date: string) => {
  return moment(date).format(DISPLAY_DATE_FORMAT);
};

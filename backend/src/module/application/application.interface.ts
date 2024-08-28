import { Types } from "mongoose";

export type TApplication = {
  job: Types.ObjectId;
  applicant: Types.ObjectId;
  status: string;
};

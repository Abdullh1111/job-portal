import { Types } from "mongoose";

export type TCompany = {
  name: string;
  description: string;
  website: string;
  location: string;
  logo: string;
  userId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

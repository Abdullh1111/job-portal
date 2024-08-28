import { Types } from "mongoose";
export type TProfile = {
  bio: string;
  skills: string;
  resume: string;
  resumeOriginalName: string;
  company: Types.ObjectId;
  profilePhoto: string;
};

export type TUser = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  profileInfo: TProfile;
  createdAt: Date;
  updatedAt: Date;
};

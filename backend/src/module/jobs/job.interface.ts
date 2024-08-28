import { Types } from "mongoose";

export type TJob = {
    tittle: string;
    description: string;
    requirement: string;
    salary: number;
    location: string;
    jobType: string;
    position: number;
    company: Types.ObjectId;
    createdBy: Types.ObjectId;
    application: Types.ObjectId,
    createdAt: Date;
    updatedAt: Date
}
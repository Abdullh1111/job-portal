import { model, Schema } from "mongoose";
import { TCompany } from "./company.interface";

const companySchema = new Schema<TCompany>(
  {
    name: { type: String, required: true },
    description: { type: String },
    website: { type: String, required: true },
    location: { type: String },
    logo: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);
export const company = model("company", companySchema);

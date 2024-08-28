import { model, Schema } from "mongoose";
import { TJob } from "./job.interface";

const jobSchema = new Schema<TJob>({
  tittle: { type: String, required: true },
  description: { type: String, required: true },
  requirement: { type: String },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  position: { type: Number, required: true },
  company: { type: Schema.Types.ObjectId, ref: "company" },
  createdBy: { type: Schema.Types.ObjectId, ref: "user" },
  application: [{ type: Schema.Types.ObjectId, ref: "application" }],
},{timestamps: true});
export const job = model("job", jobSchema);

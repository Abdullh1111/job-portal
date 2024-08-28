import { model, Schema } from "mongoose";
import { TApplication } from "./application.interface";

const applicationSchema = new Schema<TApplication>(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "job",
    },
    applicant: { type: Schema.Types.ObjectId, ref: "user" },
    status: { type: String, enum: ["pending", "accepted", "rejected"] },
  },
  { timestamps: true }
);
export const application = model("application", applicationSchema);

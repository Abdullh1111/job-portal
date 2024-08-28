import mongoose from "mongoose";
import config from "../config";

 async function dbMain() {
  try {
    await mongoose.connect(`${config.db}`, {
      dbName: "job-portal",
    });
  } catch (err) {
    console.log(err);
  }
}
export default dbMain
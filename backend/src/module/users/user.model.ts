import { model, Schema } from "mongoose";
import { TProfile, TUser } from "./user.interface";

const ProfileInfoSchema = new Schema<TProfile>({
    bio: {type: String},
    skills: {type: String},
    resume: {type: String},
    resumeOriginalName: {type: String},
    company: {type: Schema.Types.ObjectId, ref: 'company'},
    profilePhoto: {type: String, default: ''}
})
const userSchema = new Schema<TUser>({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ['student', 'recruiter']},
    phoneNumber: {type: String, minlength: 11},
    profileInfo: ProfileInfoSchema
},{
    timestamps: true
})

export const user = model("user",userSchema)
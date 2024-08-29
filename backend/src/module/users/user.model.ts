import { model, Schema } from "mongoose";
import { TProfile, TUser, TUserMethod, TUserModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";
import jwt from 'jsonwebtoken'

const ProfileInfoSchema = new Schema<TProfile>({
    bio: {type: String},
    skills: {type: String},
    resume: {type: String},
    resumeOriginalName: {type: String},
    company: {type: Schema.Types.ObjectId, ref: 'company'},
    profilePhoto: {type: String, default: ''}
})
const userSchema = new Schema<TUser,TUserModel,TUserMethod>({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ['student', 'recruiter']},
    phoneNumber: {type: String, minlength: 11},
    profileInfo: ProfileInfoSchema
},{
    timestamps: true
})

// pre-save function
userSchema.pre('save',async function() {
    const pass : string =await bcrypt.hash(this.password,Number(config.salt))

    this.password = pass 
})

// methods
userSchema.method("token",function token(){
    return jwt.sign({id:this._id,email:this.email,role: this.role},config.jwt_secret as string,{expiresIn: '30d'})
})

export const user = model<TUser,TUserModel>("user",userSchema)
import { TUser } from "./user.interface";
import { user } from "./user.model";

const registration = async(payload : Partial<TUser>) =>{
    const result = user.create(payload);
    return result;
}


export default {
    registration
}
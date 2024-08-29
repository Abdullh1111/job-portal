import { catchAsync } from "../../ErrorHandler/catchAsynch";
import userService from "./user.service";

// registration
const registration = catchAsync(async (req, res) => {
    const result = await userService.registration(req.body)
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result
    })
})

// login
const login = catchAsync(async (req, res) => {
    const result = await userService.login(req.body)
    const token = result.token()
    
    res.status(201).cookie('token',token,{
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true, 
        sameSite: true
    }).json({
        success: true,
        message: "User login successfully",
        data: result
    })
})

export default {
    registration,
    login
}
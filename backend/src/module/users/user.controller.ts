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
    res.status(201).json({
        success: true,
        message: "User login successfully",
        data: result
    })
})

export default {
    registration,
    login
}
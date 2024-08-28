import { catchAsync } from "../../ErrorHandler/catchAsynch";
import userService from "./user.service";

const registration = catchAsync(async (req, res) => {
    const result = await userService.registration(req.body)
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result
    })
})


export default {
    registration
}
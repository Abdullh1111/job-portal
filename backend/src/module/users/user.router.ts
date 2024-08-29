import { Router } from "express";
import userController from "./user.controller";
import userExists from "./../../middleware/user/register";

const userRouter = Router();

userRouter.post("/register", userExists, userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/logout", userController.logout);
userRouter.post("/updatedata", userController.updateData);


export default userRouter;

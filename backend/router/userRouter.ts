import express from "express";
import { UserActor } from "../actor/UserActor/UserActor";
import { authenticate } from "../actor/middleware/authenticate";

export const userRouter = express.Router();

userRouter.post("/signup", UserActor.signup);
userRouter.post("/signin", UserActor.signin);
userRouter.get('/me', authenticate, UserActor.getCurrentUser);
// userRouter.get("/get_all", UserActor.getAll);

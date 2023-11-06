import {Router} from "express";
import { methods as usersController }  from "../controllers/users.controller";


const router=Router();

router
    .get("/", usersController.getAllUsers)
    .get("/:id", usersController.getUserById)
    .post("/", usersController.createUser)
    .put("/:id", usersController.updateUser)
    .delete("/:id", usersController.deleteUser)
;


export default router;
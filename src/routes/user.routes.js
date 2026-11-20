import express from "express";
import {
  getAllUsers,
  createNewUser,
  renderAddUserForm,
  renderEditUserForm,
  updateExistingUser,
  deleteExistingUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/add", renderAddUserForm);
router.post("/add", createNewUser);
router.get("/edit/:id", renderEditUserForm);
router.post("/edit/:id", updateExistingUser);
router.get("/delete/:id", deleteExistingUser);

export default router;

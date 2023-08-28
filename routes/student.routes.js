import { Router } from "express";
import {
  createStudent,
  deleteStudentById,
  getAllStudents,
} from "../controllers/student.controllers.js";

export const studentRouter = Router();
studentRouter.get("/", getAllStudents);
studentRouter.post("/", createStudent);
studentRouter.delete("/:studentId", deleteStudentById);

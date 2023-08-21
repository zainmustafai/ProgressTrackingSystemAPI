import Student from "../models/student.model.js";
export const createStudent = async (req, res) => {};
export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getStudentById = async (req, res) => {};
export const updateStudentById = async (req, res) => {};
export const deleteStudentById = async (req, res) => {};

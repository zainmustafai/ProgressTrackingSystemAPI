import Student from "../models/student.model.js";
export const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password,
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

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
// Delete a student by id:
export const deleteStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    await Student.findByIdAndDelete(studentId);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

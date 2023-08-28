import Teacher from "../models/teacher.model.js";

export const createTeacher = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newTeacher = new Teacher({
      firstName,
      lastName,
      email,
      password,
    });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await Teacher.find();
    res.status(200).json(allTeachers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTeacherById = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { firstName, lastName, email } = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      { firstName, lastName, email },
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTeacherById = async (req, res) => {
  try {
    const { teacherId } = req.params;
    await Teacher.findByIdAndDelete(teacherId);
    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

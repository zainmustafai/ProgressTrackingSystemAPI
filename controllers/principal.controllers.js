import Principal from "../models/principal.model.js";

export const createPrincipal = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newPrincipal = new Principal({
      firstName,
      lastName,
      email,
      password,
    });
    await newPrincipal.save();
    res.status(201).json(newPrincipal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllPrincipals = async (req, res) => {
  try {
    const allPrincipals = await Principal.find();
    res.status(200).json(allPrincipals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPrincipalById = async (req, res) => {
  try {
    const { principalId } = req.params;
    const principal = await Principal.findById(principalId);
    if (!principal) {
      return res.status(404).json({ message: "Principal not found" });
    }
    res.status(200).json(principal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePrincipalById = async (req, res) => {
  try {
    const { principalId } = req.params;
    const { firstName, lastName, email } = req.body;
    const updatedPrincipal = await Principal.findByIdAndUpdate(
      principalId,
      { firstName, lastName, email },
      { new: true }
    );
    if (!updatedPrincipal) {
      return res.status(404).json({ message: "Principal not found" });
    }
    res.status(200).json(updatedPrincipal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePrincipalById = async (req, res) => {
  try {
    const { principalId } = req.params;
    await Principal.findByIdAndDelete(principalId);
    res.status(200).json({ message: "Principal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

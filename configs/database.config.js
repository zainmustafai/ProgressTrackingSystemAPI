import mongoose from "mongoose";

const connnectToMongoDB = async (MONGO_URI) => {
  try {
    const database = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};


export default connnectToMongoDB;
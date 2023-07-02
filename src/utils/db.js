// import mongoose from "mongoose";

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected Successfully");
//   } catch (error) {
//     throw new Error("Connection Failed");
//   }
// };

// export default connect;

require("dotenv").config();
const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

export default connectToMongoDB;

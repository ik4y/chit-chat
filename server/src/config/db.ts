import mongoose from "mongoose";
import { config } from "./config";

const maxRetries = 3;
const retryDelay = 2000;
let retries = 1;

async function connectDB() {
  try {
    mongoose.set("bufferCommands", false);
    const conn = await mongoose.connect(`${config.MONGO_URI}`);
    console.log(`Database connected successfully to ${conn.connection.host}`);

    mongoose.connection.on("error", (error) => {
      throw error;
    });
  } catch (err) {
    console.error("An error occured during establishing connection", err);

    if (retries >= maxRetries) {
      console.error("Can't establish the connection...");
      process.exit(1);
    }

    console.log(`${maxRetries - retries} tries left, Retrying...`);
    setTimeout(() => {
      connectDB();
      retries++;
    }, retryDelay);
  }
}

export default connectDB;

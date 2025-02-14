import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user_route.js";
import messageRoute from "./routes/message_route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./socket_io/server.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

try {
  mongoose.connect(MONGODB_URI);
  console.log("MongoDB connected");
} catch (error) {
  console.log("MongoDB Connection failed", error);
}


app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

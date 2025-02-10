import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user_route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true, // Allow cookies & authentication headers
  })
);


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;




try {
  mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');
} catch (error) {
  console.log("MongoDB Connection failed", error);
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
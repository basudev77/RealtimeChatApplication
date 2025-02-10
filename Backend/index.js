import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user_route.js';
import messageRoute from './routes/message_route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
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
  res.send('Realtime Chatapp of Basudev Das');
});

app.use("/user", userRoute);
app.use("/message", messageRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
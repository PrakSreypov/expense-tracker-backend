import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import expenseRoutes from './routes/expenses.route';

// Initialize app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
const mongoUri = process.env.MONGO_URI;
const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoUri as string);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Routes
app.get('/api/v1/test', async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({
      success: true,
      message: 'Server testing is running',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});
app.use('/api/v1/expenses', expenseRoutes);

// Server Initialization
const PORT = process.env.PORT || 3003;
const startServer = async (): Promise<void> => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server initialization failed:', error);
    process.exit(1);
  }
};

startServer();

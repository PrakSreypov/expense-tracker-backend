import mongoose, { Schema } from 'mongoose';

const expenceSchema = new mongoose.Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
      min: [0, 'Amount connot be negative'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, 'Description cannot exceed 200 characters'],
    },
  },
  { timestamps: true }
);

const Expenses = mongoose.model('Expenses', expenceSchema);
export default Expenses;

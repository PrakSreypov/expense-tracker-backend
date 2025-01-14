import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      maxlength: [50, 'Category name cannot exceed 50 characters'],
    },
  },
  { timestamps: true }
);

const Categories = mongoose.model('Categories', categoriesSchema);
export default Categories;

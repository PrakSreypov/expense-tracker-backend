import { Request, Response } from 'express';
import Categories from '../models/Categories';

// Get All Categories Controller
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({
      status: 'success',
      message: 'Get all categories successfully',
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to get all categories',
    });
  }
};

// Create Category Controller
const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Categories.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Category created successfully',
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to create category',
    });
  }
};

// Update Category Controller
const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const category = await Categories.findByIdAndUpdate(categoryId, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      message: 'Category updated successfully',
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update category',
    });
  }
};

// Delete Category Controller
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    await Categories.findByIdAndDelete(categoryId);

    res.status(200).json({
      status: 'success',
      message: 'Category deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete category',
    });
  }
};

export default {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};

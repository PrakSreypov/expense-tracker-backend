import { Request, Response } from 'express';
import Expenses from '../models/Expenses';

// Get All Expense Controller
const getAllExpenseController = async (req: Request, res: Response) => {
  try {
    const expenses = await Expenses.find();

    res.status(200).json({
      status: 'success',
      message: 'Get all expenses successfully',
      data: expenses,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to get all expenses',
    });
  }
};

// Create Expense Controller
const createExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expenses.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Expense created successfully',
      data: expense,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to create expenses',
    });
  }
};

// Update Expense Controller
const updateExpense = async (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    const expense = await Expenses.findByIdAndUpdate(expenseId, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      message: 'Expense updated successfully',
      data: expense,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update expenses',
    });
  }
};

// Delete Expense Controller
const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    await Expenses.findByIdAndDelete(expenseId);

    res.status(200).json({
      status: 'success',
      message: 'Expense deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete expenses',
    });
  }
};

export default {
  getAllExpenseController,
  createExpense,
  updateExpense,
  deleteExpense,
};

import express from 'express';
import expensesController from '../controllers/expenses.controller';

const router = express.Router();

router
  .route('/')
  .get(expensesController.getAllExpenseController)
  .post(expensesController.createExpense);

router
  .route('/:expenseId')
  .put(expensesController.updateExpense)
  .delete(expensesController.deleteExpense);

export default router;

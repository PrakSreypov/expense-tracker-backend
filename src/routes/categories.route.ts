import express from 'express';
import categoryController from '../controllers/categories.controller';
const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router
  .route('/:categoryId')
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

export default router;

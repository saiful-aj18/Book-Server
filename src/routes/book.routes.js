import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBookById,
  getBookGenres,
  getBookStats,
  getBookStatsByYear,
  getBooks,
  searchBooks,
  updateBook,
  getFeaturedBooks,
  getBookAuthors,
  getBooksByAuthor,
} from '../controllers/book.controller.js';

const router = Router();

router.get('/search', searchBooks);
router.get('/genres', getBookGenres);
router.get('/stats', getBookStats);
router.get('/stats/year', getBookStatsByYear);
router.get('/featured', getFeaturedBooks);
router.get('/authors', getBookAuthors);
router.get('/authors/:author', getBooksByAuthor);
router
  .route('/')
  .post(createBook)
  .get(getBooks);

router
  .route('/:id')
  .get(getBookById)
  .patch(updateBook)
  .delete(deleteBook);

export default router;
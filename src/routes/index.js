import { Router } from 'express';
import bookRoutes from './book.routes.js';

const router = Router();

router.use('/books', bookRoutes);

export default router;
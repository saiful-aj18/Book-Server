import cors from 'cors';
import express from 'express';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Book API is healthy',
  });
});

app.use('/api/v1', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
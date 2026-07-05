import Book from '../models/Book.js';

const createBook = (bookData) => Book.create(bookData);

const countBooks = (filter) => Book.countDocuments(filter);

const findBooks = (filter, options = {}) => {
  const { sort = '-createdAt', skip = 0, limit = 10, fields = '' } = options;

  let query = Book.find(filter).sort(sort).skip(skip).limit(limit);

  if (fields) {
    query = query.select(fields);
  }

  return query;
};

const findBookById = (id) => Book.findById(id);

const updateBookById = (id, bookData) =>
  Book.findByIdAndUpdate(id, bookData, {
    new: true,
    runValidators: true,
  });

const deleteBookById = (id) => Book.findByIdAndDelete(id);

const getDistinctGenres = () => Book.distinct('genre');

const getBooksByGenre = () =>
  Book.aggregate([
    {
      $group: {
        _id: '$genre',
        totalBooks: { $sum: 1 },
      },
    },
    {
      $sort: { totalBooks: -1, _id: 1 },
    },
  ]);

const getBooksByYear = () =>
  Book.aggregate([
    {
      $match: {
        publishedYear: { $ne: null },
      },
    },
    {
      $group: {
        _id: '$publishedYear',
        totalBooks: { $sum: 1 },
        avgPrice: { $avg: '$price' },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

const searchBooks = (term) =>
  Book.find({ $text: { $search: term } }).sort({ score: { $meta: 'textScore' } });

const getFeaturedBooks = () => Book.find({ isFeatured: true }).sort({ createdAt: -1 });

export default {
  createBook,
  countBooks,
  findBooks,
  findBookById,
  updateBookById,
  deleteBookById,
  getDistinctGenres,
  getBooksByGenre,
  getBooksByYear,
  searchBooks,
  getFeaturedBooks,
};
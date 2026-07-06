import bookService from '../services/book.service.js';

export const createBook = async (req, res, next) => {
  try {
    const book = await bookService.createBook(req.body);

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const getBooks = async (req, res, next) => {
  try {
    const result = await bookService.getBooks(req.query);

    res.status(200).json({
      success: true,
      count: result.books.length,
      total: result.total,
      page: result.page,
      pages: result.pages,
      data: result.books,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    await bookService.deleteBook(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getBookGenres = async (_req, res, next) => {
  try {
    const genres = await bookService.getGenres();

    res.status(200).json({
      success: true,
      data: genres.sort(),
    });
  } catch (error) {
    next(error);
  }
};

export const getBookStats = async (_req, res, next) => {
  try {
    const stats = await bookService.getGenreStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookStatsByYear = async (_req, res, next) => {
  try {
    const stats = await bookService.getYearStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedBooks = async (_req, res, next) => {
  try {
    const featuredBooks = await bookService.getFeaturedBooks();

    res.status(200).json({
      success: true,
      count: featuredBooks.length,
      data: featuredBooks,
    });
  } catch (error) {
    next(error);
  }
};

export const searchBooks = async (req, res, next) => {
  try {
    const term = req.query.q || '';

    if (!term.trim()) {
      res.status(200).json({
        success: true,
        count: 0,
        data: [],
      });
      return;
    }

    const books = await bookService.searchBooks(term);

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookAuthors = async (_req, res, next) => {
  try {
    const authors = await bookService.getBookAuthors();

    res.status(200).json({
      success: true,
      data: authors,
    });
  } catch (error) {
    next(error);
  }
};
export const getBooksByAuthor = async (req, res, next) => {
  try {
    const author = req.params.author;

    if (!author || !author.trim()) {
      return res.status(400).json({
        success: false,
        message: "Author name is required",
      });
    }

    const books = await bookService.getBooksByAuthor(author.trim());

    return res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};
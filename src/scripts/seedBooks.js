import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Book from '../models/Book.js';
import books from '../seeds/books.seed.js';

dotenv.config();

const seedBooks = async () => {
  try {
    await connectDB();
    await Book.deleteMany();
    await Book.insertMany(books);

    console.log(`Seeded ${books.length} books successfully.`);
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }
};

seedBooks();
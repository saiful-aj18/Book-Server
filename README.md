# MongoDB Query Practice API

Simple Express + MongoDB API for practice CRUD and MongoDB query basics with one model: `Book`.

## Folder Structure
```txt
src
├── app.js
├── server.js
├── config
├── controllers
├── middlewares
├── models
├── repositories
├── routes
├── seeds
├── services
└── utils
```

## Setup

```bash
npm install
cp .env.example .env
npm run seed
npm run dev
```

## Base URL

`http://localhost:3000/api/v1`

## Routes

- `POST /books`
- `GET /books`
- `GET /books/:id`
- `PATCH /books/:id`
- `DELETE /books/:id`
- `GET /books/genres`
- `GET /books/stats`
- `GET /books/stats/year`
- `GET /books/search?q=mongodb`

## Query Examples

Use `GET /books` with query params to demonstrate simple MongoDB filtering:

- `?title=Learning MongoDB`
- `?author=John Smith`
- `?genre=Database`
- `?published=true`
- `?featured=false`
- `?minPrice=100&maxPrice=500`
- `?minPages=150&maxPages=400`
- `?minRating=4`
- `?tags=mongodb,beginner`
- `?sort=price,-rating`
- `?fields=title,author,price`
- `?page=2&limit=5`

## Extra Query Demos

- `GET /books/search?q=mongodb` for text search
- `GET /books/stats` for books grouped by genre
- `GET /books/stats/year` for books grouped by published year

## Sample Book Body

```json
{
  "title": "Learning MongoDB",
  "author": "John Smith",
  "genre": "Database",
  "price": 499,
  "pages": 320,
  "rating": 4.5,
  "published": true,
  "featured": false,
  "publishedYear": 2024,
  "tags": ["mongodb", "beginner"],
  "description": "A simple book for MongoDB practice"
}
```

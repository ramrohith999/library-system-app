import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

import BookCard from "../components/BookCard";

const BrowseBooks=()=> {
  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  let filteredBooks = books;

  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    );
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5 font-serif">Browse Books</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-5 w-full rounded-xl shadow-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
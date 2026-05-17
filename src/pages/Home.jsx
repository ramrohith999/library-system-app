import BookCard from "../components/BookCard";
import booksData from "../data/booksData";

const Home=()=> {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to Online Library
      </h1>

      <h2 className="text-2xl mb-3">Categories</h2>

      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            {cat}
          </div>
        ))}
      </div>

      <h2 className="text-2xl mb-3">Popular Books</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
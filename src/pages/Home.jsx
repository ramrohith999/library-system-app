import BookCard from "../components/BookCard";
import booksData from "../data/booksData";

const Home=()=> {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi","Poetry", "Romance", "Comedy"];

  return (
    <div className="p-5">
      <h1 className="text-4xl font-serif mb-5 text-zinc-700 text-center hover:-translate-y-1 transition-all duration-300">
        Welcome to Online Library
      </h1>

      <h2 className="text-2xl mb-3 text-blue-950">Categories</h2>

      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            {cat}
          </div>
        ))}
      </div>

      <h2 className="text-3xl text-center mt-4 mb-4 font-serif">Popular Books</h2>

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
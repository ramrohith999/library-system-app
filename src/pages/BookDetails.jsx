import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails=()=> {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold">
        {book.title}
      </h1>

      <p className="mt-3">Author: {book.author}</p>

      <p className="mt-3">{book.description}</p>

      <p className="mt-3">⭐ {book.rating}</p>

      <Link
        to="/books"
        className="text-blue-500"
      >
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;
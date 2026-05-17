import { Link } from "react-router-dom";

const BookCard=({ book })=> {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{book.title}</h2>

      <p>{book.author}</p>

      <p>{book.category}</p>

      <Link
        to={`/book/${book.id}`}
        className="text-blue-500"
      >
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
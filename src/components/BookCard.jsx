import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div
      className="
        bg-blue-50
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        border
        border-amber-200
      "
    >
      {/* Book Image */}
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {book.title}
        </h2>

        <p className="text-gray-600 text-lg mb-1">
            by {book.author}
        </p>

        <p
          className="
            inline-block
            bg-blue-100
            text-blue-700
            px-3
            py-1
            rounded-full
            text-sm
            font-semibold
            mb-4
          "
        >
          {book.category}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-yellow-600 font-semibold">
            ⭐ {book.rating}
          </span>

          <Link
            to={`/book/${book.id}`}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-4
              py-2
              rounded-lg
              transition
              duration-300
              font-medium
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });

  // Error state
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      title,
      author,
      category,
      description,
      rating,
      image,
    } = formData;

    // Validation
    if (
      !title ||
      !author ||
      !category ||
      !description ||
      !rating ||
      !image
    ) {
      setError("All fields are required");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5");
      return;
    }

    // Add new book
    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
      })
    );

    // Redirect after adding
    navigate("/books");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div
        className="
          bg-[#fff8ee]
          w-full
          max-w-2xl
          p-8
          rounded-3xl
          shadow-2xl
          border
          border-amber-200
        "
      >

        {/* Heading */}
        <h1
          className="
            text-4xl
            font-bold
            text-center
            text-amber-900
            mb-8
          "
        >
          Add New Book
        </h1>

        {/* Error */}
        {error && (
          <p className="text-red-600 mb-4 text-center font-medium">
            {error}
          </p>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Author */}
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Rating */}
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Image URL */}
          <input
            type="text"
            name="image"
            placeholder="Book Image URL"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Book Description"
            rows="5"
            className="
              border
              border-amber-300
              p-4
              rounded-xl
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-amber-400
            "
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            className="
              bg-amber-800
              hover:bg-amber-900
              text-white
              p-4
              rounded-xl
              font-semibold
              text-lg
              transition
              duration-300
              shadow-md
              hover:shadow-xl
              cursor-pointer
            "
          >
            Add Book
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddBook;
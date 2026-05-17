import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook=()=> {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      title,
      author,
      category,
      description,
      rating,
    } = formData;

    if (
      !title ||
      !author ||
      !category ||
      !description ||
      !rating
    ) {
      setError("All fields are required");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        ...formData,
      })
    );

    navigate("/books");
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-3xl mb-5">Add Book</h1>

      {error && (
        <p className="text-red-500 mb-3">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border p-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          className="border p-2"
          onChange={handleChange}
        />

        <button className="bg-black text-white p-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
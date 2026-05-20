import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
bg-blue-900
text-amber-50
p-4
flex
gap-6
sticky
top-0
z-50
shadow-lg
"
    >
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
};

export default Navbar;

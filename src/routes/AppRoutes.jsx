import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";

import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/:category?" element={<BrowseBooks />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/add-book" element={<AddBook />} />
              </Routes>
            </>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
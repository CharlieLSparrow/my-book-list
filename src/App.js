import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Bookshelf from "./components/Bookshelf";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    fetchBooks();
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks((prevBooks) =>
        prevBooks.filter((b) => b.id !== book.id).concat(book)
      );
    });
  };

  const searchBooks = (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    BooksAPI.search(query, 20).then((results) => {
      if (results.error) {
        setSearchResults([]);
      } else {
        const updatedResults = results.map((result) => {
          const existingBook = books.find((b) => b.id === result.id);
          return existingBook ? { ...result, shelf: existingBook.shelf } : result;
        });
        setSearchResults(updatedResults);
      }
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Bookshelf
            books={books}
            onMove={moveBook}
            onNavigate={() => navigate("/search")}
          />
        }
      />
      <Route
        path="/search"
        element={
          <SearchBooks
            books={searchResults}
            onSearch={searchBooks}
            onMove={moveBook}
          />
        }
      />
    </Routes>
  );
};

export default App;
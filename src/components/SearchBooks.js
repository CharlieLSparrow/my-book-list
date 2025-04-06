import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ books, onSearch, onMove }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onMove={onMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
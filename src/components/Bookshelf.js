import React from "react";
import Book from "./Book";

const Bookshelf = ({ books, onMove, onNavigate }) => {
  const shelves = [
    { title: "Currently Reading", id: "currentlyReading" },
    { title: "Want to Read", id: "wantToRead" },
    { title: "Read", id: "read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <div key={shelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === shelf.id)
                  .map((book) => (
                    <li key={book.id}>
                      <Book book={book} onMove={onMove} />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="open-search">
        <button onClick={onNavigate}>Add a book</button>
      </div>
    </div>
  );
};

export default Bookshelf;
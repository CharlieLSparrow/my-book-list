# MyReads Project

MyReads is a bookshelf app that allows users to categorize books into three shelves: "Currently Reading," "Want to Read," and "Read." Users can also search for books and add them to their desired shelf.

## Features

- Categorize books into shelves: "Currently Reading," "Want to Read," and "Read."
- Search for books by title, author, or ISBN.
- Move books between shelves.
- Responsive design for a seamless experience across devices.

## Technologies Used

- React
- React Router
- Create React App

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-book-list.git
   cd my-book-list
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Whitelisted search terms for the app.
├── package.json # Project dependencies and scripts.
├── public
│   ├── favicon.ico # React Icon, customizable.
│   └── index.html # Main HTML file. DO NOT MODIFY.
└── src
    ├── App.css # App-specific styles.
    ├── App.js # Main application component.
    ├── BooksAPI.js # API utility for backend interactions.
    ├── components # Reusable React components.
    │   ├── Book.js # Component for individual books.
    │   ├── Bookshelf.js # Component for displaying shelves.
    │   └── SearchBooks.js # Component for the search page.
    ├── index.css # Global styles.
    ├── index.js # Entry point for React DOM rendering.
    └── icons # Helpful images for the app.
```

## Usage

1. **View Shelves**: The main page displays books categorized into three shelves.
2. **Move Books**: Use the dropdown menu on each book to move it between shelves.
3. **Search for Books**: Navigate to the search page and search for books by title, author, or ISBN. Add books to shelves directly from the search results.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivs 3.0 License](http://creativecommons.org/licenses/by-nc-nd/3.0/).

## Contributing

Contributions are welcome! Please refer to the `CONTRIBUTING.md` file for guidelines.

## Acknowledgments

This project is part of the Udacity React Nanodegree program.

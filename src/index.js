import React from "react";
import ReactDOM from "react-dom/client";
import books from "./data";
import Book from "./component/book";
import "./style.css";

const BookList = () => {
  return (
    <>
    <h1 className="title">Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// export default BookList;

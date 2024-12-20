import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DisplayBooks from "./components/DisplayData";
import DeleteBook from "./components/Delete_Book";

function App() {
  return (
    <Router>
      <div className="container">
        <center><h2>Online Book Library Using React</h2></center>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/" className="navbar-brand"><h4>Add a Book</h4></Link>
          <Link to="/display" className="navbar-brand"><h4>Display Books</h4></Link>
          <Link to="/update" className="navbar-brand"><h4>Update a Book</h4 ></Link>
          <Link to="/delete" className="navbar-brand"><h4>Delete a Book</h4></Link>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/Display Books" element={<DisplayBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import { useNavigate } from "react-router-dom";
import { BookCard } from "../components/BookCard/BookCard";
import { useBooks } from "../context/BookContext";

export const Home = () => {
  const navigate = useNavigate();
  const {
    state: { currentlyReading, wantToRead, read },
  } = useBooks();
  return (
    <div className="home">
      <button className="search-btn" onClick={() => navigate("/search")}>
        Go to Search
      </button>
      <h2>Currently Reading</h2>
      <hr />
      <div className="books">
        {currentlyReading.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <h2>Want to Read</h2>
      <hr />
      <div className="books">
        {wantToRead.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <h2>Read</h2>
      <hr />
      <div className="books">
        {read.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

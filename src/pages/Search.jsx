import { useNavigate } from "react-router-dom";
import { BookCard } from "../components/BookCard/BookCard";
import { useBooks } from "../context/BookContext";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const Search = () => {
  const navigate = useNavigate();
  const { state, dispatch, searchedBooks } = useBooks();
  return (
    <div className="search">
      <div className="back-btn" onClick={() => navigate("/")} title="Go back">
        <MdOutlineKeyboardBackspace />
      </div>
      <h2>Search a Book</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={state.searchInput}
        onChange={(e) =>
          dispatch({ type: "SEARCH_INPUT", payload: e.target.value })
        }
      />
      {state.searchInput && (
        <div className="books">
          {searchedBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

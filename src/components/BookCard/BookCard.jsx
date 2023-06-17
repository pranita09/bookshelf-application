import { useState } from "react";
import "./BookCard.css";
import { FaCaretDown } from "react-icons/fa";
import { useBooks } from "../../context/BookContext";
import { toast } from "react-hot-toast";

export const BookCard = ({ book }) => {
  const { title, author, coverImg } = book;
  const [showActions, setShowActions] = useState(false);
  const {
    state: { currentlyReading, wantToRead, read },
    dispatch,
    presentInCurrentlyRead,
    presentInRead,
    presentInWantToRead,
  } = useBooks();
  return (
    <div className="bookcard">
      <div className="book-img">
        <img src={coverImg} alt={title} />
      </div>
      <div className="desc">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <div className="icon" onClick={() => setShowActions((prev) => !prev)}>
        <FaCaretDown className="arrow" />
      </div>
      {showActions && (
        <div className="actions">
          {presentInCurrentlyRead(book) ? (
            <button
              style={{
                backgroundColor: currentlyReading.find(
                  (item) => item._id === book._id
                )
                  ? "#4ade80"
                  : "",
              }}
              onClick={() =>
                toast.error("Book already in currently reading shelf")
              }
            >
              Currently Reading
            </button>
          ) : (
            <button
              style={{
                backgroundColor: currentlyReading.find(
                  (item) => item._id === book._id
                )
                  ? "#4ade80"
                  : "",
              }}
              onClick={() =>
                dispatch({ type: "ADD_TO_CURRENTLY_READ", payload: book })
              }
            >
              Currently Reading
            </button>
          )}

          {presentInWantToRead(book) ? (
            <button
              style={{
                backgroundColor: wantToRead.find(
                  (item) => item._id === book._id
                )
                  ? "#4ade80"
                  : "",
              }}
              onClick={() => toast.error("Book already in want to read shelf")}
            >
              Want to read
            </button>
          ) : (
            <button
              style={{
                backgroundColor: wantToRead.find(
                  (item) => item._id === book._id
                )
                  ? "#4ade80"
                  : "",
              }}
              onClick={() =>
                dispatch({ type: "ADD_TO_WANT_TO_READ", payload: book })
              }
            >
              Want to read
            </button>
          )}

          {presentInRead(book) ? (
            <button
              style={{
                backgroundColor: read.find((item) => item._id === book._id)
                  ? "#4ade80"
                  : "",
              }}
              onClick={() => toast.error("Book already in read shelf")}
            >
              Read
            </button>
          ) : (
            <button
              style={{
                backgroundColor: read.find((item) => item._id === book._id)
                  ? "#4ade80"
                  : "",
              }}
              onClick={() => dispatch({ type: "ADD_TO_READ", payload: book })}
            >
              Read
            </button>
          )}

          <button
            onClick={() => dispatch({ type: "ADD_TO_BOOKS", payload: book })}
          >
            None
          </button>
        </div>
      )}
    </div>
  );
};

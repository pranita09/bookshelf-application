import { createContext, useContext, useReducer } from "react";
import { books } from "../data/data";

export const BookContext = createContext();

const initialState = {
  books: books,
  currentlyReading: [
    {
      _id: "62f89fcdd3f0aa3df7ca94fd",
      title: "The Book Theif",
      author: "Markus Zusak",
      genres: "Fiction",
      category: "currentlyReading",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg",
    },
    {
      _id: "62f89fcdd3f0aa3df7ca94e1",
      title: "Harry Potter Complete Set",
      author: "J.K. Rowling",
      genres: "Fiction",
      category: "currentlyReading",
      coverImg:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780545162074_p3_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
  ],
  wantToRead: [
    {
      _id: "62f89fcdd3f0aa3df7ca950d",
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      genres: "Fiction",
      category: "wantToRead",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964.jpg",
    },
    {
      _id: "62f89fcdd3f0aa3df7ca9511",
      title: "And Then There Were None",
      author: "Agatha Christie",
      genres: "Mystery",
      category: "wantToRead",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638425885l/16299._SY475_.jpg",
    },
  ],
  read: [
    {
      _id: "62f89fcdd3f0aa3df7ca9505",
      title: "Lean In: Women, Work, and the Will to Lead",
      author: "Sheryl Sandberg",
      genres: "Non-Fiction",
      category: "read",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630483761l/16071764._SY475_.jpg",
    },
    {
      _id: "62f89fcdd3f0aa3df7ca9515",
      title: "Palace of Illusions",
      author: "Chitra Banerjee Divakaruni",
      genres: "Fiction",
      category: "read",
      coverImg:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396229073l/1774836.jpg",
    },
  ],
};

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CURRENTLY_READ":
      return {
        ...state,
        currentlyReading: [...state.currentlyReading, payload],
        wantToRead: state.wantToRead.filter((book) => book._id !== payload._id),
        read: state.read.filter((book) => book._id !== payload._id),
      };
    case "ADD_TO_WANT_TO_READ":
      return {
        ...state,
        wantToRead: [...state.wantToRead, payload],
        currentlyReading: state.currentlyReading.filter(
          (book) => book._id !== payload._id
        ),
        read: state.read.filter((book) => book._id !== payload._id),
      };
    case "ADD_TO_READ":
      return {
        ...state,
        read: [...state.read, payload],
        currentlyReading: state.currentlyReading.filter(
          (book) => book._id !== payload._id
        ),
        wantToRead: state.wantToRead.filter((book) => book._id !== payload._id),
      };
    case "ADD_TO_BOOKS":
      return {
        ...state,
        currentlyReading: state.currentlyReading.filter(
          (book) => book._id !== payload._id
        ),
        wantToRead: state.wantToRead.filter((book) => book._id !== payload._id),
        read: state.read.filter((book) => book._id !== payload._id),
      };
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);

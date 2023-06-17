import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <nav className="navbar">
          <span className="brand">Student App</span>
          <Link to="/">Student List</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
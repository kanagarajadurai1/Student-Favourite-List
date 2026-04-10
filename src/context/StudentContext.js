import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    setFavourites((prev) =>
      prev.find((s) => s.id === student.id) ? prev : [...prev, student]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
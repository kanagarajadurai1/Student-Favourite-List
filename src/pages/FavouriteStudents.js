import { useStudents } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <div className="page">
      <h2>Favourite Students</h2>
      {favourites.length === 0 ? (
        <p className="empty">No favourite students added yet.</p>
      ) : (
        favourites.map((student) => (
          <div className="card" key={student.id}>
            <div className="info">
              <p className="name">{student.name}</p>
              <p className="roll">Roll No: {student.roll}</p>
            </div>
            <button className="btn remove" onClick={() => removeFavourite(student.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;
import { useStudents } from "../context/StudentContext";
import students from "../data/students";

function StudentList() {
  const { addFavourite, removeFavourite, isFavourite } = useStudents();

  return (
    <div className="page">
      <h2>All Students</h2>
      {students.map((student) => (
        <div className="card" key={student.id}>
          <div className="info">
            <p className="name">{student.name}</p>
            <p className="roll">Roll No: {student.roll}</p>
          </div>
          {isFavourite(student.id) ? (
            <button className="btn remove" onClick={() => removeFavourite(student.id)}>
              Remove
            </button>
          ) : (
            <button className="btn add" onClick={() => addFavourite(student)}>
              + Favourite
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;
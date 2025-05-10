import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Students</h2>
      <ul className="space-y-2">
        {students.map(student => (
          <li key={student._id} className="border p-2 rounded">
            {student.user.name} - {student.rollNumber} - {student.class} {student.section}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
];

const Attendance = () => {
  const [students] = useState(initialStudents);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const handleMark = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const presentCount = Object.values(attendance).filter((s) => s === 'Present').length;
  const absentCount = Object.values(attendance).filter((s) => s === 'Absent').length;

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-green-700">Attendance</h1>
        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-green-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg mb-8">
        <table className="min-w-full divide-y divide-green-100">
          <thead className="bg-green-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-green-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-green-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-green-50">
            {students.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-8 text-gray-400">No students found.</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {attendance[student.id] ? (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${attendance[student.id] === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {attendance[student.id]}
                      </span>
                    ) : (
                      <span className="text-gray-400">Not Marked</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
                    <button
                      onClick={() => handleMark(student.id, 'Present')}
                      className={`px-4 py-1 rounded-lg font-semibold ${attendance[student.id] === 'Present' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'} transition`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => handleMark(student.id, 'Absent')}
                      className={`px-4 py-1 rounded-lg font-semibold ${attendance[student.id] === 'Absent' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200'} transition`}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white rounded-xl shadow p-6">
        <div className="flex gap-6">
          <div className="text-green-700 font-bold text-lg">Present: {presentCount}</div>
          <div className="text-red-700 font-bold text-lg">Absent: {absentCount}</div>
        </div>
        <div className="text-gray-600">Total Students: {students.length}</div>
      </div>
    </div>
  );
};

export default Attendance; 
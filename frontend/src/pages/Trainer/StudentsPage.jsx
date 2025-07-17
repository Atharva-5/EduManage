import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', batch: 'Batch A' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', batch: 'Batch A' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', batch: 'Batch B' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', batch: 'Batch B' },
];

const StudentsPage = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [batchFilter, setBatchFilter] = useState('');

  const handleRemove = (id) => {
    if (window.confirm('Remove this student?')) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const filtered = students.filter(
    (s) =>
      (!search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())) &&
      (!batchFilter || s.batch === batchFilter)
  );

  const batches = Array.from(new Set(students.map((s) => s.batch)));

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-purple-700">Students</h1>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-purple-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            value={batchFilter}
            onChange={(e) => setBatchFilter(e.target.value)}
            className="border border-purple-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">All Batches</option>
            {batches.map((batch) => (
              <option key={batch} value={batch}>{batch}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-purple-100">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-purple-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-purple-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-400">No students found.</td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.batch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => alert(`Viewing ${student.name}`)}
                      className="text-blue-600 hover:underline mr-4"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleRemove(student.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
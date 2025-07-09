import React, { useState } from 'react';

const mockBatches = [
  { id: 1, name: 'Batch A' },
  { id: 2, name: 'Batch B' },
];

const mockStudents = {
  1: [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Charlie' },
  ],
  2: [
    { id: 201, name: 'David' },
    { id: 202, name: 'Eva' },
    { id: 203, name: 'Frank' },
  ],
};

const AssignTask = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });
  const [success, setSuccess] = useState(false);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
    setSelectedStudents([]);
    setSuccess(false);
  };

  const handleStudentToggle = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
    setSuccess(false);
  };

  const handleTaskChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBatch || selectedStudents.length === 0 || !task.title || !task.dueDate) return;
    setSuccess(true);
    // Send data to backend here
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg mt-12">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Assign Task to Students
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Select Batch */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Select Batch</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedBatch}
            onChange={handleBatchChange}
            required
          >
            <option value="">-- Select Batch --</option>
            {mockBatches.map((batch) => (
              <option key={batch.id} value={batch.id}>
                {batch.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Students */}
        {selectedBatch && (
          <div>
            <label className="block text-lg font-medium mb-3 text-gray-700">Select Students</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockStudents[selectedBatch].map((student) => (
                <label key={student.id} className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentToggle(student.id)}
                    className="accent-blue-600 h-4 w-4"
                  />
                  <span>{student.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Task Title */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleTaskChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Task Description */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleTaskChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleTaskChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedBatch || selectedStudents.length === 0 || !task.title || !task.dueDate}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            !selectedBatch || selectedStudents.length === 0 || !task.title || !task.dueDate
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Assign Task
        </button>

        {/* Success Message */}
        {success && (
          <div className="text-green-600 text-center mt-4 font-medium">
            ✅ Task assigned successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default AssignTask;

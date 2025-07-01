import React, { useState } from "react";

const Submission = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      id: submissions.length + 1,
      taskName,
      description,
      status,
    };

    setSubmissions([...submissions, newSubmission]);

    // Reset form
    setTaskName("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        📄 Submit Your Task
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-2xl rounded-2xl p-8 mb-12"
      >
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter task name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter task description"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition"
        >
          Submit Task
        </button>
      </form>

      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">🎯 Submitted Tasks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {submissions.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{task.taskName}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                ${task.status === "Completed" ? "bg-green-100 text-green-700" :
                  task.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submission;

import React, { useState } from "react";
import { CheckCircle, Clock, XCircle, X } from "lucide-react";

const Task = () => {
  const [taskData, setTaskData] = useState([
    { id: 1, title: "Math Assignment", description: "Solve algebra problems", status: "Pending", dueDate: "2025-07-05", assignedBy: "Mr. Smith" },
    { id: 2, title: "Science Project", description: "Prepare volcano model", status: "In Progress", dueDate: "2025-07-10", assignedBy: "Ms. Johnson" },
    { id: 3, title: "English Essay", description: "Write about technology", status: "Completed", dueDate: "2025-06-25", assignedBy: "Mrs. Brown" },
    { id: 4, title: "History Notes", description: "World War II summary", status: "Pending", dueDate: "2025-07-08", assignedBy: "Mr. Lee" },
    { id: 5, title: "Computer Lab", description: "HTML and CSS practice", status: "Completed", dueDate: "2025-06-30", assignedBy: "Ms. Davis" },
    { id: 6, title: "Art Homework", description: "Sketch natural scenery", status: "In Progress", dueDate: "2025-07-12", assignedBy: "Mr. Wilson" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: "",
    assignedBy: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newEntry = { ...newTask, id: taskData.length + 1 };
    setTaskData([...taskData, newEntry]);
    setNewTask({ title: "", description: "", status: "Pending", dueDate: "", assignedBy: "" });
    setShowForm(false);
  };

  return (
    <div className="relative">
      {/* Blurred background */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40" onClick={() => setShowForm(false)} />
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Task</h2>
            <form onSubmit={handleAddTask} className="space-y-4">
              <input type="text" name="title" placeholder="Title" required value={newTask.title} onChange={handleInputChange} className="w-full border rounded px-4 py-2" />
              <input type="text" name="assignedBy" placeholder="Assigned By" required value={newTask.assignedBy} onChange={handleInputChange} className="w-full border rounded px-4 py-2" />
              <input type="date" name="dueDate" required value={newTask.dueDate} onChange={handleInputChange} className="w-full border rounded px-4 py-2" />
              <select name="status" value={newTask.status} onChange={handleInputChange} className="w-full border rounded px-4 py-2">
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <textarea name="description" placeholder="Description" required value={newTask.description} onChange={handleInputChange} className="w-full border rounded px-4 py-2" />
              <button type="submit" className="bg-blue-600 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Task</button>
            </form>
          </div>
        </div>
      )}

      {/* Main Task Page */}
      <div className={`p-6 min-h-screen transition ${showForm ? "blur-sm pointer-events-none" : ""} bg-gradient-to-br from-blue-50 to-purple-100`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700">Task List</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {taskData.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {task.status === "Completed" ? (
                  <CheckCircle className="text-green-600 mr-2" size={24} />
                ) : task.status === "In Progress" ? (
                  <Clock className="text-yellow-600 mr-2" size={24} />
                ) : (
                  <XCircle className="text-red-600 mr-2" size={24} />
                )}
                <h2 className="text-xl font-semibold text-blue-700">{task.title}</h2>
              </div>
              <p className="text-gray-600 mb-3">{task.description}</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500"><span className="font-medium">Due:</span> {task.dueDate}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">By:</span> {task.assignedBy}</p>
              </div>
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
    </div>
  );
};

export default Task;

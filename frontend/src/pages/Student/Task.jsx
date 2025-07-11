import React from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const taskData = [
  { id: 1, title: "Math Assignment", description: "Solve algebra problems", status: "Pending", dueDate: "2025-07-05", assignedBy: "Mr. Smith" },
  { id: 2, title: "Science Project", description: "Prepare volcano model", status: "In Progress", dueDate: "2025-07-10", assignedBy: "Ms. Johnson" },
  { id: 3, title: "English Essay", description: "Write about technology", status: "Completed", dueDate: "2025-06-25", assignedBy: "Mrs. Brown" },
  { id: 4, title: "History Notes", description: "World War II summary", status: "Pending", dueDate: "2025-07-08", assignedBy: "Mr. Lee" },
  { id: 5, title: "Computer Lab", description: "HTML and CSS practice", status: "Completed", dueDate: "2025-06-30", assignedBy: "Ms. Davis" },
  { id: 6, title: "Art Homework", description: "Sketch natural scenery", status: "In Progress", dueDate: "2025-07-12", assignedBy: "Mr. Wilson" },
];

const Task = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">🎒 Task List</h1>

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
              <p className="text-sm text-gray-500">
                <span className="font-medium">Due:</span> {task.dueDate}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">By:</span> {task.assignedBy}
              </p>
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
  );
};

export default Task;

// src/components/TrainerDashboard.jsx
import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaChartLine, FaCog, FaHome, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-4">
                <nav className="space-y-4">
                    <button className="flex items-center w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-md">
                        <FaHome className="mr-2" /> Dashboard
                    </button>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => navigate('/trainer/studentsPage')}>
                        <FaUsers className="mr-2" /> Students
                    </button>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => navigate('/student/Task')}>
                        <FaCog className="mr-2" /> Tasks
                    </button>
                    <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded-md">
                        <FaFileAlt className="mr-2" /> Reports
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h2 className="text-3xl font-semibold mb-6">Student Dashboard</h2>

                {/* Top Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-lg font-medium text-gray-600">Total Tasks</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">1,250</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-lg font-medium text-gray-600">Tasks Assigned</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">58</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-lg font-medium text-gray-600">Attendance Marked</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">92%</p>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow col-span-2">
                        <h4 className="text-lg font-semibold mb-2">Attendance Trend</h4>
                        <div className="h-40 bg-blue-100 rounded"></div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h4 className="text-lg font-semibold mb-4">Recent Activity</h4>
                        <ul className="space-y-3">
                            <li className="flex justify-between">
                                <span>Mark Attendance - Batch A</span>
                                <span className="text-sm text-gray-500">2h ago</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Assigned Task - React Project</span>
                                <span className="text-sm text-gray-500">5h ago</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Updated Report - Batch B</span>
                                <span className="text-sm text-gray-500">1d ago</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;

import React from 'react';
import { Card, CardContent } from "../../components/Card";
import { User, Users, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-blue-50 p-4">
        <div className="flex items-center mb-10">
          <div className="bg-blue-600 text-white p-2 rounded-full">
            <User size={24} />
          </div>
          <span className="ml-2 text-xl font-bold">EduManage</span>
        </div>
        <nav className="space-y-4">
          <button className="flex items-center w-full p-2 text-blue-700 bg-blue-100 rounded-lg">
            <BarChart3 className="mr-2" />
            Dashboard
          </button>
          <button className="flex items-center w-full p-2 hover:bg-blue-100 rounded-lg">
            <Users className="mr-2" />
            Students
          </button>
          <button className="flex items-center w-full p-2 hover:bg-blue-100 rounded-lg">
            <User className="mr-2" />
            Trainers
          </button>
          <button className="flex items-center w-full p-2 hover:bg-blue-100 rounded-lg">
            <BarChart3 className="mr-2" />
            Reports
          </button>
          <button className="flex items-center w-full p-2 hover:bg-blue-100 rounded-lg">
            <Settings className="mr-2" />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <User className="text-blue-600 mb-2" size={32} />
              <p className="text-gray-500">Total Assignments</p>
              <p className="text-2xl font-bold">1,250</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Users className="text-blue-600 mb-2" size={32} />
              <p className="text-gray-500">Total Submission</p>
              <p className="text-2xl font-bold">25</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <BarChart3 className="text-blue-600 mb-2" size={32} />
              <p className="text-gray-500">Attendance</p>
              <p className="text-2xl font-bold">430</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <p className="mb-2 font-semibold">Batch Progress</p>
              <motion.div
                className="h-32 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="mb-2 font-semibold">Student Submissions</p>
              <motion.div
                className="h-32 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="mb-4 font-semibold">Final Reports</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Alice Johnson</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Common Pages
import Home from './pages/Home';
import Task from './pages/Student/Task';
import Attendance from './pages/Attendance';
import Batch from './pages/Batch';
import AssignTask from './pages/Trainer/AssignTask';
import StudentPage from './pages/Trainer/StudentsPage';

// Login Pages
import StudentLogin from './pages/Student/StudentLogin';
import TrainerLogin from './pages/Trainer/TrainerLogin';
import AdminLogin from './pages/Admin/AdminLogin';

// Register Pages
import StudentRegister from './pages/Student/StudentRegister';
import TrainerRegister from './pages/Trainer/TrainerRegister';
import AdminRegister from './pages/Admin/AdminRegister';

// Dashboard Pages
import StudentDashboard from './pages/Student/StudentDashboard';
import TrainerDashboard from './pages/Trainer/TrainerDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Submission from './pages/Student/Submission';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/attendance" element={<Attendance />} />

          {/* Login Routes */}
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/trainer" element={<TrainerLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />

          {/* Register Routes */}
          <Route path="/register/student" element={<StudentRegister />} />
          <Route path="/register/trainer" element={<TrainerRegister />} />
          <Route path="/register/admin" element={<AdminRegister />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/trainer" element={<TrainerDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />

          {/* functionality for trainer */}
          <Route path="trainer/assigntask" element={<AssignTask />} />
          <Route path="trainer/studentsPage" element={<StudentPage />} />

          <Route path="/student/task" element={<Task />} />
          <Route path="/student/submission" element={<Submission />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;

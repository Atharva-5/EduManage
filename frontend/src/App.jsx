import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Common Pages
import Home from './pages/Home';
import Task from './pages/Task';
import Attendance from './pages/Attendance';
import Batch from './pages/Batch';

// Login Pages
import StudentLogin from './pages/Login/StudentLogin';
import TrainerLogin from './pages/Login/TrainerLogin';
import AdminLogin from './pages/Login/AdminLogin';

// Register Pages
import StudentRegister from './pages/Register/StudentRegister';
import TrainerRegister from './pages/Register/TrainerRegister';
import AdminRegister from './pages/Register/AdminRegister';

// Dashboard Pages
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TrainerDashboard from './pages/Dashboard/TrainerDashboard';
import AdminDashboard from './pages/Dashboard/AdminDashboard';

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

        </Routes>
      </div>
    </Router>
  );
}

export default App;

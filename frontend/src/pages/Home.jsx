import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HiAcademicCap,
    HiClipboardList,
    HiUserGroup,
    HiChartBar,
    HiSparkles,
    HiOutlineChevronDoubleDown,
} from 'react-icons/hi';
import dashboardImg from '../assets/dashboard.png';

// Workflow steps
const steps = [
    {
        icon: <HiAcademicCap className="w-10 h-10 text-blue-600" />,
        title: 'Student Registration',
        desc: 'Sign up for educational programs effortlessly through a user-friendly interface.',
    },
    {
        icon: <HiUserGroup className="w-10 h-10 text-blue-600" />,
        title: 'Batch Assignment',
        desc: 'Admin seamlessly groups students and assigns them to trainers.',
    },
    {
        icon: <HiClipboardList className="w-10 h-10 text-blue-600" />,
        title: 'Assignments & Tasks',
        desc: 'Trainers provide course-aligned assignments and tasks for each batch.',
    },
    {
        icon: <HiChartBar className="w-10 h-10 text-blue-600" />,
        title: 'Submission & Reporting',
        desc: 'Submissions are reviewed and final reports are generated automatically.',
    },
];

// Divider component
const SectionDivider = () => (
    <div className="flex items-center justify-center my-10">
        <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full opacity-60" />
        <HiOutlineChevronDoubleDown className="mx-4 text-blue-400 text-2xl animate-bounce" />
        <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full opacity-60" />
    </div>
);

// Fade-in animation utility
const fadeIn = 'animate-fadeIn';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-800">
            {/* Hero Section */}
            <section className={`relative z-20 text-center py-16 sm:py-24 px-2 sm:px-4 bg-white shadow-lg rounded-b-3xl ${fadeIn}`}>
                <div className="flex flex-col items-center gap-2 mb-3">
                    <HiSparkles className="text-blue-500 text-3xl sm:text-4xl animate-pulse" />
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-950 mb-2 leading-tight drop-shadow-sm">
                        Welcome to <span className="text-blue-600">EduManage</span>
                    </h1>
                </div>
                <p className="text-base sm:text-lg max-w-md sm:max-w-2xl mx-auto text-gray-600 mb-8 sm:mb-10">
                    Streamline the educational journey — from enrollment to evaluation — with our powerful and intuitive management platform.
                </p>
                <button
                    onClick={() => navigate('/register')}
                    className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 text-base sm:text-lg"
                >
                    Get Started
                </button>
            </section>

            <SectionDivider />

            {/* Workflow Section */}
            <section className={`py-10 sm:py-16 bg-gradient-to-br from-blue-100 to-blue-50 ${fadeIn}`}>
                <div className="max-w-6xl mx-auto px-2 sm:px-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                        <HiClipboardList className="text-blue-600 text-2xl sm:text-3xl" />
                        <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 tracking-tight">
                            How EduManage Works
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-5 sm:p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center min-h-[220px] sm:min-h-[260px]"
                            >
                                <div className="mb-3 sm:mb-4 flex-shrink-0">{step.icon}</div>
                                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1 sm:mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Features Section */}
            <section className={`py-10 sm:py-16 px-2 sm:px-6 bg-white ${fadeIn}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <HiSparkles className="text-blue-500 text-xl sm:text-2xl" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-2">
                                Why Choose EduManage?
                            </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                            EduManage digitizes the entire educational workflow with ease, transparency, and efficiency.
                        </p>
                        <ul className="space-y-2 sm:space-y-3 text-gray-700 font-medium text-sm sm:text-base">
                            <li>✅ Intuitive Student Onboarding</li>
                            <li>✅ Role-based Dashboards</li>
                            <li>✅ Automated Assignment Handling</li>
                            <li>✅ Centralized Submission Tracker</li>
                            <li>✅ Admin Reports with One Click</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/education-online-training-courses-illustration_335657-6054.jpg?w=826"
                            alt="Education Features"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md border border-blue-100 object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Trainer Role Section */}
            <section className={`py-10 sm:py-16 px-2 sm:px-6 bg-gradient-to-br from-blue-50 to-blue-100 ${fadeIn}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            src="https://img.freepik.com/free-vector/teacher-concept-illustration_114360-2167.jpg"
                            alt="Trainer Role"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md border border-blue-100 object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-2 mb-2">
                            <HiUserGroup className="text-blue-500 text-xl sm:text-2xl" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-2">
                                Empowering Trainers
                            </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                            Trainers can create assignments, track student progress, and evaluate submissions using an intuitive interface.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 text-gray-700 font-medium text-sm sm:text-base">
                            <li>📌 Assign tasks to students</li>
                            <li>📈 Monitor batch performance</li>
                            <li>📝 Provide feedback & grades</li>
                            <li>📤 Share submissions with Admin</li>
                        </ul>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Student Role Section */}
            <section className={`py-10 sm:py-16 px-2 sm:px-6 bg-white ${fadeIn}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <HiAcademicCap className="text-blue-500 text-xl sm:text-2xl" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-2">
                                Student Journey
                            </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                            From registration to feedback, EduManage ensures a seamless learning experience for students.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 text-gray-700 font-medium text-sm sm:text-base">
                            <li>📝 Simple onboarding</li>
                            <li>📚 View all tasks in one place</li>
                            <li>⏳ Meet assignment deadlines</li>
                            <li>📨 Receive trainer feedback instantly</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/0*wQwN0bVMNY0dYfRr.jpeg"
                            alt="Student Journey"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md border border-blue-100 object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Admin Dashboard Section */}
            <section className={`py-10 sm:py-16 px-2 sm:px-6 bg-gradient-to-br from-blue-100 to-blue-50 ${fadeIn}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            src={dashboardImg}
                            alt="Admin Dashboard"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-xl border border-blue-100 object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-2 mb-2">
                            <HiChartBar className="text-blue-500 text-xl sm:text-2xl" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-2">
                                Admin Dashboard
                            </h2>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                            Admins oversee everything from batch creation to final reporting using a single powerful dashboard.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 text-gray-700 font-medium text-sm sm:text-base">
                            <li>🎛 Manage students & batches</li>
                            <li>📌 Assign trainers to batches</li>
                            <li>📊 Generate analytics & reports</li>
                            <li>🔒 Centralized control & security</li>
                        </ul>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Final CTA Section */}
            <section className={`py-14 sm:py-20 px-2 sm:px-6 bg-blue-950 text-white text-center shadow-inner rounded-t-3xl ${fadeIn}`}>
                <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <HiSparkles className="text-blue-200 text-2xl sm:text-3xl animate-pulse" />
                    Ready to Transform Learning?
                </h2>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto">
                    Join EduManage today and simplify your educational management from registration to reporting.
                </p>
                <button
                    onClick={() => navigate('/register')}
                    className="bg-white text-blue-950 font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 text-base sm:text-lg"
                >
                    Start Now
                </button>
            </section>

            <footer className="bg-blue-900 text-white text-center py-3 sm:py-5 mt-0 shadow-inner text-xs sm:text-sm">
                <p>
                    &copy; {new Date().getFullYear()} EduManage. Crafted with ❤️ for modern education.
                </p>
            </footer>
        </div>
    );
};

export default Home;

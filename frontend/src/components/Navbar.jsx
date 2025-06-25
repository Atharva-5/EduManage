import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [authDropdownOpen, setAuthDropdownOpen] = useState(false);

    const handleNav = (path) => {
        setMenuOpen(false);
        setAuthDropdownOpen(false);
        navigate(path);
    };

    return (
        <nav className="bg-blue-950 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <h1
                    className="text-2xl font-bold text-white cursor-pointer tracking-wide hover:text-blue-300 transition"
                    onClick={() => handleNav('/')}
                >
                    EduManage
                </h1>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4 items-center relative">
                    <button
                        onClick={() => handleNav('/attendance')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer"
                    >
                        Attendance
                    </button>
                    <button
                        onClick={() => handleNav('/batch')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer"
                    >
                        Batch
                    </button>
                    <button
                        onClick={() => handleNav('/task')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer"
                    >
                        Task
                    </button>

                    {/* Auth Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                            className="bg-blue-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition cursor-pointer"
                        >
                            Sign In ▾
                        </button>
                        {authDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                <button
                                    onClick={() => handleNav('/login/student')}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Login as Student
                                </button>
                                <button
                                    onClick={() => handleNav('/login/trainer')}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Login as Trainer
                                </button>
                                <button
                                    onClick={() => handleNav('/login/admin')}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Login as Admin
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-950 px-4 pb-4 pt-2 shadow-lg animate-fadeIn">
                    <button
                        onClick={() => handleNav('/attendance')}
                        className="block w-full text-left text-white py-2 px-2 rounded hover:bg-blue-900 transition font-medium"
                    >
                        Attendance
                    </button>
                    <button
                        onClick={() => handleNav('/batch')}
                        className="block w-full text-left text-white py-2 px-2 rounded hover:bg-blue-900 transition font-medium"
                    >
                        Batch
                    </button>
                    <button
                        onClick={() => handleNav('/task')}
                        className="block w-full text-left text-white py-2 px-2 rounded hover:bg-blue-900 transition font-medium"
                    >
                        Task
                    </button>

                    {/* Auth Dropdown for Mobile */}
                    <div className="mt-4 border-t border-blue-800 pt-2">
                        <span className="text-white font-semibold text-sm">Sign In</span>
                        {[
                            { label: 'Login as Student', path: '/login/student' },
                            { label: 'Login as Trainer', path: '/login/trainer' },
                            { label: 'Login as Admin', path: '/login/admin' },
                        ].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleNav(item.path)}
                                className="block w-full text-left text-white py-2 px-2 rounded hover:bg-blue-900 transition"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

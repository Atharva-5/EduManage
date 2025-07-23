import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const authOptions = [
    { label: 'Login as Student', path: '/login/student' },
    { label: 'Login as Trainer', path: '/login/trainer' },
    { label: 'Login as Admin', path: '/login/admin' },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
    const authDropdownRef = useRef();

    // Close Auth dropdown on outside click (for desktop)
    useEffect(() => {
        const handleClick = (e) => {
            if (
                authDropdownRef.current &&
                !authDropdownRef.current.contains(e.target)
            ) {
                setAuthDropdownOpen(false);
            }
        };
        if (authDropdownOpen) {
            document.addEventListener('mousedown', handleClick);
        }
        return () => document.removeEventListener('mousedown', handleClick);
    }, [authDropdownOpen]);

    // Lock scroll on open mobile menu
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Helper to navigate and close menus
    const handleNav = (path) => {
        setMenuOpen(false);
        setAuthDropdownOpen(false);
        navigate(path);
    };

    return (
        <nav className="bg-blue-950 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                {/* Logo/Home */}
                <button
                    onClick={() => handleNav('/')}
                    className="text-2xl font-bold text-white cursor-pointer tracking-wide hover:text-blue-300 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Go to home"
                >
                    EduManage
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-4 items-center relative">
                    <button
                        onClick={() => handleNav('/attendance')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Attendance
                    </button>
                    <button
                        onClick={() => handleNav('/batch')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Batch
                    </button>
                    <button
                        onClick={() => handleNav('/task')}
                        className="text-white hover:text-blue-300 font-medium transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Task
                    </button>

                    {/* Auth Dropdown */}
                    <div className="relative" ref={authDropdownRef}>
                        <button
                            aria-haspopup="true"
                            aria-expanded={authDropdownOpen ? 'true' : 'false'}
                            onClick={() => setAuthDropdownOpen((open) => !open)}
                            className="bg-blue-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Sign In <span aria-hidden="true">▾</span>
                        </button>
                        {authDropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-xl z-50 ring-1 ring-blue-200"
                                role="menu"
                                aria-label="Sign In"
                            >
                                {authOptions.map((item, idx) => (
                                    <button
                                        key={item.path}
                                        onClick={() => handleNav(item.path)}
                                        className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-950 focus:bg-blue-100 transition cursor-pointer"
                                        role="menuitem"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Hamburger (Mobile) */}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu Drawer/Dropdown */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-blue-950 bg-opacity-95 z-[999] transition-all duration-200 ${menuOpen ? 'block animate-fadeIn' : 'hidden'
                    }`}
                aria-label="Mobile Navigation"
            >
                <div className="flex justify-between items-center px-4 pt-4 pb-2">
                    <button
                        onClick={() => handleNav('/')}
                        className="text-xl text-white font-bold tracking-wider focus:outline-none"
                        aria-label="Go to home"
                    >
                        EduManage
                    </button>
                    <button
                        className="text-white text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <HiX />
                    </button>
                </div>
                <div className="flex flex-col px-4 pt-4 gap-1">
                    {['/attendance', '/batch', '/task'].map((path, idx) => (
                        <button
                            key={path}
                            onClick={() => handleNav(path)}
                            className="w-full text-left text-white py-3 px-2 rounded-md text-lg hover:bg-blue-900 transition font-medium focus:outline-none focus:bg-blue-800 focus:ring-1 focus:ring-blue-200"
                        >
                            {['Attendance', 'Batch', 'Task'][idx]}
                        </button>
                    ))}
                </div>
                {/* Auth Dropdown for Mobile */}
                <div className="px-4 mt-4 pt-4 border-t border-blue-800">
                    <div className="text-blue-100 font-bold uppercase mb-2 text-xs tracking-wider">
                        Sign In
                    </div>
                    <div className="flex flex-col gap-1">
                        {authOptions.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className="w-full text-left text-white py-3 px-2 rounded-md hover:bg-blue-900 transition text-base focus:outline-none focus:bg-blue-800 focus:ring-1 focus:ring-blue-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

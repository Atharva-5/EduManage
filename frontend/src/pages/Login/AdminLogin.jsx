import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in as Admin: ${email}`);
        // Redirect after login (mock)
        navigate('/dashboard/admin');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-white">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-center text-red-600 mb-8">Admin Login</h2>

                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Log In
                </button>

                <div className="text-center mt-6">
                    <span className="text-sm text-gray-600">Don't have an account?</span>
                    <button
                        type="button"
                        onClick={() => navigate('/register/admin')}
                        className="ml-2 text-sm text-red-700 hover:underline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;

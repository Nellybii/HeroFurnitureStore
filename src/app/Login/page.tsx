'use client'

import React, { useState } from 'react';
import Button from '../components/Buttons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: handle login logic here
    console.log('Login with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600">Remember me</label>
          </div>
          <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
        </div>

        <Button
          type="submit"
          className="w-full text-white py-2 rounded-md"
        >
          Login
        </Button>
        <p className="text-center text-gray-600">
          Don't have an account? <a href="/Register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

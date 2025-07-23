'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Buttons';

const Register = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${form.firstName} ${form.lastName}`;
    const userData = {
      name: fullName,
      email: form.email,
      password: form.password,
      address: form.address,
      city: form.city,
    };

    console.log('Registering user:', userData);

    // Ideally send userData to your backend here

    // Redirect to login page after registration
    router.push('/Login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">First Name</label>
            <input
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Last Name</label>
            <input
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Address</label>
          <input
            name="address"
            type="text"
            required
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">City</label>
          <input
            name="city"
            type="text"
            required
            value={form.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <Button
          type="submit"
          className="w-full text-white py-2 rounded-md"
        >
          Register
        </Button>
        <p className="text-center text-gray-600">
          Already have an account? <a href="/Login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;

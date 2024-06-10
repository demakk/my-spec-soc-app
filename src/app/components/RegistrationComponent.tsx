"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../backendless';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await registerUser(data);
      console.log('User registered:', response);
    } catch (error: any) {
      console.error('Error registering user:', error.message);
    }
  };

  const validateAge = (value: any) => {
    if (isNaN(value) || value < 5) {
      return "You must be at least 5 years old";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email', { required: true })} className="input" />
        {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password', { required: true })} className="input" />
        {errors.password && <p className="text-red-500 text-xs italic">Password is required</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input id="name" type="text" {...register('name', { required: true })} className="input" />
        {errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age', { required: true, validate: validateAge })} className="input" />
        {errors.age && <p className="text-red-500 text-xs italic"></p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sex">Sex</label>
        <input id="sex" type="text" {...register('sex', { required: true })} className="input" />
        {errors.sex && <p className="text-red-500 text-xs italic">Sex is required</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country</label>
        <input id="country" type="text" {...register('country', { required: true })} className="input" />
        {errors.country && <p className="text-red-500 text-xs italic">Country is required</p>}
      </div>
      <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
    </form>
  );
};

export default RegistrationForm;

"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../backendless';

interface LoginForm{
    email: string,
    password: string,
};


const LoginComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await loginUser(data.email, data.password);
      console.log('User logged in:', response);
      // Handle session storage or cookies if necessary
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email')} />
        {errors.email && <p></p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p></p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;

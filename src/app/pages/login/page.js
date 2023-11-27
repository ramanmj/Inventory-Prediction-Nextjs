"use client"
import axios from 'axios';
import { constrainedMemory } from 'process';
import { useState } from 'react';

const LoginPage = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [err,setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();


 
    const data = {
        Email,
        Password
    }

    try {
      const response = await axios.post('https://localhost:7101/login', data,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      console.log(response.data)
      if (response.data) {
        console.log("login in ")
      window.location.href = '/pages/';

        // Handle successful login
      } else {
        console.log("login failed")
        // Handle login error
      }
    } catch (error) {
      setError(error);
      console.error('An error occurred:', error);
    }

    if(err == null){
    }
  };

  return (
    <div >
      <div className=' flex justify-center	 item-center m-20'>
      <form onSubmit={handleLogin} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h1 className='pb-4 flex justify-center block text-gray-700 text-sm font-bold mb-2'>Login</h1>

        <div className='mb-4'>
          <label className=' block text-gray-700 text-sm font-bold mb-2'>Email:</label>
          <input
            type="text"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className=' block text-gray-700 text-sm font-bold mb-2'>Password:</label>
          <input  
            type="password"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div >
        <div className='flex items-center justify-between'>
         <button type="submit" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>

        </div>
      </form>
      </div>
      
    </div>
  );
};

export default LoginPage;

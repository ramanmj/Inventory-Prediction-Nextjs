// components/ProductForm.js
"use client"
import { useState } from "react";
import axios from "axios";

const RawForm = () => {
  const [Materialname, setMaterialname] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Materialname,
      weight,
      price,
      room
    };

    try {
      const response = await axios.post("https://localhost:7101/addRawMaterial/", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the Content-Type header to form data
        },
      });
      console.log(response.data);
      }
     catch (error) {
      setMessage("Error creating product");
    }
  };

  return (
    <div className=' flex justify-center	 item-center m-20'>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='pb-4 flex justify-center block text-gray-700 text-sm font-bold mb-2'>Add Raw Material</h1>

        <div className='mb-4'>
          <label className=' block text-gray-700 text-sm font-bold mb-2'>
            Product Name:
            <input
              type="text"
              value={Materialname}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setMaterialname(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className=' block text-gray-700 text-sm font-bold mb-2'>
            Weight:
            <input
              type="text"
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-4'>
        <label className=' block text-gray-700 text-sm font-bold mb-2'>
          Price:
          <input
            type="text"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={price}
            onChange={(e) => setPrice(e.target.value)}

            
          />
        </label>
        </div>
        <div className='mb-4'>
        <label className=' block text-gray-700 text-sm font-bold mb-2'>
          Room:
          <input
            type="text"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={room}
            onChange={(e) => setRoom(e.target.value)}

            
          />
        </label>
        </div>
        <button type="submit" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Create Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RawForm;

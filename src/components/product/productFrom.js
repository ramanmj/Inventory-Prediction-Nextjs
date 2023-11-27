// components/ProductForm.js
"use client"
import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [Productname, setProductName] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Productname,
      Description,
      weight,
      price,
      size,
      room
    };

    try {
      const response = await axios.post("https://localhost:7101/addproduct/", data, {
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
    <div>
      <div className=" flex justify-center	 item-center m-20">
      <form onSubmit={handleSubmit}>
        <h1 className="pb-4 flex justify-center block text-gray-700 text-sm font-bold mb-2" > Product Form</h1>
        <div >
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Product Name:
            <input
              type="text"
              value={Productname}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Description:
            <input
              type="text"
              value={Description}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Weight:
            <input
              type="text"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            size:
            <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </label>
        </div>
        <div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Price:
          <input
            type="text"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={price}
            onChange={(e) => setPrice(e.target.value)}

            
          />
        </label>
        </div>
        <div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
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
      </div>
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductForm;

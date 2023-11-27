"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react"

export default function EditProductPage() {
  const params = useParams();
  // console.log(params.id);

  const [rawMaterial, setrawMaterial] = useState([]);
  const [Materialname, setMaterialName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("");
  const [err, seterror] = useState([]);

useEffect(() => {
  fetchData();
}, []);

// console.log(id)


const fetchData = async () => {
  try {
    const response = await axios.get(`https://localhost:7101/getRawMaterial/${params.id}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status} sdfsf`);
    }
    // Assuming the response contains the product data, set it in the state.
    setrawMaterial([response.data]);
  } catch (error) {
    seterror(`Error fetching data: ${error.message}`);
    console.error(error);
  }
  
};


const updateData = async (e) => {
  e.preventDefault();

  const id = params.id; 

  const data = {
    id,
    Materialname,
    weight,
    price,
    status,
    room,
  };

  
  try {
    // const response = await axios.get(`https://localhost:7101/products/${params.id}`);
    const response = await axios.put(`https://localhost:7101/updateMaterials/${params.id}`, data);

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    // Assuming the response contains the product data, set it in the state.
    console.log([response.data]);
  } catch (error) {
    seterror(`Error fetching data: ${error.message}`);
    console.error(error);
  }
  
}

  return (
    rawMaterial.map((raw) => (
    <div key={raw.id} className=' flex justify-center	 item-center m-20'>
       <form onSubmit={updateData}  className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h1 className='pb-4 flex justify-center block text-gray-700 text-sm font-bold mb-2'>Update Material</h1>
        <div className='mb-4'>
            <label htmlFor="name" className=' block text-gray-700 text-sm font-bold mb-2'>Name:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="name" name="name" placeholder={raw.materialname}  value={Materialname}
            onChange={(e) => setMaterialName(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="weight" className=' block text-gray-700 text-sm font-bold mb-2'>Weight:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" id="weight" name="weight" placeholder={raw.weight} value={weight}
            onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="price" className=' block text-gray-700 text-sm font-bold mb-2'>Price:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="price" name="price" placeholder={raw.price} value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="room" className=' block text-gray-700 text-sm font-bold mb-2'>Price:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="room" name="room" placeholder={raw.room} value={room}
            onChange={(e) => setRoom(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="code" className=' block text-gray-700 text-sm font-bold mb-2'>Status:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="code" name="code" placeholder={raw.status} value={status}
            onChange={(e) => setStatus(e.target.value)} />
        </div>

        <div>
          <button type="submit"className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Update</button>
        </div>
    </form>
    </div>
      ))

  );
}


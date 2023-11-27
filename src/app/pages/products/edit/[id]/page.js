"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react"

export default function EditProductPage() {
  const params = useParams();
  // console.log(params.id);

  const [products, setProducts] = useState([]);
  const [Productname, setProductName] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [room, setRoom] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("");
  const [err, seterror] = useState([]);

useEffect(() => {
  fetchData();
}, []);

// console.log(id)


const fetchData = async () => {
  try {
    const response = await axios.get(`https://localhost:7101/products/${params.id}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    // Assuming the response contains the product data, set it in the state.
    setProducts([response.data]);
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
    Productname,
    Description,
    weight,
    price,
    status,
    room,
    size
  };

  
  try {
    // const response = await axios.get(`https://localhost:7101/products/${params.id}`);
    const response = await axios.put(`https://localhost:7101/updateproduct/${params.id}`, data);

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
    products.map((product) => (
    <div key={product.id} className=' flex justify-center	 item-center m-20'>
       <form onSubmit={updateData} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div><h1 className='pb-4 flex justify-center block text-gray-700 text-xl font-bold mb-2'>Update Product</h1></div>
        <div className='mb-4'>
            <label htmlFor="name" className=' block text-gray-700 text-sm font-bold mb-2'>Name:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type="text" id="name" name="name" placeholder={product.productname}  value={Productname}
            onChange={(e) => setProductName(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="description" className=' block text-gray-700 text-sm font-bold mb-2'>Description:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text" id="description" name="description" placeholder={product.description}  value={Description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="weight" className=' block text-gray-700 text-sm font-bold mb-2'>Weight:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="number" id="weight" name="weight" placeholder={product.weight} value={weight}
            onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="Size" className=' block text-gray-700 text-sm font-bold mb-2'>Size:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="number" id="Size" name="Size" placeholder={product.size}  value={size}
            onChange={(e) => setSize(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="price" className=' block text-gray-700 text-sm font-bold mb-2'>Price:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type="text" id="price" name="price" placeholder={product.price} value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="room" className=' block text-gray-700 text-sm font-bold mb-2'>Room:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type="text" id="room" name="room" placeholder={product.room} value={room}
            onChange={(e) => setRoom(e.target.value)} />
        </div>

        <div className='mb-4'>
            <label htmlFor="code" className=' block text-gray-700 text-sm font-bold mb-2'>Status:</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text" id="code" name="code" placeholder={product.status} value={status}
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


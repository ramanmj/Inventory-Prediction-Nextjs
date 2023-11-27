"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react"

export default function deleteItem() {
  const params = useParams();
//   console.log(params.id);
const [err, seterror] = useState([]);

useEffect(() => {
    deleteData();
    window.location.href = '/pages/raw';

  }, []);

const deleteData = async () => {
    try {
      const response = await axios.delete(`https://localhost:7101/Delete/${params.id}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }else{
        const data = await response.json();
        setProducts(data);
        console.log(products);
      }
      
      
    } catch (error) {
      seterror("Error fetching data",error);
      console.log(err)
    }
  };


}
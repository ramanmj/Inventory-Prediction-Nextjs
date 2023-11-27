"use client"
import { useEffect, useState } from "react"
// import fetchData from "../../app/pages/api/product"
import fetchProduct from '../product/singleFetch'
import Link from "next/link";
import {  useRouter } from "next/navigation";


export default function RawTable(){
  const router = useRouter();

    const [rawMaterial, setrawMaterial] = useState([]);
    const [err, seterror] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:7101/getRawMaterials/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setrawMaterial(data);
      console.log(rawMaterial);
      
    } catch (error) {
      seterror("Error fetching data",error);
      console.log(err)
    }
  };

    return (
        <div>
            <table className="w-full">
                <thead align="left">
                    <tr className="bg-white border-b-2 border-gray-200">
                        <th  className="px-6 py-4">Materialname</th>
                        <th  className="px-6 py-4">Weight</th>
                        <th  className="px-6 py-4">Room</th>
                        <th  className="px-6 py-4">Price</th>
                        <th  className="px-6 py-4">Status</th>
                        <th  className="px-6 py-4">Created at</th>

                    </tr>
                </thead>
                <tbody>
                {rawMaterial.map((raw) => (
                        <tr key={raw.id} className="bg-white border-b-2 border-gray-200">
                          <td className="px-6 py-4" >{raw.materialname}</td>
                          <td className="px-6 py-4">{raw.weight}</td>
                          <td className="px-6 py-4">{raw.room}</td>
                          <td className="px-6 py-4">{raw.price}</td>
                          <td className="px-6 py-4">{raw.status}</td>
                          <td className="px-6 py-4">{raw.dateTime}</td>
                          <td className="px-6 py-4">
                          <Link href={`/pages/raw/edit/${raw.id}`}>
                            Edit
                          </Link>

                          </td>                          
                          <td className="px-6 py-4">
                            <Link href={`/pages/raw/delete/${raw.id}`}>
                              Delete
                            </Link></td>
                      </tr>
                    ))}
                  
                </tbody>
            </table>
        </div>
    )
}
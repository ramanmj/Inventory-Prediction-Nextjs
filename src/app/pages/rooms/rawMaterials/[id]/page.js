"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import {useEffect,useState} from 'react'
import Link from 'next/link';
import Search from '@/icons/search';
import Nav from '@/components/nav';
import SideNav from '@/components/sidenav';

export default function RawMaterialPage() {
    const params = useParams();

    const [rawMaterial, setrawMaterial] = useState([]);
    const [err, seterror] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://localhost:7101/rooms/${params.id}`);
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
        <div>
            <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                
        <div className='bg-gray-100 flex flex-col p-10 w-11/12 '>
                <div className='title font-bold text-2xl mb-2'><h1 >RawMaterials</h1></div>
                <div className="Pro-nav flex p-4 bg-white border-b-2 border-gray-200">

                    <div className="search w-4/12">
                        <form className='relative'>
                            <input type="search" id="gsearch" name="gsearch" className="border border-solid border-gray rounded-sm bg-gray-200 h-8 pl-8 "></input>
                            <button className='absolute text-gray-400 left-0 top-0 p-1.5 hover:text-black flex justify-center '><Search /></button>
                        </form>
                    </div>
                    <div className='blank w-6/12'></div>
                    <div className="newproduct w-2/12 flex flex-wrap justify-end">
                        <button name="newProduct"    className="border border-solid bg-[#0845ff] text-xs    h-8 p-2 rounded-md text-white  ">
                <Link href={`/pages/raw/create`}>
                    New Material
                </Link>
            </button>
        </div>
    </div>
    <div className='ptable pt-10 bg-white  border-b-2 border-gray-200 '>
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
    </div>
        </div>
            </div>
        </div>
        
        </div>
    </div>
    )
}

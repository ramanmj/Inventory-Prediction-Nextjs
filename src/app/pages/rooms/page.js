"use client"
import axios from 'axios';
import { useEffect, useState } from "react"
import Nav from "../../../components/nav"
import SideNav from "../../../components/sidenav"
import Link from 'next/link';


export default function aRooms(){

    const [products, setProducts] = useState([]);
    const [err, seterror] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7101/rooms/`);
            if (response.status !== 200) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            // Assuming the response contains the product data, set it in the state.
            setProducts(response.data);
            // console.log(products.product[0]);
        } catch (error) {
            seterror(`Error fetching data: ${error.message}`);
            console.error(err);
        }
    };

    // Assuming that 'products' is an array of room objects and each room has an 'id' property
    const ids = products.map(product => product);

    // Define a function to handle the click event
    const handleDivClick = (id) => {
        // Handle the click event for the div with the specified 'id'
        console.log(`Clicked on Room ID: ${id}`);
        // redirect(``)

    }

    return (
        <div>
          <Nav />
          <div className="flex flex-wrap" >
            <SideNav />
            <div className='w-11/12'>
              <div className=' block text-gray-700 text-xl font-bold mb-2 pt-5 pl-5'><h1>Rooms</h1></div>
              <div className="flex flex-wrap flex-1 w-full">
                  {ids.map((id, index) => (
                      <div className="w-1/2  h-96 flex flex-wrap justify-center items-center " key={index} onClick={() => handleDivClick(id)}>
                        <Link className='w-full h-full p-10' href={`/pages/rooms/rawMaterials/${id}`}>
                          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                            <h1>{id}</h1>
                        </div>
                        </Link>
                      </div>
                        // <div key={index} onClick={() => handleDivClick(id)}>
                        //     Room ID: {id}
                        // </div>
                // {/* </Link> */}
                    
                  ))}
              </div>
              </div>
          </div>
          
        </div>
    );
}

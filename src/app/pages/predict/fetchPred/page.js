"use client"
import Nav from "@/components/nav";
import SideNav from "@/components/sidenav";
import { useEffect, useState } from "react"



export default function ProductTable(){

    const [products, setProducts] = useState([]);
    const [err, seterror] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:7101/api/pred/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data);
      console.log(products);
      
    } catch (error) {
      seterror("Error fetching data",error);
      console.log(err)
    }
  };


  return(
    <div>
      <Nav/>
      <div className="flex flex-wrap">
        
        <SideNav/>
        <div>
          <h1 className="title font-bold text-2xl mb-2">Your Pices for the next purchases could be </h1>
          <table className="w-full">
                      <thead align="left">
                          <tr className="bg-white border-b-2 border-gray-200">
                            <th  className="px-6 py-4">S.N</th>                          
                            <th  className="px-6 py-4">Price</th>                          
                          </tr>
                      </thead>
                      <tbody>
                      {products.map((product,index) => (
                              <tr key={index} className="bg-white border-b-2 border-gray-200">
                                <td>{index +1}</td>
                                <td className="px-6 py-4" >{product}</td>                                
                            </tr>
                          ))}
                        
                      </tbody>
          </table>
        </div>
      </div>
     
   
    </div>
    
  )
}
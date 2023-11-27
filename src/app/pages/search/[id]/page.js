"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import {useState,useEffect} from 'react'
import Nav from '@/components/nav';
import SideNav from '@/components/sidenav';

export default function Search() {

const params = useParams();

const [products, setProducts] = useState([]);
const [err, seterror] = useState([]);

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
try {
  const response = await fetch("https://localhost:7101/products/");
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

const filterProducts =  products.filter((product)=> product.productname.toLowerCase().includes(params.id.toLowerCase()))

  return (
    <div>
        <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                <div>
                    <div>
                        
                    </div>
                    <div>
              <table className="w-full">
                  <thead align="left">
                      <tr className="bg-white border-b-2 border-gray-200">
                          <th  className="px-6 py-4">Product name</th>
                          <th  className="px-6 py-4">Description</th>
                          <th  className="px-6 py-4">Weight</th>
                          <th  className="px-6 py-4">Size</th>
                          <th  className="px-6 py-4">Created at</th>
                          <th  className="px-6 py-4">Room</th>
                          <th  className="px-6 py-4">Price</th>
                          <th  className="px-6 py-4">Status</th>
                      </tr>
                  </thead>
                  <tbody>
                  {filterProducts.map((filterProduct) => (
                          <tr key={filterProduct.id} className="bg-white border-b-2 border-gray-200">
                            <td className="px-6 py-4" >{filterProduct.productname}</td>
                            <td className="px-6 py-4">{filterProduct.description}</td>
                            <td className="px-6 py-4">{filterProduct.weight}</td>
                            <td className="px-6 py-4">{filterProduct.size}</td>
                            <td className="px-6 py-4">{filterProduct.timestamp}</td>
                            <td className="px-6 py-4">{filterProduct.room}</td>
                            <td className="px-6 py-4">{filterProduct.price}</td>
                            <td className="px-6 py-4">{filterProduct.status}</td>
                            <td className="px-6 py-4">
                            <Link href={`/pages/products/edit/${filterProduct.id}`}>
                              Edit
                            </Link>

                            </td>                          
                            <td className="px-6 py-4">
                              <Link href={`/pages/products/delete/${filterProduct.id}`}>
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
    )
}

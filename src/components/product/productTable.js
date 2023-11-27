  "use client"
  import { useEffect, useState } from "react"
  // import fetchData from "../../app/pages/api/product"
  import fetchProduct from '../product/singleFetch'
  import Link from "next/link";
  import {  useRouter } from "next/navigation";


  export default function ProductTable(){

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

      return (
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
                  {products.map((product) => (
                          <tr key={product.id} className="bg-white border-b-2 border-gray-200">
                            <td className="px-6 py-4" >{product.productname}</td>
                            <td className="px-6 py-4">{product.description}</td>
                            <td className="px-6 py-4">{product.weight}</td>
                            <td className="px-6 py-4">{product.size}</td>
                            <td className="px-6 py-4">{product.timestamp}</td>
                            <td className="px-6 py-4">{product.room}</td>
                            <td className="px-6 py-4">{product.price}</td>
                            <td className="px-6 py-4">{product.status}</td>
                            <td className="px-6 py-4">
                            <Link href={`/pages/products/edit/${product.id}`}>
                              Edit
                            </Link>

                            </td>                          
                            <td className="px-6 py-4">
                              <Link href={`/pages/products/delete/${product.id}`}>
                                Delete
                              </Link></td>
                        </tr>
                      ))}
                    
                  </tbody>
              </table>
          </div>
      )
  }
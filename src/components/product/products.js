"use client"
import Search from '../../icons/search'
import ProductForm from './productFrom';
import ProductTable from './productTable'
import Link from "next/link";
import {useState} from 'react'




export default function Products({a}){

    const [dataToSend, setDataToSend] = useState('');
    // const handleButtonClick = () => {
    //     // Encode the data before sending it as a query parameter
    //     const encodedData = encodeURIComponent(dataToSend);
        
    //     // Use Next.js Link to navigate to the target page with the data as a query parameter
    //     // Replace '/target-page' with the actual path to your target page
    //     window.location.href = `/page/search?data=${encodedData}`;
    //   };


    return (
    <div className='bg-gray-100 flex flex-col p-10 w-11/12 '>
        <div className='title font-bold text-2xl mb-2'><h1 >{a}s</h1></div>
        <div className="Pro-nav flex p-4 bg-white border-b-2 border-gray-200">

            <div className="search w-4/12">
                <form className='relative'>
                    <input type="search"
                        id="gsearch"
                        name="gsearch"
                        className="border border-solid border-gray rounded-sm bg-gray-200 h-8 pl-8"
                        value={dataToSend}
                        onChange={(e) => setDataToSend(e.target.value)}
                        placeholder="Search..."></input>
                        {/* onClick={handleButtonClick} Handle Clickfuction defined if ever need*/}
                    <button className='absolute text-gray-400 left-0 top-0 p-1.5 hover:text-black flex justify-center '>
                    <Link href={`/pages/search/${dataToSend}`}>
                         <Search />
                    </Link>                      
                    </button>
                </form>
            </div>
            <div className='blank w-6/12'></div>
            <div className="newproduct w-2/12 flex flex-wrap justify-end">
                <button name="newProduct"    className="border border-solid bg-[#0845ff] text-xs    h-8 p-2 rounded-md text-white  ">
                    <Link href={`/pages/products/create`}>
                        New product
                    </Link>
                    
                </button>

            </div>
        </div>
        <div className='ptable pt-10 bg-white  border-b-2 border-gray-200 '>
            <ProductTable />
        </div>
    </div>);
}
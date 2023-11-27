import Search from '../../icons/search'
import RawTable from './rawtable'
import Link from 'next/link';

export default function Raw(){
    return (
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
            <RawTable />
        </div>
    </div>);
}
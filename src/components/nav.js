import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bell from '../icons/bell'
import User from '../icons/user'
import Link from 'next/link';

export default function Nav(){
    
   return <div className="flex h-15 p-2  border-gray border-b-2	"> 
        <div className=" logo w-3/12 text-blue">logo</div>
        <div className="blank w-7/12"></div>
        <div className="notification w-16 h-16 bg-gray-300 text-gray-700 hover:text-black flex flex-wrap items-center justify-center rounded-full mr-2"><Bell /></div>
        <div className="profile w-16 h-16 bg-gray-300 text-gray-700 hover:text-black flex flex-wrap items-center justify-center rounded-full mr-2">
           <Link href={`/pages/login`}>
                <User />
           </Link>

        </div>
    </div>
}
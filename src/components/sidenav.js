import Dash from '../icons/dash'
import Inve from '../icons/inv'
import Raw from '../icons/raw'
import Rooms from '../icons/rooms'
import Sales from '../icons/sales'


export default function SideNav(){
    
    return (
    <div className="flex flex-col w-1/12 bg-white flex-wrap items-center border-r-2 border-gray-200">
        <a href='/pages'><div className="dash m-4"><Dash /></div></a>
        <a href='/pages'><div className="inventory m-4"><Inve /></div></a>
        <a href='/pages/raw'><div className="raw m-4"><Raw /></div></a>
        <a href='/pages/rooms'><div className="rooms m-4"><Rooms /></div></a>
        <a href='/pages/predict/fetchPred'><div className="sales m-4"><Sales /></div></a>
    </div> );
}
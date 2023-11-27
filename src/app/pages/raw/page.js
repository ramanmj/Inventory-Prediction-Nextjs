import Nav from '../../../components/nav'
import SideNav from '../../../components/sidenav'
import Raw from '../../../components/RawMaterial/rawMaterial'
export default function Araw(){
    return (
        <div>
            <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                <Raw />
            </div>
        </div>
        
        </div>
    )
}
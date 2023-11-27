import Nav from '../../../components/nav'
import SideNav from '../../../components/sidenav'
import Products from '../../../components/product/products'

export default function Araw(){
    return (
        <div>
            <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                <Products a="Products" />
                
            </div>
        </div>
        
        </div>
    )
}
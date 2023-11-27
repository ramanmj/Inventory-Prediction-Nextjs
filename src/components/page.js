import Nav from "./nav";
import SideNav from "./sidenav";
import Products from "./product/products";


export default function Page(){
    return (
        <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                <Products a="Product"/>
                
            </div>
        </div>
        
        );
}
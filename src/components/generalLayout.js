import Nav from "./nav";
import SideNav from "./sidenav";
import Products from "./product/products";


export default function GLayout(){
    return (
        <div>
            <Nav />
            <div className="flex  bg-gray-100 h-screen">
                <SideNav />
                
            </div>
        </div>
        
        );
}
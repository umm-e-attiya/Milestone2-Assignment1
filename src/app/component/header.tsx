
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link";





const Navbar = () => {

    return(
        <div className="py-12">
            
            <div className= "text-black flex  lg:flex-row lg:items-center ">
            <h1 className="lg:text-2xl lg:ml-28 text-2xl  ">Glow Remedy</h1>
                
          <nav>
                
            <ul className="flex  space-x-5 ml-[10%] lg:flex-row text-2xl lg:space-x-9  lg:ml-80  lg:text-lg">
                   
                    
                   <li className="cursor-pointer hover:underline"><Link href="/">Home</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/Shop">Shop</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/Bundles">Bundles</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/About">About</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href ="/Contact">Contact Us</Link> </li>
                   </ul>

                   
                  
                </nav>                                    

                   <div className=" flex ml-[20%] gap-5 lg:flex-row lg:justify-between lg:gap-6 lg: w-[40px] lg:h-8 lg:pt-2 lg:ml-96">
                    <div className="cursor:pointer hover:underline w-4">
                    <a href="#"><MdAccountCircle/></a>
                    </div>
                    
                    <div className="cursor:pointer hover:underline w-4">
                     
                     <a href="#"><IoSearchOutline /></a>
                     </div>

                     <div className="cursor:pointer hover:underline w-4">
                     <a href="#"><PiShoppingCartSimpleFill /></a>
                     </div>
                 
                 </div>
                
             </div>
                 

            </div>
    )
}

export default Navbar
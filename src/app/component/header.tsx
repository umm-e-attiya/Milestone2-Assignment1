
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link";





const Navbar = () => {

    return(
        <div className="py-12">
            
            <div className= "text-black flex lg:flex  lg:flex-row lg:items-center ">
            <h1 className="  text-sm lg:text-7x1 lg:ml-28  ">Glow Remedy</h1>
                
          <nav>
                
            <ul className="  space-x-3 ml-[0.5px]  flex  text-xs lg:flex lg:flex-row  lg:space-x-9  lg:ml-80  lg:text-lg">
                   
                    
                   <li className="cursor-pointer hover:underline ml-4"><Link href="/">Home</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/Shop">Shop</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/Bundles">Bundles</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href="/About">About</Link></li>
                   <li className="cursor-pointer hover:underline justify-center"><Link href ="/Contact">Contact Us</Link> </li>
                   </ul>

                   
                  
                </nav>                                    

                   <div className=" flex justify-between  gap-1 lg:flex-row lg:justify-between lg:gap-6 lg: w-[40px] lg:h-8 lg:pt-2 lg:ml-96">
                    <div className="cursor:pointer hover:underline w-4">
                    <a href="#"><MdAccountCircle/></a>
                    </div>
                    
                    <div className="cursor:pointer hover:underline lg:w-4">
                     
                     <a href="#"><IoSearchOutline/></a>
                     </div>

                     <div className="cursor:pointer hover:underline w-4">
                     <a href="#"><PiShoppingCartSimpleFill/></a>
                     </div>
                 
                 </div>
                
             </div>
                 

            </div>
    )
}

export default Navbar
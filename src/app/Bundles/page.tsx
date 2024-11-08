

import Image from "next/image"
import template3 from "../../../public/template3.jpeg"
import bundle1 from "../../../public/Bundle1.jpeg"
import bundle2 from "../../../public/Bundle2.jpeg"
import bundle3 from "../../../public/Bundle3.jpeg"
import bundle4 from "../../../public/Bundle4.jpeg"
import bundle5 from "../../../public/Bundle5.jpeg"

const Bundles = () => {
    return(
        <div>

        
              <div>
              <Image src={template3} alt="background-image" width={1800}/>
    
               </div>
                <div className="mt-56">
                 <h1 className="text-6xl font-bold text-center">Bundles</h1>
               </div> 

               
               
               <div className=" flex flex-col lg:flex-row  mt-10 " >
                <div className="ml-11">
                    <Image src={bundle1} alt="bundle1" width={400} className="transition-transform duration-300 transform hover:scale-110"/>
                    <p className="text-center font-bold text-xl mt-4">Daily Defence Bundle</p>
                    <p className="text-center text-lg">5000RS</p>
                </div>

                <div className="lg:ml-40 ml-11">
                     <Image src={bundle2} alt="bundle2" width={400} className="transition-transform duration-300 transform hover:scale-110"/>
                     <p className="text-center font-bold text-xl mt-4">Hydration Boost Bundle</p>
                     <p className="text-center text-lg">5000RS</p>
               </div>

               <div className="lg:ml-36 ml-11 ">
                   <Image src={bundle3} alt="bundle3" width={400} className="transition-transform duration-300 transform hover:scale-110" />
                   <p className="text-center font-bold text-xl mt-4">Sun-Kissed Duo</p>
                   <p className="text-center text-lg">5000RS</p>
               </div>
               </div>  


               <div className="flex flex-col lg:flex-row mt-9">

                   <div className="ml-11">
                    <Image src={bundle4} alt="bundle4" width={400} className="transition-transform duration-300 transform hover:scale-110"/>
                    <p className="text-center font-bold text-xl mt-4">Brightening & Glow Bundle</p>
                    <p className="text-center text-lg">7000RS</p>
                    </div>

                    
                    <div className="lg:ml-40 ml-11 mt-4">
                     <Image src={bundle5} alt="bundle5" width={400} className="transition-transform duration-300 transform hover:scale-110"/>
                     <p className="text-center font-bold text-xl mt-4">Clear Skin Bundle</p>
                     <p className="text-center text-lg">7000RS</p>
                     </div>
                    
               </div>
        
        
        
        
        
        </div>


    )
}
export default Bundles;
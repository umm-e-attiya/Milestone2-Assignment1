import Image from "next/image";

import template2 from "../../../public/template2.jpeg"
import facewash from "../../../public/facewash.jpeg"
import hyaluronicserum from "../../../public/hylaronicserum.jpeg"
import moisturizer from "../../../public/moisturizer.jpeg"
import niacinamideserum from "../../../public/niacinamideserum.jpeg"
import VitaminC2 from "../../../public/VitaminC2.jpeg"
import sunscreen60 from "../../../public/sunscreen60.jpeg"
import sunscreen100 from "../../../public/sunscreen100.jpeg"
const Shop = () =>{
    return(
        <div> 
            <div>
            <Image src={template2} alt="background-image" width={1800} />
            </div>

            <div className="mt-56">
                <div>
                     <h1 className="text-7x1 font-bold text-center lg:text-6xl lg:font-bold lg:text-center">Products</h1>
                </div>
            </div>
              
                <div className="flex flex-col lg:flex-row ">
                <div>
                    <Image src={facewash} alt="facewash" width={500}
                    className="lg:ml-7 ml-[10%] mt-9 transition-transform duration-300 transform hover:scale-110" />
                    <p className="mt-4 text-center text-xl font-bold">Fresh Glow Facewash</p>
                    <p className="text-center text-lg">1600RS</p>
                  </div>
                  <div>
                    <Image src={hyaluronicserum} alt="serum" width={500}
                    className=" ml-[10%] lg:mr-[100px] lg:ml-[80px] mt-9 transition-transform duration-300 transform hover:scale-110" />
                    <p className="mt-4 ml-[40%] lg:ml-60 text-xl font-bold">Hyaluronic Serum</p>
                    <p className="lg:ml-72 ml-[50%] text-lg">1700RS</p>
                  </div>
                    <div>
                       <Image src={moisturizer} alt="moisturizer"width={500}
                        className="mt-9 ml-[10%] lg:mr-[50px] transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4 ml-36 text-xl font-bold">Hydra Glow Moisturizer</p>
                        <p className="ml-56 text-lg">1500RS</p>

                    </div>
                   
                  
                </div>

                <div className="flex lg:flex-row flex-col lg:justify-between">
                    <div>
                        <Image src={sunscreen60} alt="sunscreen60" width={500} 
                        className="mt-9 lg:ml-3 ml-[10%] transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4 ml-44 text-xl font-bold">Sunscreen Spf60</p>
                        <p className="ml-56 text-lg">1800RS</p>

                    </div>

                        <div>
                        <Image src={sunscreen100} alt="sunscreen100" width={500}
                        className="lg:mr-[40px] lg:ml-10 ml-[10%] mt-9 transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4 ml-[40%] lg:ml-52 font-bold text-xl">Sunscreen Spf100</p>
                        <p className="lg:ml-64 ml-[50%] text-lg">2000RS</p>
                        </div>

                        <div>
                            <Image src={VitaminC2} alt="vitaminc" width={500}
                            className="lg:mr-[1px] ml-[10%] mt-9 transition-transform duration-300 transform hover:scale-110"/>
                            <p className="mt-4 ml-[10%] text-center text-xl font-bold">Vitamin C Serum</p>
                            <p className="text-center text-lg">1950RS</p>
                        </div>
                   
                </div>

                <div className="flex justify-between">
                    <div>
                    <Image src={niacinamideserum} alt="serum" width={500} 
                        className="mt-9 lg:ml-6 ml-[10%] transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4 ml-[10%] text-center text-xl font-bold">Niacinamide Serum </p>
                        <p className="text-center text-lg">1700RS</p>
                    </div>
                </div>


                  
                  
              
             
        </div>
       
    )
}
export default Shop;

            
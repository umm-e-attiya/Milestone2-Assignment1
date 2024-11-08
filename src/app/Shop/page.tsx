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
                     <h1 className="text-4xl font-bold text-center lg:text-6xl lg:font-bold lg:text-center">Products</h1>
                </div>
            </div>
              
                <div className="flex flex-col lg:flex-row ">
                <div>
                    <Image src={facewash} alt="facewash" width={500}
                    className="w-[300px] px-6 lg:w-[500px]  lg:ml-7 mt-9 transition-transform duration-300 transform hover:scale-110" />
                    <p className="mt-4 ml-16 text-base lg:text-center lg:text-xl font-bold">Fresh Glow Facewash</p>
                    <p className="lg:text-center text-base ml-28 lg:text-lg">1600RS</p>
                  </div>
                  <div>
                    <Image src={hyaluronicserum} alt="serum" width={500}
                    className=" w-[300px] lg:w-[500px] px-6  lg:mr-[100px] lg:ml-[80px] mt-9 transition-transform duration-300 transform hover:scale-110" />
                    <p className="mt-4 ml-16 text-base lg:ml-60 lg:text-xl font-bold">Hyaluronic Serum</p>
                    <p className="lg:ml-72 ml-28 text-based lg:text-lg">1700RS</p>
                  </div>
                    <div>
                       <Image src={moisturizer} alt="moisturizer"width={500}
                        className="w-[300px] lg:w-[500px] px-6 mt-10  lg:mr-[50px] transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4  ml-16 text-base  lg:ml-40 lg:text-xl font-bold">Hydra Glow Moisturizer</p>
                        <p className="lg:ml-56 ml-28 text-based lg:text-lg">1500RS</p>

                    </div>
                   
                  
                </div>

                <div className="flex lg:flex-row flex-col lg:justify-between">
                    <div>
                        <Image src={sunscreen60} alt="sunscreen60" width={500} 
                        className="mt-9 lg:ml-3 px-6 text-base w-[300px] lg:w-[500px] transition-transform duration-300 transform hover:scale-110"/>
                        <p className="lg:mt-4 mt-4 ml-16 text-base lg:ml-24 lg:text-xl font-bold">Sunscreen Spf60</p>
                        <p className="lg:ml-56 ml-28 text-based lg:text-lg">1800RS</p>

                    </div>
                   
                    <div>
                        <Image src={sunscreen100} alt="sunscreen100" width={500}
                        className="lg:mr-[40px] lg:ml-10 px-6  w-[300px] lg:w-[500px]  mt-9 transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4  ml-16 text-base lg:ml-52 font-bold lg:text-xl">Sunscreen Spf100</p>
                        <p className="lg:ml-64 ml-28 text-based lg:text-lg">2000RS</p>
                        </div>

                        <div>
                            <Image src={VitaminC2} alt="vitaminc" width={500}
                            className="lg:mr-[1px] px-6  w-[300px] lg:w-[500px]  mt-9 transition-transform duration-300 transform hover:scale-110"/>
                            <p className="mt-4 text-base ml-16 lg:ml-52 lg:text-center lg:text-xl font-bold">Vitamin C Serum</p>
                            <p className="lg:text-center ml-28 text-based  lg:text-lg">1950RS</p>
                        </div>
                   
                </div>

                <div className="flex justify-between">
                    <div>
                    <Image src={niacinamideserum} alt="serum" width={500} 
                        className="mt-9 lg:ml-6 px-6 w-[300px] lg:w-[500px]  transition-transform duration-300 transform hover:scale-110"/>
                        <p className="mt-4  text-base ml-16 lg:ml-10 lg:text-center lg:text-xl font-bold">Niacinamide Serum </p>
                        <p className="lg:text-center ml-28 text-based lg:text-lg lg:ml-30">1700RS</p>
                    </div>
                </div>


                  
                  
              
             
        </div>
       
    )
}
export default Shop;

            
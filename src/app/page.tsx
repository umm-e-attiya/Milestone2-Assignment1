import Image from "next/image";
import React from "react";
import backgroundimage from "../../public/background-image.jpeg"
import facewash from "../../public/facewash.jpeg"
import sunscreen60 from "../../public/sunscreen60.jpeg"
import vitaminC2 from "../../public/VitaminC2.jpeg"
import template from "../../public/template.jpeg"





export default function Home() {
  return (
          <div>

              <div className="my-20">
                <Image src={backgroundimage} alt="background-image" className="w-[1800px]"/>
              </div>



              <div className="mt-[300px] ">
                <div>
                  <h1 className="text-3xl ml-[3%] lg:text-5xl font-bold text-center">Feature Collection</h1>
                  </div>
                </div>


                <div className="flex flex-col ml-[11%] lg:flex-row  lg:justify-center lg:ml-2 lg:mt-12 lg:space-x-4 ">

                  <div>
                       <Image src={facewash} alt="facewash" width={500} className="  w-[300px] px-6 lg:w-[500px] lg:mt-32 mt-12   lg:ml-1  transition-transform duration-300 transform hover:scale-110" />
                       <p className="font-bold text-base ml-16  whitespace-nowrap  lg:font-bold lg:ml-[2%] lg:text-center lg:relative lg:mt-3 lg:text-lg ">Fresh Glow Facewash</p>
                       <p className=" ml-28 text-based   whitespace-nowrap lg:mt-4 lg:text-center lg:text-lg lg:ml-1">1600RS</p>
                      
                       </div>

                    <div>
                      <Image src={sunscreen60} alt="sunscreenspf60" width={500} className=" px-6 w-[300px] lg:w-[500px] mt-32   lg:ml-7 transition-transform duration-300 transform hover:scale-110"/>
                      <p className="font-bold  text-base ml-16   whitespace-nowrap   lg:text-center lg:ml-14 lg:text-lg lg:mt-3 ">Sunscreen Spf60</p>
                      <p className="   ml-28 text-based      whitespace-nowrap lg:mt-4  lg:text-lg lg:text-center lg:ml-11">1800RS</p>
                    </div>
                    
                    <div>
                      <Image src={vitaminC2} alt="vitaminC" width={500} className=" px-6 w-[300px] lg:w-[500px] mt-32 lg:ml-9
                      transition-transform duration-300 transform hover:scale-110" />
                      <p className="font-bold  text-base ml-16 whitespace-nowrap :font-bold lg:text-center lg:ml-28 lg:text-lg lg:mt-3 ">Vitamin C Serum</p>
                      <p className="ml-28 text-based     whitespace-nowrap   lg:text-lg lg:text-center lg:ml-28">1950RS</p>
                    </div>
                 </div>



                 <div className="px-6 mt-60 lg:mt-60 lg:my-40  ">
                     
                     <p className="  bg-yellow-300 max-w-screen-2xl text-2xl  lg:mx-44 lg:mt-[50vh] lg:text-center  lg:text-5xl lg:text-black font-bold">
                     Nourish your skin and unleash your inner glow!.</p>

                 </div>


                 <div className="px-6 py-6 mt-60">
                     <Image src={template} alt="template" width={1800} height={500}/>
                     
                      
                 </div>

                 
        </div>

            
                      
          
            
         
  );
}

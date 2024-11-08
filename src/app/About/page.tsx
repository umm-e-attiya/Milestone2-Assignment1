
import Image from "next/image";
import template4 from "../../../public/template4.jpeg"


const About = () =>{
    return(
          
          <div>


          <div className="text-5xl text-center mt-5">
                <h1>About US</h1>
          </div>

              
          <div className="flex mt-6 flex-col lg:flex-row lg:mx-20 lg:py-6">
            <div>
               <Image src={template4} alt="template4" width={900} className="ml-[10%]" />
            </div>
            <div className="lg:w-[800px] w-[300px] mt-10 lg:mt-56">
                    <p className="ml-20">At Glow Remedy, we believe in the power of natural beauty and self-care. Our journey began with a simple idea: to offer high-quality skincare solutions that reveal your skin s natural radiance. Our products are thoughtfully crafted with nourishing ingredients, designed to give you that signature glow, boost confidence, and promote healthy skin.</p>
                    
                    <p className="ml-20 mt-5">We are passionate about curating skincare routines that fit seamlessly into your daily life. Each product is crafted with care, balancing traditional remedies with modern science to address your skin s unique needs. From our gentle cleansers to our rejuvenating serums, every item in our collection is a testament to our commitment to quality, purity, and transparency.</p>
            </div>
          </div>



          </div>
         
    )
}
export  default About; 

import Image from "next/image";
import template4 from "../../../public/template4.jpeg"

const Contact = () => {
    return(
             <div>
                <div className="text-5xl text-center mt-5">
                    <h1>Contact Us</h1>
                </div>
                <div className="flex flex-col lg:flex-row mt-6 lg:mx-20 lg:py-6">
                <div>
                    <Image src={template4} alt="template4" width={900} className="lg:w-[900px] w-[300px] ml-[10%]" />
                </div>
                <div className="lg:w-[800px] lg:mt-28  w-[300px]  mt-10">
                    <p className="lg:ml-28 ml-2">We d love to hear from you! Whether you have questions about our products,need skincare advice, or just want to share your <i>Glow Remedy</i> experience, feel free to reach out.</p>
                    <div className="lg:mt-7 mt-7 ">
                    <p className="lg:ml-28  ml-2"><b>Email:</b> info@glowremedy.com</p>
                    <p className="lg:ml-28 ml-2"><b>Phone:</b> +92 300 123 4567</p>
                    <p className="lg:ml-28 ml-2"><b>Follow Us:</b></p>
                    <ul className="lg:ml-28 ml-2 mt-6">
                        <li>Instagram: <a href="@GlowRemedy">@GlowRemedy</a></li>
                        <li className="mt-6">Facebook:  <a href="Glow Remedy">Glow Remedy</a></li>
                        <li className="mt-6">Twitter:    <a href="@GlowRemedy">@GlowRemedy</a> </li>
                    </ul>

                    <div className="mt-7 lg:ml-28 ml-2">
                        <p>Your thoughts matter to us! We aim to respond within 24 hours. Thank you for being part of the <i>Glow Remedy</i> family!</p>
                    </div>
                    </div>
                </div>
                </div>
             </div>
    );
}
export default Contact;
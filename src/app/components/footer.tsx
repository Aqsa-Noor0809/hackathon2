import Link from "next/link";
export default function Footer(){
    return(
        <div className="Footer w-full h bg-white">

           <div className="Rectangle bg-white border border-black/30 border-opacity-[17%]">

           <div className="Top flex">

            <div className="Group_L">
            <img src="/Images/Funiro.png" alt="Logo" className="Logo mt-12 ml-20" />
            <p className="Para text-[#9F9F9F] ml-20 mt-16">400 University Drive Suite 200 Coral <br /> Gables,<br />
            FL 33134 USA</p>
            </div>
            
            <div className="Group_R flex">
                <div className="Links flex">
                    <div className="NavLinks mt-12 ml-32">
                        <h5 className="h text-[#9F9F9F]">
                            Links
                        </h5>
                        <ul className="UL text-black font-medium mt-14">
                            <li className="LI mt-10">
                                <Link href={"/home"}>Home</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/shop"}>Shop</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="HelpLinks mt-12 ml-32">
                        <h5 className="h text-[#9F9F9F]">
                            Help
                        </h5>
                        <ul className="UL text-black font-medium mt-14">
                            <li className="LI mt-10">
                                <Link href={"/"}>Payment Options</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Returns</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Privacy Policies</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Input">
                    <h5 className="h text-[#9F9F9F] mt-12 ml-20">
                        Newsletter
                    </h5>
                    <div className="MInput mt-14 ml-20 flex">
                        <div>
                        <input type="email" placeholder="Enter Your Email Address"/>
                        <div className="Line bg-black h-[1px]"></div>
                        </div>
                        <div>
                        <button className="B ml-11">
                            SUBSCRIBE
                        </button>
                        <div className="Line bg-black h-[1px] ml-11"></div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="Bottom mt-12"></div>
           <div className="Line h-[1px] w-[180vh] bg-white border border-black/30 border-opacity-[17%] ml-20"></div>
           <p className="Para ml-20 mt-8 mb-8">2023 furino. All rights reverved</p>
           </div>
       </div>
    );
};
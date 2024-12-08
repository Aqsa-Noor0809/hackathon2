import Link from "next/link";
export default function Header(){
    return(
        <div className="Header h-24 bg-[#FFFFFF] flex p-7 flex-wrap w-full">

            <div>
               <img src="/Images/Frame 168.png" alt="Logo" className="Logo h-7 ml-5" />            
            </div>

            <div>

                    <ul className="UL font-medium flex space-x-10 ml-80 mt-1">

                            <li>
                                <Link href={"/home"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/shop"}>Shop</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>Blog</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>

                    </ul>

                  </div>

                  <div className="Icons flex space-x-10 ml-40">
                    <img src="/Images/outline.png" alt="vector" className="h-7 w-7" />
                    <img src="/Images/search.png" alt="search" className="h-7 w-7" />
                    <img src="/Images/heart.png" alt="Favourite" className="h-7 w-7" />
                    <img src="/Images/cart.png" alt="cart" className="h-7 w-7" />
                  </div>
            </div>
        
    );
};
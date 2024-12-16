import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer w-full bg-white ">
      <div className="Rectangle bg-white border border-black/30 border-opacity-[17%] pl-9 pr-9">

        {/* Top Section */}
        <div className="Top flex flex-wrap md:flex-nowrap p-6">
          {/* Left Section */}
          <div className="Group_L w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/Images/Funiro.png" alt="Logo" className="Logo mx-auto md:mx-0 mt-6 md:mt-12" />
            <p className="Para text-[#9F9F9F] text-center md:text-left mt-6 md:mt-16">
              400 University Drive Suite 200 Coral <br />
              Gables, FL 33134 USA
            </p>
          </div>

          {/* Right Section */}
          <div className="Group_R flex flex-wrap w-full md:w-2/3 justify-between">
            {/* Links */}
            <div className="NavLinks mt-6 md:mt-12 w-1/2 md:w-auto">
              <h5 className="h text-[#9F9F9F] text-center md:text-left">Links</h5>
              <ul className="UL text-black font-medium mt-4 md:mt-14 space-y-2 md:space-y-10 text-center md:text-left">
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div className="HelpLinks mt-6 md:mt-12 w-1/2 md:w-auto">
              <h5 className="h text-[#9F9F9F] text-center md:text-left">Help</h5>
              <ul className="UL text-black font-medium mt-4 md:mt-14 space-y-2 md:space-y-10 text-center md:text-left">
                <li><Link href="/">Payment Options</Link></li>
                <li><Link href="/">Returns</Link></li>
                <li><Link href="/">Privacy Policies</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="Input mt-6 md:mt-12 w-full md:w-auto">
              <h5 className="h text-[#9F9F9F] text-center md:text-left">Newsletter</h5>
              <div className="MInput mt-4 md:mt-14 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                <div>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <div className="bg-black h-[1px] w-44">
                </div>
                </div>
                <div>
                <button className="B text-black px-4 text-sm rounded-md mt-4 md:mt-0 md:ml-4">
                  SUBSCRIBE
                </button>
                <div className="bg-black h-[1px] w-20 ml-6 ">
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="Bottom mt-8">
          <div className="Line bg-black/30 h-[1px] mx-6"></div>
          <p className="Para text-sm text-gray-500 text-center mt-4 mb-8">
            2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}





//  <div className="Group_L w-full md:w-1/3 mb-6 md:mb-0">
// <img src="/Images/Funiro.png" alt="Logo" className="Logo mx-auto md:mx-0 mt-6 md:mt-12" />
// <p className="Para text-[#9F9F9F] text-center md:text-left mt-6 md:mt-16">
//   400 University Drive Suite 200 Coral <br />
//   Gables, FL 33134 USA
// </p>
// </div>
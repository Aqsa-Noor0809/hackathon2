import Link from "next/link";
import Footer2 from "../components/footer2";

export default function Cart() {
  return (
    <div className="Cart">
      {/* Header Section */}
      <div className="bg-[url('/Images/Rectangle1.png')] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[328px] bg-cover bg-center">
        <div className="leading-5 pt-[40px] sm:pt-[60px] md:pt-[70px] lg:pt-[83px] text-center">
          <div className="space-y-2 sm:space-y-3">
            <img
              src="/Images/logos.png"
              alt="logo"
              className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[77px] lg:w-[77px] mx-auto"
            />
            <h4 className="font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
              Cart
            </h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-4 sm:mt-5 md:mt-6">
            <h3 className="text-sm sm:text-base">Home</h3>
            <h3 className="text-sm sm:text-base">&gt;</h3>
            <h3 className="font-normal text-sm sm:text-base">Cart</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-5 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Cart Items Section */}
        <div className="lg:h-[525px]">
          <div className="mt-6 sm:mt-8 lg:mt-16">
            <div className="h-[40px] sm:h-[50px] lg:h-[55px] w-full lg:w-[817px] bg-[#F9F1E7] font-medium flex space-x-10 sm:space-x-20 pt-2 sm:pt-3 pl-4 lg:pl-36">
              <h5 className="text-sm sm:text-base">Product</h5>
              <h5 className="pl-4 sm:pl-8 text-sm sm:text-base">Price</h5>
              <h5 className="pl-4 sm:pl-10 text-sm sm:text-base">Quantity</h5>
              <h5 className="text-sm sm:text-base">Subtotal</h5>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-2">
              <img
                src="/Images/sofa.png"
                alt="Sofa"
                className="h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] lg:h-[105px] lg:w-[108px] rounded-[8px] mt-4 lg:mt-16"
              />
              <div className="flex flex-col lg:flex-row lg:space-x-20 mt-4 lg:mt-[100px] pl-4 lg:pl-8">
                <h5 className="text-[#9F9F9F] text-sm sm:text-base">
                  Asgaard sofa
                </h5>
                <h5 className="text-[#9F9F9F] text-sm sm:text-base">
                  Rs. 250,000.00
                </h5>
                <h5 className="h-6 w-6 sm:h-8 sm:w-8 rounded-[5px] border border-[#9F9F9F] pt-[2px] pl-[6px] sm:pl-[10px] text-sm sm:text-base">
                  1
                </h5>
                <h5 className="text-sm sm:text-base">Rs. 250,000.00</h5>
              </div>
              <img
                src="/Images/delete.png"
                alt="delete"
                className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] lg:h-[28px] lg:w-[28px] mt-4 lg:mt-24 ml-4 lg:ml-16"
              />
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="h-[300px] sm:h-[350px] lg:h-[390px] w-full lg:w-[393px] mt-6 sm:mt-8 lg:mt-16 bg-[#F9F1E7] mb-3">
          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center mt-4">
            Cart Totals
          </h3>

          <br />
          <div className="pl-4 lg:pl-14 pr-4 pt-4 lg:pt-9 space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="flex justify-between">
              <h5 className="font-medium text-sm sm:text-base">Subtotal</h5>
              <h5 className="text-[#9F9F9F] text-sm sm:text-base">
                Rs. 250,000.00
              </h5>
            </div>
            <div className="flex justify-between">
              <h5 className="font-medium text-sm sm:text-base">Total</h5>
              <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#B88E2F] font-medium">
                Rs. 250,000.00
              </h5>
            </div>

            <div className="text-center">
              <button className="h-[40px] sm:h-[50px] lg:h-[58.95px] w-[180px] sm:w-[200px] lg:w-[222px] text-[16px] sm:text-[18px] lg:text-[20px] text-center border border-black rounded-[10px] sm:rounded-[15px]">
                <Link href={"/check-out"}>Check Out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer2 />
    </div>
  );
}
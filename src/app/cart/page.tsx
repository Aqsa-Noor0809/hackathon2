import Link from "next/link";
import Footer2 from "../components/footer2";

export default function Cart() {
  return (
    <div className="Cart">
      {/* Header Section */}
      <div className="bg-[url('/Images/Rectangle1.png')] h-[328px] bg-cover bg-center">
        <div className="leading-5 pt-[83px] text-center">
          <div className="space-y-3">
            <img
              src="/Images/logos.png"
              alt="logo"
              className="h-[77px] w-[77px] mx-auto"
            />
            <h4 className="font-medium text-[48px]">Cart</h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-6">
            <h3>Home</h3>
            <h3>&gt;</h3>
            <h3 className="font-normal">Cart</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        {/* Cart Items Section */}
        <div className="lg:h-[525px]">
          <div className="pl-4 lg:pl-20 mt-8 lg:mt-16">
            <div className="h-[55px] w-full lg:w-[817px] bg-[#F9F1E7] font-medium flex space-x-20 pt-3 pl-4 lg:pl-36">
              <h5>Product</h5>
              <h5 className="pl-8">Price</h5>
              <h5 className="pl-10">Quantity</h5>
              <h5>Subtotle</h5>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-2">
              <img
                src="/Images/sofa.png"
                alt="Sofa"
                className="h-[105px] w-[108px] rounded-[8px] mt-4 lg:mt-16"
              />
              <div className="flex flex-col lg:flex-row lg:space-x-20 mt-4 lg:mt-[100px] pl-4 lg:pl-8">
                <h5 className="text-[#9F9F9F]">Asgaard sofa</h5>
                <h5 className="text-[#9F9F9F]">Rs. 250,000.00</h5>
                <h5 className="h-8 w-8 rounded-[5px] border border-[#9F9F9F] pt-[2px] pl-[10px]">
                  1
                </h5>
                <h5>Rs. 250,000.00</h5>
              </div>
              <img
                src="/Images/delete.png"
                alt="delete"
                className="h-[28px] w-[28px] mt-4 lg:mt-24 ml-4 lg:ml-16"
              />
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="h-[390px] w-full lg:w-[393px] mt-8 lg:mt-16 bg-[#F9F1E7] mb-3">
          <h3 className="text-[32px] font-semibold text-center mt-4">
            Card Totals
          </h3>

          <br />
          <div className="pl-4 lg:pl-14 pr-4 pt-4 lg:pt-9 space-y-10">
            <div className="flex justify-between">
              <h5 className="font-medium">Subtotle</h5>
              <h5 className="text-[#9F9F9F]">Rs. 250,000.00</h5>
            </div>
            <div className="flex justify-between">
              <h5 className="font-medium">Totle</h5>
              <h5 className="text-[20px] text-[#B88E2F] font-medium">
                Rs. 250,000.00
              </h5>
            </div>

            <div className="text-center">
              <button className="h-[58.95px] w-[222px] text-[20px] text-center border border-black rounded-[15px]">
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

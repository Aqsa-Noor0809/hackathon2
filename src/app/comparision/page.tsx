import Footer2 from "../components/footer2";

export default function Comparision() {
  return (
    <div className="Comparison">
      {/* Header Section */}
      <div className="bg-[url('/Images/Rectangle1.png')] h-[328px] bg-cover bg-center">
        <div className="leading-5 pt-[83px] text-center">
          <div className="space-y-3">
            <img
              src="/Images/logos.png"
              alt="logo"
              className="h-[77px] w-[77px] mx-auto"
            />
            <h4 className="font-medium text-[48px]">Product Comparison</h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-6">
            <h3>Home</h3>
            <h3>&gt;</h3>
            <h3 className="font-normal">Comparison</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Section */}
        <div className="mt-10 ml-10 lg:ml-20">
          <h3 className="text-[28px] font-medium leading-[35px]">
            Go to Product <br /> page for more <br /> Products
          </h3>
          <button className="w-[104px] h-[30px] border-b-[2px] border-b-[#727272] text-[#727272] text-[20px] font-medium mt-5 text-center">
            View More
          </button>
        </div>

        {/* Product Cards Section */}
        <div className="mt-7 flex flex-wrap justify-center lg:flex-nowrap lg:space-x-10">
          <div className="ml-10 lg:ml-28">
            <div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-[10px]">
              <img
                src="/Images/comp1.png"
                alt="Asgaard Sofa"
                className="w-[280px] h-[177px]"
              />
            </div>
            <div>
              <h5 className="text-[24px] font-medium mt-3">Asgaard Sofa</h5>
              <h5 className="text-[18px] font-medium mt-1"> Rs. 250,000.00 </h5>
              <div className="flex space-x-1">
                <h5 className="text-[18px] font-medium mt-1">4.7</h5>
                <img
                  src="/Images/stars.png"
                  alt="Stars"
                  className="w-[124px] h-[20px] mt-[6px]"
                />
                <div className="h-[30px] w-[1px] bg-[#9F9F9F]"></div>
                <div className="text-[13px] text-center text-[#9F9F9F] mt-1">
                  204 Review
                </div>
              </div>
            </div>
          </div>

          <div className="ml-10 lg:ml-28">
            <div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-[10px]">
              <img
                src="/Images/comp2.png"
                alt="Outdoor sofa"
                className="w-[280px] h-[177px] pb-4"
              />
            </div>
            <div>
              <h5 className="text-[24px] font-medium mt-3">Asgaard Sofa</h5>
              <h5 className="text-[18px] font-medium mt-1">Rs. 224,000.00</h5>
              <div className="flex space-x-1">
                <h5 className="text-[18px] font-medium mt-1">4.2</h5>
                <img
                  src="/Images/stars.png"
                  alt="Stars"
                  className="w-[124px] h-[20px] mt-[6px]"
                />
                <div className="h-[30px] w-[1px] bg-[#9F9F9F]"></div>
                <div className="text-[13px] text-center text-[#9F9F9F] mt-1">
                  145 Review
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Product Section */}
        <div className="mt-10 lg:mt-20 ml-10 lg:ml-10">
          <h3 className="text-[24px] font-semibold">Add A Product</h3>
          <select
            aria-placeholder="Choose a Product"
            className="text-[14px] text-white font-semibold bg-[#B88E2F] h-[39px] w-[242px] pl-2 rounded-[6px]"
          >
            <option value="Choose a product">Choose a Product</option>
            <option value="Sofa">Sofa</option>
            <option value="Bed">Bed</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full lg:w-[1332px] bg-[#E8E8E8] mt-10"></div>

      {/* Background Section */}
      <div className="bg-[url('/Images/text.png')] h-[2167px]"></div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start space-x-7 lg:space-x-32 ml-0 lg:ml-80 pb-32 ">
        <button className="h-[64px] w-[215px] bg-[#B88E2F] text-center text-white">
          Add to Cart
        </button>
        <button className="h-[64px] w-[215px] bg-[#B88E2F] text-center text-white">
          Add to Cart
        </button>
      </div>

      {/* Footer Section */}
      <Footer2 />
    </div>
  );
}

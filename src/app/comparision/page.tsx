import Footer2 from "../components/footer2";

export default function Comparison() {
  return (
    <div className="Comparison">
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
              Product Comparison
            </h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-4 sm:mt-5 md:mt-6">
            <h3 className="text-sm sm:text-base">Home</h3>
            <h3 className="text-sm sm:text-base">&gt;</h3>
            <h3 className="font-normal text-sm sm:text-base">Comparison</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap lg:flex-nowrap px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left Section */}
        <div className="mt-6 sm:mt-8 md:mt-10 ml-4 sm:ml-6 md:ml-10 lg:ml-20">
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-medium leading-[25px] sm:leading-[30px] md:leading-[35px]">
            Go to Product <br /> page for more <br /> Products
          </h3>
          <button className="w-[80px] sm:w-[90px] md:w-[104px] h-[25px] sm:h-[28px] md:h-[30px] border-b-[2px] border-b-[#727272] text-[#727272] text-[16px] sm:text-[18px] md:text-[20px] font-medium mt-3 sm:mt-4 md:mt-5 text-center">
            View More
          </button>
        </div>

        {/* Product Cards Section */}
        <div className="mt-6 sm:mt-7 flex flex-wrap justify-center lg:flex-nowrap lg:space-x-6 xl:space-x-10">
          <div className="ml-4 sm:ml-6 md:ml-10 lg:ml-28">
            <div className="w-[200px] sm:w-[240px] md:w-[280px] h-[120px] sm:h-[150px] md:h-[177px] bg-[#F9F1E7] rounded-[10px]">
              <img
                src="/Images/comp1.png"
                alt="Asgaard Sofa"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <h5 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-2 sm:mt-3">
                Asgaard Sofa
              </h5>
              <h5 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium mt-1">
                Rs. 250,000.00
              </h5>
              <div className="flex space-x-1">
                <h5 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium mt-1">
                  4.7
                </h5>
                <img
                  src="/Images/stars.png"
                  alt="Stars"
                  className="w-[80px] sm:w-[100px] md:w-[124px] h-[15px] sm:h-[18px] md:h-[20px] mt-[4px] sm:mt-[6px]"
                />
                <div className="h-[20px] sm:h-[25px] md:h-[30px] w-[1px] bg-[#9F9F9F]"></div>
                <div className="text-[10px] sm:text-[12px] md:text-[13px] text-center text-[#9F9F9F] mt-1">
                  204 Review
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 sm:ml-6 md:ml-10 lg:ml-28">
            <div className="w-[200px] sm:w-[240px] md:w-[280px] h-[120px] sm:h-[150px] md:h-[177px] bg-[#F9F1E7] rounded-[10px]">
              <img
                src="/Images/comp2.png"
                alt="Outdoor sofa"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <h5 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-2 sm:mt-3">
                Asgaard Sofa
              </h5>
              <h5 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium mt-1">
                Rs. 224,000.00
              </h5>
              <div className="flex space-x-1">
                <h5 className="text-[14px] sm:text-[16px] md:text-[18px] font-medium mt-1">
                  4.2
                </h5>
                <img
                  src="/Images/stars.png"
                  alt="Stars"
                  className="w-[80px] sm:w-[100px] md:w-[124px] h-[15px] sm:h-[18px] md:h-[20px] mt-[4px] sm:mt-[6px]"
                />
                <div className="h-[20px] sm:h-[25px] md:h-[30px] w-[1px] bg-[#9F9F9F]"></div>
                <div className="text-[10px] sm:text-[12px] md:text-[13px] text-center text-[#9F9F9F] mt-1">
                  145 Review
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Product Section */}
        <div className="mt-6 sm:mt-8 md:mt-10 ml-4 sm:ml-6 md:ml-10 lg:ml-10">
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
            Add A Product
          </h3>
          <select
            aria-placeholder="Choose a Product"
            className="text-[12px] sm:text-[14px] text-white font-semibold bg-[#B88E2F] h-[30px] sm:h-[35px] md:h-[39px] w-[180px] sm:w-[220px] md:w-[242px] pl-2 rounded-[6px] mt-2"
          >
            <option value="Choose a product">Choose a Product</option>
            <option value="Sofa">Sofa</option>
            <option value="Bed">Bed</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full lg:w-[90%] xl:w-[1332px] bg-[#E8E8E8] mt-6 sm:mt-8 md:mt-10 mx-auto"></div>

      {/* Background Section */}
      <div className="bg-[url('/Images/text.png')] h-[800px] sm:h-[1200px] md:h-[1600px] lg:h-[2167px] bg-cover bg-center mt-6 sm:mt-8 md:mt-10"></div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-32 mt-6 sm:mt-8 md:mt-10 pb-16 sm:pb-20 md:pb-32">
        <button className="h-[50px] sm:h-[60px] md:h-[64px] w-[150px] sm:w-[180px] md:w-[215px] bg-[#B88E2F] text-center text-white text-[14px] sm:text-[16px] md:text-[18px]">
          Add to Cart
        </button>
        <button className="h-[50px] sm:h-[60px] md:h-[64px] w-[150px] sm:w-[180px] md:w-[215px] bg-[#B88E2F] text-center text-white text-[14px] sm:text-[16px] md:text-[18px]">
          Add to Cart
        </button>
      </div>

      {/* Footer Section */}
      <Footer2 />
    </div>
  );
}
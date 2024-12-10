export default function Inspirations() {
  return (
    <div className="Inspirations h-auto lg:h-[670px] w-full bg-[#FCF8F3]">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="title mt-10 lg:mt-52 lg:ml-7 flex-1">
          <h4 className="font-bold text-[40px] w-[422px] leading-tight">
            50+ Beautiful rooms inspiration
          </h4>
          <p className="P font-medium text-[#616161] w-[368px] mt-2">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <div className="CTA">
            <button className="B h-[48px] w-[176px] bg-[#B88E2F] text-white mt-5">
              Explore More
            </button>
          </div>
        </div>

        {/* Product Section */}
        <div className="Products flex flex-col lg:flex-row pt-10 pb-10">
          {/* Left Image Section */}
          <div className="relative bg-[url('/Images/Rectangle24.png')] h-[582px] w-full lg:w-[404px] mr-3">
            {/* Overlay Box */}
            <div className="opacity-[72%] ml-6 mt-[430px] w-[217px] h-[130px] bg-[#FFFFFF]">
              <div className="flex space-x-2 justify-center">
                <h5 className="font-medium mt-8">01</h5>
                <div className="h-[1px] bg-black w-[20px] mt-11"></div>
                <h5 className="font-medium mt-8">Bed Room</h5>
              </div>
              <h5 className="font-semibold text-[28px] text-center">Inner Peace</h5>
            </div>
            <div className="absolute bottom-[22px] right-[115px] bg-[#B88E2F] h-[48px] w-[48px]">
              <img src="/Images/Right 16px.png" alt="right arrow" className="mt-3 ml-3" />
            </div>
          </div>

          {/* Right Images Section */}
          <div className="flex flex-col lg:flex-row">
            <div className="flex-wrap">
              <div className="bg-[url('/Images/Rectangle25.png')] h-[486px] w-[372px] mr-3 relative">
                {/* Next Button */}
                <button className="Next absolute bottom-4 right-[-10px]">
                  <div className="flex items-center justify-center mb-40 w-12 h-12 bg-white text-[#B88E2F] rounded-full shadow-md hover:bg-[#D4A32E] hover:text-white transition duration-100">
                    <span className="text-xl mb-1">&gt;</span>
                  </div>
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center lg:justify-start items-center space-x-4 p-7">
                <div className="w-[27px] h-[27px] rounded-full border border-[#B88E2F] flex items-center justify-center">
                  <div className="bg-[#B88E2F] w-[11px] h-[11px] rounded-full"></div>
                </div>
                <div className="bg-[#D8D8D8] w-[11px] h-[11px] rounded-full"></div>
                <div className="bg-[#D8D8D8] w-[11px] h-[11px] rounded-full"></div>
                <div className="bg-[#D8D8D8] w-[11px] h-[11px] rounded-full"></div>
              </div>
            </div>

            <div className="hidden lg:block bg-[url('/Images/Rectangle26.png')] h-[486px] w-[52px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

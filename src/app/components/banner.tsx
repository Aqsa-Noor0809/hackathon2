export default function Banner() {
  return (
    <div
      className="Banner w-full h-[812.53px] bg-[url('/Images/banner.png')] bg-cover bg-center relative"
    >
      {/* Positioned Box */}
      <div
        className="Box bg-[#FFF3E3] h-[413px] md:h-[450px] w-[561px] md:w-[600px] rounded-[7px] absolute right-6 top-1/4 md:right-16 md:top-1/3 p-6 shadow-lg"
      >
        <div className="B mt-3 ml-2 md:ml-4 font-medium w-full md:w-[90%]">
          <h3 className="text-sm md:text-base">New Arrival</h3>
          <h2 className="text-[#B88E2F] text-3xl md:text-4xl lg:text-[52px] font-bold leading-[48px] md:leading-[60px] lg:leading-[72px] mt-2 mb-4">
            Discover Our <br /> New Collection
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white px-4 md:px-6 py-2 md:py-3 rounded mt-4 hover:bg-gray-800 w-full max-w-[222px] h-auto md:h-[74px] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

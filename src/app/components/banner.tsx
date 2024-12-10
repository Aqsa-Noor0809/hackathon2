export default function Banner() {
  return (
    <div
      className="Banner w-full h-[500px] md:h-[812.53px] bg-[url('/Images/banner.png')] bg-cover bg-center relative flex justify-center items-center"
    >
      {/* Positioned Box */}
      <div
        className="Box bg-[#FFF3E3] h-auto max-h-[450px] w-[90%] sm:w-[70%] md:w-[561px] lg:w-[600px] rounded-[7px] absolute right-4 sm:right-8 md:right-20 top-[28%] md:top-[33%] p-4 sm:p-6 shadow-lg"
      >
        <div className="B font-medium mt-6 ml-2 md:ml-4">
          <h3 className="text-sm sm:text-base md:text-lg text-gray-600">New Arrival</h3>
          <h2 className="text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-snug md:leading-tight mt-2 mb-4">
            Discover Our <br /> New Collection
          </h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded mt-4 hover:bg-gray-800 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[222px] h-16 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

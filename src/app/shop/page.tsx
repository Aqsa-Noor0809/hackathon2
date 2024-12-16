import Footer2 from "../components/footer2";

export default function Shop() {
    const products = [
        {
          id: 1,
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
          image: "/Images/image 1.png",
          discount: "-30%",
        },
        {
          id: 2,
          name: "Leviosa",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          image: "/Images/image 2.png",
        },
        {
          id: 3,
          name: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
          image: "/Images/image 3.png",
          discount: "-50%",
        },
        {
          id: 4,
          name: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
          image: "/Images/image 4.png",
          isNew: true,
        },
        {
            id: 5,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            image: "/Images/image 1.png",
            discount: "-30%",
          },
          {
            id: 6,
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/Images/image 2.png",
          },
          {
            id: 7,
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 14.000.000",
            image: "/Images/image 3.png",
            discount: "-50%",
          },
          {
            id: 8,
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            image: "/Images/image 4.png",
            isNew: true,
          },
          {
            id: 9,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            image: "/Images/image 1.png",
            discount: "-30%",
          },
          {
            id: 10,
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/Images/image 2.png",
          },
          {
            id: 11,
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 14.000.000",
            image: "/Images/image 3.png",
            discount: "-50%",
          },
          {
            id: 12,
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            image: "/Images/image 4.png",
            isNew: true,
          },
          {
            id: 13,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            image: "/Images/image 1.png",
            discount: "-30%",
          },
          {
            id: 14,
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/Images/image 2.png",
          },
          {
            id: 15,
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 14.000.000",
            image: "/Images/image 3.png",
            discount: "-50%",
          },
          {
            id: 16,
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            image: "/Images/image 4.png",
            isNew: true,
          },
    ];
  
    return (
      <div className="Shop">
        {/* Header Section */}
        <div className="bg-[url('/Images/Rectangle1.png')] bg-cover h-[328px] flex justify-center items-center">
          <div className="text-center flex text-[28px] font-bold space-x-2">
            <h3>Home</h3>
            <h3>&gt;</h3>
            <h3>Shop</h3>
          </div>
        </div>
  
        {/* Filter Section */}
        <div className="bg-[#F9F1E7] py-4 px-6 flex flex-wrap items-center justify-between space-x-6 gap-6">
            <div className="flex ">
          <div className="flex items-center space-x-3 pl-6">
            <img src="/Images/filter.png" alt="Filter" className="h-[25px] w-[25px]" />
            <h5 className="text-[20px]">Filter</h5>
            <div className="flex items-center space-x-3 pr-9 pl-6">
            <img src="/Images/rounds.png" alt="Options" className="h-[28px] w-[28px]" />
            <img src="/Images/view-list.png" alt="View List" className="h-[24px] w-[24px]" />
          </div>
          </div>
          <div className="flex space-x-7 ">
                <div className="h-[37px] bg-[#9F9F9F] w-[2px] "></div>
                <h4 className="pt-[7px] font-medium">Showing 1–16 of 32 results</h4>
            </div>
          </div>

          <div className="flex space-x-6 pr-10">
          <div className="flex items-center space-x-6 mr-5">
            <h5 className="font-medium">Show</h5>
            <div className="w-[55px] h-[55px] bg-white text-center text-[#9F9F9F] flex items-center justify-center rounded-lg">
              16
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <h5 className="font-medium">Sort by</h5>
            <div className="w-[188px] h-[55px] bg-white text-center text-[#9F9F9F] flex items-center justify-center rounded-lg">
              Default
            </div>
          </div>
        </div>
        </div>
  
        {/* Products Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-white shadow-md overflow-hidden group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[301px] w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  {product.discount || product.isNew ? (
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 text-sm font-bold rounded-full ${
                        product.discount ? "bg-red-500" : "bg-emerald-500"
                      } text-white`}
                    >
                      {product.discount || "New"}
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                <button className="bg-white text-[#B88E2F] w-[245px] h-[48px] px-4 py-2 text-sm font-semibold shadow-md hover:bg-[#B88E2F] hover:text-white duration-150 mb-6">
                  Add to Cart
                </button>
                <div className="flex justify-center space-x-5">
                  <button
                    title="Share"
                    className="text-white w-[70px] h-[40px] shadow-md flex justify-center items-center"
                  >
                    <img src="/Images/share.png" alt="share" />
                    Share
                  </button>
                  <button
                    title="Compare"
                    className="text-white w-[70px] h-[40px] shadow-md flex justify-center items-center"
                  >
                    <img src="/Images/compare.png" alt="compare" />
                    Compare
                  </button>
                  <button
                    title="Like"
                    className="text-white w-[70px] h-[40px] shadow-md flex justify-center items-center"
                  >
                    <img src="/Images/like.png" alt="like" />
                    Like
                  </button>
                </div>
              </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-center text-[20px]">{product.name}</h5>
                    <p className="text-sm text-center text-gray-500">{product.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="font-bold text-lg">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-8 justify-center">
        <button className="mt-8 px-6 py-3 bg-[#F9F1E7] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-200 w-[60px] h-[60px] text-[20px]">
          1
        </button>
        <button className="mt-8 px-6 py-3 bg-[#F9F1E7] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-200 w-[60px] h-[60px] text-[20px]">
          2
        </button>
        <button className="mt-8 px-6 py-3 bg-[#F9F1E7] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-200 w-[60px] h-[60px] text-[20px]">
          3
        </button>
        <button className="mt-8 px-6 py-3 bg-[#F9F1E7] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-200 w-[98px] h-[60px] text-[20px]">
          Next
        </button>
        </div>
          </div>
        </div>
        <div>
          <Footer2 />
        </div>
      </div>
    );
  }
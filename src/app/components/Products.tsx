export default function OProducts() {
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
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/Images/images (1).png",
      isNew: true,
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      image: "/Images/images (2).png",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/Images/images (3).png",
      discount: "-50%",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      image: "/Images/images (4).png",
      isNew: true,
    },
  ];

  return (
    <div className="OProducts bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-[301px] w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />

              {/* Discount or New Badge */}
              {(product.discount || product.isNew) && (
                <div
                  className={`absolute top-3 left-3 px-3 py-1 text-white text-sm font-bold rounded-full ${
                    product.discount
                      ? "bg-red-500"
                      : "bg-emerald-500"
                  }`}
                >
                  {product.discount || "New"}
                </div>
              )}

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

              <div className="p-4 bg-[#F4F5F7]">
                <h5 className="font-semibold text-[24px]">{product.name}</h5>
                <p className="text-sm text-[#898989]">{product.description}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="font-semibold text-lg text-gray-800">
                    {product.price}
                  </span>
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

        <button className="mt-8 px-6 py-3 border border-[#B88E2F] text-[#B88E2F] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-300 w-[245px] h-[48px]">
          Show More
        </button>
      </div>
    </div>
  );
}

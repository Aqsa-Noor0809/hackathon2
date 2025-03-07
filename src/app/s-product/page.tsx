  export default function SingleProduct() {
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
    ];
  
    return (
      <div>
        {/* Banner 1 Section */}
        <div className="Banner1">
          <div className="header bg-[#F9F1E7] h-[60px] sm:h-[80px] p-4 sm:p-6 lg:pl-16">
            <ul className="flex space-x-4 sm:space-x-6 text-center text-sm sm:text-base">
              <li className="opacity-50">Home</li>
              <li>&gt;</li>
              <li className="opacity-50">Shop</li>
              <li>&gt;</li>
              <li>
                <img src="/images/Line 5.png" alt="line" className="h-5 sm:h-7 w-0.5" />
              </li>
              <li>Asgard Sofa</li>
            </ul>
          </div>
  
          {/* Product Details Section */}
          <div className="flex flex-wrap lg:flex-nowrap lg:pt-10 space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-10 p-4 sm:p-6 lg:pl-16">
            {/* Left Side (Thumbnails) */}
            <div className="leftSide flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-10">
              <div className="left flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
                <img src="/images/m1.png" alt="" className="bg-[#F9F1E7] rounded-[10px] w-[60px] sm:w-[80px] lg:w-[100px]" />
                <img src="/images/m2.png" alt="" className="bg-[#F9F1E7] rounded-[10px] w-[60px] sm:w-[80px] lg:w-[100px]" />
                <img src="/images/m3.png" alt="" className="bg-[#F9F1E7] rounded-[10px] w-[60px] sm:w-[80px] lg:w-[100px]" />
                <img src="/images/m4.png" alt="" className="bg-[#F9F1E7] rounded-[10px] w-[60px] sm:w-[80px] lg:w-[100px]" />
              </div>
              <div className="right">
                <img src="/images/Asgaard.png" alt="" className="bg-[#F9F1E7] rounded-[10px] w-full sm:w-[400px] lg:w-[500px]" />
              </div>
            </div>
  
            {/* Right Side (Product Info) */}
            <div className="rightSide space-y-4 w-full sm:w-auto">
              <h3 className="font-medium text-[28px] sm:text-[32px] lg:text-[38px]">Asgaard Sofa</h3>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] opacity-50">Rs. 250,000.00</p>
              <div className="flex space-x-3 items-center">
                <img src="/images/61.png" alt="" className="w-[80px] sm:w-[100px]" />
                <img src="/images/38.png" alt="line" className="h-5 w-0.5" />
                <p className="text-[10px] sm:text-[12px] opacity-50">5 Customer Review</p>
              </div>
              <p className="text-wrap text-[12px] sm:text-[14px]">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
              <p className="opacity-50 text-[12px] sm:text-[14px]">Size</p>
              <div className="flex space-x-4">
                <img src="/images/s1.png" alt="" className="w-[30px] sm:w-[40px]" />
                <img src="/images/s2.png" alt="" className="w-[30px] sm:w-[40px]" />
                <img src="/images/s3.png" alt="" className="w-[30px] sm:w-[40px]" />
              </div>
              <p className="opacity-50 text-[12px] sm:text-[14px]">Color</p>
              <div className="flex space-x-4">
                <img src="/images/co1.png" alt="" className="w-[30px] sm:w-[40px]" />
                <img src="/images/co2.png" alt="" className="w-[30px] sm:w-[40px]" />
                <img src="/images/co3.png" alt="" className="w-[30px] sm:w-[40px]" />
              </div>
              <div className="flex space-x-4 pt-6 sm:pt-8">
                <button className="outline outline-1 px-4 sm:px-6 py-1 sm:py-2 rounded-lg text-[12px] sm:text-[14px]">- 1 +</button>
                <button className="outline outline-1 px-4 sm:px-6 py-1 sm:py-2 rounded-lg text-[12px] sm:text-[14px]">Add to Cart</button>
                <button className="outline outline-1 px-4 sm:px-6 py-1 sm:py-2 rounded-lg text-[12px] sm:text-[14px]">+ Compare</button>
              </div>
              <div className="border-b-2 pt-6 sm:pt-8"></div>
              <div className="space-x-3 text-[12px] sm:text-[14px] text-left flex">
                <div className="lft opacity-50">
                  <ul className="space-y-2 sm:space-y-4">
                    <li>SKU</li>
                    <li>Category</li>
                    <li>Tags</li>
                    <li>Share</li>
                  </ul>
                </div>
                <div className="rit">
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="opacity-50">: SS001</li>
                    <li className="opacity-50">: Sofas</li>
                    <li className="opacity-50">: Sofa, Chair, Home, Shop</li>
                    <li className="">
                      <div className="flex space-x-3">
                        <p className="opacity-50">:</p>
                        <img src="/images/f.png" alt="" className="h-[16px] sm:h-[20px] w-[16px] sm:w-[20px]" />
                        <img src="/images/l.png" alt="" className="h-[16px] sm:h-[20px] w-[16px] sm:w-[20px]" />
                        <img src="/images/t.png" alt="" className="h-[20px] sm:h-[25px] w-[20px] sm:w-[25px] pb-1" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-b-2"></div>
  
        {/* Banner 2 Section */}
        <div className="Banner2 m-4 sm:m-6">
          <div className="w-full justify-items-center">
            <div className="Banner2Header flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-7 text-[14px] sm:text-[16px] lg:text-[18px]">
              <p>Description</p>
              <p className="opacity-50">Additional Information</p>
              <p className="opacity-50">Review [5]</p>
            </div>
            <div className="m-4 sm:m-8 px-4 sm:px-8 lg:px-44 space-y-4 sm:space-y-8 opacity-50 text-[12px] sm:text-[14px]">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="text-justify">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:pl-12 sm:justify-start gap-6 lg:pr-10 sm:m-8">
              <img src="/images/g1.png" alt="sofa" className="max-w-xs lg:max-w-lg w-auto" />
              <img src="/images/g2.png" alt="sofa" className="max-w-xs lg:max-w-lg w-auto" />
            </div>
          </div>
        </div>
  
        {/* Banner 3 Section (Related Products) */}
        <div className="Banner3 justify-items-center bg-white p-4 sm:p-6">
          <h3 className="text-[24px] sm:text-[28px] lg:text-[38px] text-center font-medium mt-6 sm:mt-8">
            Related Products
          </h3>
  
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-white shadow-md overflow-hidden group"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[200px] sm:h-[250px] lg:h-[301px] w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
  
                  {/* Discount or New Badge */}
                  {(product.discount || product.isNew) && (
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 text-white text-sm font-bold rounded-full ${
                        product.discount ? "bg-red-500" : "bg-emerald-500"
                      }`}
                    >
                      {product.discount || "New"}
                    </div>
                  )}
  
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                    <button className="bg-white text-[#B88E2F] w-[180px] sm:w-[245px] h-[40px] sm:h-[48px] px-4 py-2 text-sm font-semibold shadow-md hover:bg-[#B88E2F] hover:text-white duration-150 mb-4 sm:mb-6">
                      Add to Cart
                    </button>
                    <div className="flex justify-center space-x-4 sm:space-x-5">
                      <button
                        title="Share"
                        className="text-white w-[50px] sm:w-[70px] h-[30px] sm:h-[40px] shadow-md flex justify-center items-center"
                      >
                        <img src="/Images/share.png" alt="share" />
                        Share
                      </button>
                      <button
                        title="Compare"
                        className="text-white w-[50px] sm:w-[70px] h-[30px] sm:h-[40px] shadow-md flex justify-center items-center"
                      >
                        <img src="/Images/compare.png" alt="compare" />
                        Compare
                      </button>
                      <button
                        title="Like"
                        className="text-white w-[50px] sm:w-[70px] h-[30px] sm:h-[40px] shadow-md flex justify-center items-center"
                      >
                        <img src="/Images/like.png" alt="like" />
                        Like
                      </button>
                    </div>
                  </div>
  
                  <div className="p-4 bg-[#F4F5F7]">
                    <h5 className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px]">{product.name}</h5>
                    <p className="text-sm text-[#898989]">{product.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="font-semibold text-[14px] sm:text-[16px] lg:text-lg text-gray-800">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-[12px] sm:text-[14px]">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 mb-6 sm:mb-10 border border-[#B88E2F] text-[#B88E2F] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-300 w-[180px] sm:w-[245px] h-[40px] sm:h-[48px] text-[12px] sm:text-[14px]">
              Show More
            </button>
          </div>
        </div>
      </div>
    );
  }
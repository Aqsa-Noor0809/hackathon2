import Footer2 from "../components/footer2";

export default function CheckOut(){
    return(
        <div className="Checkout">
      {/* Header Section */}
      <div className="bg-[url('/Images/Rectangle1.png')] h-[328px] bg-cover bg-center">
        <div className="leading-5 pt-[83px] text-center">
          <div className="space-y-3">
            <img
              src="/Images/logos.png"
              alt="logo"
              className="h-[77px] w-[77px] mx-auto"
            />
            <h4 className="font-medium text-[48px]">Checkout</h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-6">
            <h3>Home</h3>
            <h3>&gt;</h3>
            <h3 className="font-normal">Checkout</h3>
          </div>
        </div>
      </div>

    <div className="flex">

        <div className=" mt-16 ml-32">
            <h2 className="font-semibold text-[36px]">Billing Details</h2>
            <form className="space-y-9 mt-6">
                <div className="flex space-x-8">
                    <div>
                <legend className="font-medium">First Name</legend>
                <input type="text" className=" h-[75px] w-[211px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5 " />
                </div>
                <div>
                <legend className="font-medium">Last Name</legend>
                <input type="text" className=" h-[75px] w-[211px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5 " />
                </div>
                </div>
                <div>
                <legend className="font-medium">Company Name (Optional)</legend>
                <input type="text" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <legend className="font-medium">Country / Region</legend>
                <select className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-4 text-[#9F9F9F]">
                <option value="Pakistan">Pakistan</option>
                <option value="Muslim">Muslim</option>
                <option value="U.S.A">U.S.A</option>
                <option value="Christian">Christian</option>
                </select>
                </div>
                <div>
                <legend className="font-medium">Street address</legend>
                <input type="text" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <legend className="font-medium">Town / City</legend>
                <input type="text" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <legend className="font-medium">Province</legend>
                <select className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-4 text-[#9F9F9F]">
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="K.P.K">K.P.K</option>
                </select>
                </div>
                <div>
                <legend className="font-medium">ZIP code</legend>
                <input type="text" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <legend className="font-medium">Phone</legend>
                <input type="tel" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <legend className="font-medium">Email address</legend>
                <input type="email" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5" />
                </div>
                <div>
                <input type="text" className=" h-[75px] w-[453px] border border-[#9F9F9F] rounded-[10px] mt-5 p-5 pl-5 mb-28" placeholder="Additional information" />
                </div>
            </form>
        </div>
        
        <div className="mt-28 ml-36">
            <div className="flex text-[24px] font-medium space-x-56 mb-5">
            <h3>Product</h3>
            <h3>Subtotal</h3>
            </div>
            <div>
                <div className="flex">
                <div className="space-y-5">
                <div className="flex space-x-2">
                    <h5 className=" text-[#9F9F9F] ">Asgaard sofa</h5>
                    <h5 className="text-[12px] mt-1">x 1</h5>
                </div>
                <h5 className="">Subtotal</h5>
                    <h5 className="">Total</h5>
                </div>
                <div className=" space-y-5">
                    <h5 className="font-light pl-48">Rs. 250,000.00</h5>
                    <h5 className="font-light pl-48">Rs. 250,000.00</h5>
                    <h5 className="font-bold text-[24px] pl-32 text-[#B88E2F]">Rs. 250,000.00</h5>
                </div>
                </div>
            </div>
            <div className=" h-[1px] w-[410px] justify-center bg-[#D9D9D9] mt-8"></div>
            <div className="mt-4">
                <div className="flex space-x-3">
                    <div className=" h-[14px] w-[14px] bg-black rounded-[10px] mt-[6px] "></div>
                    <h3>Direct Bank Transfer</h3>
                    </div>
                    <div>
                    <p className="font-light text-[#9F9F9F] mt-2">Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>
                    <div className="mt-6 space-y-3">
                    <div className="flex space-x-3">
                    <div className=" h-[14px] w-[14px] border border-[#9F9F9F] rounded-[10px] mt-[6px] "></div>
                    <h3 className="text-[#9F9F9F] font-medium">Direct Bank Transfer</h3>
                    </div>
                    <div className="flex space-x-3">
                    <div className=" h-[14px] w-[14px] border border-[#9F9F9F] rounded-[10px] mt-[6px] "></div>
                    <h3 className="text-[#9F9F9F] font-medium">Cash on Delivery</h3>
                    </div>
                    </div>
                    <p className="mt-6">Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our <b> privacy policy.</b></p>
                    <button className="text-center rounded-[15px] w-[318px] h-[64px] border border-black text-[20px] mt-10 ml-[74px] ">Place order</button>
                </div>
            </div>
        </div>

    </div>

    <div>
        <Footer2 />
    </div>

      </div>
    );
};
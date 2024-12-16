import Footer2 from "../components/footer2";

export default function contact() {
  return (
    <div className="contact">
      {/* Header Section */}
      <div className="bg-[url('/Images/Rectangle1.png')] h-[328px] bg-cover bg-center">
        <div className="leading-5 pt-[83px] text-center">
          <div className="space-y-3">
            <img
              src="/Images/logos.png"
              alt="logo"
              className="h-[77px] w-[77px] mx-auto"
            />
            <h4 className="font-medium text-[48px]">Contact</h4>
          </div>
          <div className="flex justify-center font-bold space-x-1 mt-6">
            <h3>Home</h3>
            <h3>&gt;</h3>
            <h3 className="font-normal">Contact</h3>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-[90px] space-y-2 px-4">
        <h5 className="text-[36px] font-semibold">Get In Touch With Us</h5>
        <p className="text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free
          To Drop Us <br className="hidden sm:block" /> An Email. Our Staff
          Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Details & Form Section */}
      <div className="flex flex-wrap justify-center gap-10 px-4 mt-10">
        {/* Details */}
        <div className="space-y-9 w-full md:w-1/2 lg:w-1/3">
          {/* Address */}
          <div className="flex space-x-5">
            <img
              src="/Images/vector.png"
              alt="Address"
              className="h-[27.59px] w-[22px] mt-1"
            />
            <div>
              <h5 className="text-[24px] font-medium">Address</h5>
              <p>
                236 5th SE Avenue, New <br />
                York NY10000, United <br />
                States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex space-x-5">
            <img
              src="/Images/phone.png"
              alt="Phone"
              className="h-[30px] w-[30px] mt-1"
            />
            <div>
              <h5 className="text-[24px] font-medium">Phone</h5>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex space-x-5">
            <img
              src="/Images/clock.png"
              alt="Clock"
              className="h-[23px] w-[23px] mt-2"
            />
            <div>
              <h5 className="text-[24px] font-medium">Working Time</h5>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 lg:w-[528.75px]">
          <form className="space-y-[30px]">
            <div className="space-y-[22px]">
              <legend className="font-medium">Your Name</legend>
              <input
                type="text"
                placeholder="Abc"
                className="h-[75px] w-full border-[1.5px] border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] pl-7"
              />
            </div>
            <div className="space-y-[22px]">
              <legend className="font-medium">Email Address</legend>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="h-[75px] w-full border-[1.5px] border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] pl-7"
              />
            </div>
            <div className="space-y-[22px]">
              <legend className="font-medium">Subject</legend>
              <input
                type="text"
                placeholder="This is an optional"
                className="h-[75px] w-full border-[1.5px] border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] pl-7"
              />
            </div>
            <div className="space-y-[22px]">
              <legend className="font-medium">Message</legend>
              <textarea
                placeholder="Hi! I'd like to ask about"
                className="h-[120px] w-full border-[1.5px] border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] pl-7 pt-7"
              />
            </div>
            <div className="pt-3 pb-16">
              <button
                type="submit"
                className="w-[237px] h-[55px] text-center border border-[#B88E2F] text-[#B88E2F] bg-white hover:bg-[#B88E2F] hover:text-white rounded-[5px] transition duration-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

import Footer2 from "../components/footer2";

export default function Blog() {
    return (
        <div className="Blog">
            <div className="bg-[url('/Images/Rectangle1.png')] h-[328px]">
                <div className="leading-5 pt-[83px]">
                    <div className="space-y-0">
                        <img src="/Images/logos.png" alt="logo" className="h-[77px] w-[77px] mx-auto" />
                        <h4 className="font-medium text-[48px] text-center">Blog</h4>
                    </div>
                    <div className="flex justify-center font-bold space-x-1 mt-6">
                        <h3>Home</h3>
                        <h3>&gt;</h3>
                        <h3 className="font-normal">Blog</h3>
                    </div>
                </div>
            </div>
            <div className="pt-32 px-4 lg:pl-28 lg:flex lg:space-x-8">
                <div className="lg:w-2/3 space-y-16">
                    {["b1.png", "b2.png", "b3.png"].map((image, index) => (
                        <div key={index}>
                            <img
                                src={`/Images/${image}`}
                                alt="Blog"
                                className="h-auto w-full rounded-[10px] object-cover"
                            />
                            <div className="flex space-x-8 pt-5">
                                <div className="flex space-x-3">
                                    <img src="/Images/admin-users.png" alt="admin" className="h-[20px] w-[20px]" />
                                    <h6 className="text-[#9F9F9F]">Admin</h6>
                                </div>
                                <div className="flex space-x-3">
                                    <img src="/Images/calender.png" alt="calendar" className="h-[20px] w-[20px]" />
                                    <h6 className="text-[#9F9F9F]">14 Oct 2022</h6>
                                </div>
                                <div className="flex space-x-3">
                                    <img src="/Images/tag.png" alt="tag" className="h-[20px] w-[20px]" />
                                    <h6 className="text-[#9F9F9F]">Wood</h6>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-[30px] mt-4 mb-4">
                                    {index === 0
                                        ? "Going all-in with millennial design"
                                        : index === 1
                                        ? "Exploring new ways of decorating"
                                        : "Handmade pieces that took time to make"}
                                </h4>
                                <p className="text-[#9F9F9F] font-normal text-[15px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
                                    malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                                    risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus
                                    mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                                    Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                                    ornare aenean euismod elementum.
                                </p>
                                <button className="text-center border-b border-b-black mt-7 mb-11">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/3 space-y-9 pt-16 lg:pt-0">
                    <div className="space-y-9 pl-5">
                        <input
                            type="text"
                            className="h-[58px] w-full lg:w-[311px] rounded-[8px] border border-[#9F9F9F] px-4"
                        />
                        <div className="space-y-6">
                            <h4 className="text-[24px] font-medium pl-9">Categories</h4>
                            <div className="text-[#9F9F9F] space-y-4 pl-9">
                                {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((category, i) => (
                                    <div key={i} className="flex justify-between">
                                        <h5>{category}</h5>
                                        <h5>{[2, 8, 7, 1, 6][i]}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[24px] font-medium pl-12">Recent Posts</h3>
                        {["c1.png", "c2.png", "c3.png", "c4.png", "c5.png"].map((post, i) => (
                            <div key={i} className="flex space-x-3 mt-7 pl-12">
                                <img
                                    src={`/Images/${post}`}
                                    alt="Recent post"
                                    className="w-[80px] h-[80px] rounded-[8px] object-cover"
                                />
                                <div className="pt-2">
                                    <h5 className="text-[14px] w-36 pt-1">
                                        {[
                                            "Going all-in with millennial design",
                                            "Exploring new ways of decorating",
                                            "Handmade pieces that took time to make",
                                            "Modern home in Milan",
                                            "Colorful office redesign",
                                        ][i]}
                                    </h5>
                                    <h6 className="text-[12px] text-[#9F9F9F]">03 Aug 2022</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex space-x-4 justify-center py-5">
                {[1, 2, 3, "Next"].map((item, index) => (
                    <button
                        key={index}
                        className="mt-8 px-6 py-3 bg-[#F9F1E7] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white transition duration-200 w-[60px] h-[60px] text-[20px]"
                        style={item === "Next" ? { width: "98px" } : {}}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <Footer2 />
        </div>
    );
}

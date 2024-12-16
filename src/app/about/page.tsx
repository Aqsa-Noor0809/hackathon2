export default function About(){
    return(
        <div className="About">
            <div className=" bg-[url('/Images/Rectangle1.png')] h-[328px] ">
            <div className="leading-5 pt-[83px]">
            <div className="space-y-0">
                <img src="/Images/logos.png" alt="logo" className=" h-[77px] w-[77px] ml-[615px]  " />
                <h4 className="font-medium text-[48px] text-center ">About</h4>
                </div>
            <div className=" flex justify-center font-bold space-x-1 mt-6 ">
                <h3>Home</h3>
                <h3>&gt;</h3>
                <h3 className="font-normal">About</h3>
            </div>
            </div>
            </div>
        </div>
    );
};
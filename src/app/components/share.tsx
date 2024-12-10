export default function Share() {
    return (
        <div className="relative">
            {/* Header Section */}
            <div className="font-semibold text-center mt-16">
                <h2 className="text-[#616161] text-lg md:text-xl lg:text-2xl">Share your setup with</h2>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">#FurniroFurniture</h2>
            </div>

            {/* Image Section */}
            <div
                className="Share bg-[url('/Images/Share1.png')] bg-cover bg-center h-[400px] md:h-[500px] lg:h-[721px] p-3 pb-6"
            ></div>

            {/* Spacer */}
            <div className="h-12 w-full"></div>
        </div>
    );
}

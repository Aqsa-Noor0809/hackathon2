export default function Footer2(){
    return(
        <div className="bg-[#FAF3EA] py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "trophy 1.png", title: "High Quality", subtitle: "Crafted from top materials" },
              { icon: "guarantee.png", title: "Warranty Protection", subtitle: "Over 2 years" },
              { icon: "shipping.png", title: "Free Shipping", subtitle: "Order over 150 $" },
              { icon: "customer-support.png", title: "24 / 7 Support", subtitle: "Dedicated support" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={`/Images/${feature.icon}`} alt={feature.title} className="h-[60px] w-[60px]" />
                <div>
                  <h5 className="font-semibold text-lg">{feature.title}</h5>
                  <p className="text-sm text-gray-500">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};
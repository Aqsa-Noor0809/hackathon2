export default function BTRange() {
    return (
      <div className="BTRange justify-center">
        
        <div className="text-center p-10">
          <h1 className="font-bold text-3xl">Browse The Range</h1>
          <p className="text-lg text-[#666666] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
  
        
        <div className="flex justify-center space-x-4 p-5">
        
          <div className="text-center">
            <img
              src="/Images/dining.png"
              alt="Dining"
              className="w-[381px] h-[480px] object-cover"
            />
            <h4 className="mt-5 text-lg font-semibold">Dining</h4>
          </div>
          
          <div className="text-center">
            <img
              src="/Images/livingroom.png"
              alt="Living"
              className="w-[381px] h-[480px] object-cover"
            />
            <h4 className="mt-5 text-lg font-semibold">Living</h4>
          </div>
        
          <div className="text-center">
            <img
              src="/Images/bedroom.png"
              alt="Bedroom"
              className="w-[381px] h-[480px] object-cover"
            />
            <h4 className="mt-5 text-lg font-semibold">Bedroom</h4>
          </div>
        </div>
      </div>
    );
  }
  
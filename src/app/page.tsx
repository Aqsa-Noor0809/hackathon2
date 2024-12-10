import Banner from "./components/banner";
import BTRange from "./components/BTRange";
import Inspirations from "./components/inspirations";
import OProducts from "./components/Products";
import Share from "./components/share";
import Home from "./home/page";

export default function App(){
  return(
    <div>
     <Home /> 
     <Banner />
     <BTRange />
     <OProducts />
     <Inspirations />
     <Share />
    </div>
  );
};
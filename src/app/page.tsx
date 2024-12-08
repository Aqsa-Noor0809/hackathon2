import Banner from "./components/banner";
import BTRange from "./components/BTRange";
import OProducts from "./components/products";
import Home from "./home/page";

export default function App(){
  return(
    <div>
     <Home /> 
     <Banner />
     <BTRange />
     <OProducts />
    </div>
  );
};
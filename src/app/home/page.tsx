import Banner from "../components/banner";
import BTRange from "../components/BTRange";
import Inspirations from "../components/inspirations";
import OProducts from "../components/Products";
import Share from "../components/share";


export default function Home(){
    return(
        <div>
            <Banner />
            <BTRange />
            <OProducts />
            <Inspirations />
            <Share />
        </div>
    );
};
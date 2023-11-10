import Banner from "./Banner/Banner";
import Bistro from "./Bistro/Bistro";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/category";
import Chefs from "./Chefs/Chefs";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Bistro></Bistro>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <Chefs></Chefs>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
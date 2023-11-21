import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import './features.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading='Check It Out'
            heading='Historic Place'></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pt-12 pb-20 px-36 ">
                <div><img src='https://i.ibb.co/R2gsRzz/92.jpg' alt="" /></div>
                <div className="md:ml-10">
                    <p>since 1859</p>
                    <p className="uppercase">Ahsan Manzil</p>
                    <p>Ahsan Manzil is one of the most significant architectural monuments of Bangladesh. The building structure was established on a raised platform of 1 meter, the two-storied palace measures 125.4 m by 28.75 m. The height of the first floor is 5 meters and the height of the first floor is 5.8 meters.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Featured;
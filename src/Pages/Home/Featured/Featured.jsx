import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import img from '../../../assets/home/featured.jpg'
import './features.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading='Check It Out'
            heading='Featured Item'></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pt-12 pb-20 px-36 ">
                <div><img src={img} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi quasi at atque aperiam. Hic expedita repudiandae eum cumque unde amet voluptate. Facere, maxime deserunt rerum quia et, placeat harum praesentium distinctio repellendus reiciendis vero voluptatem commodi accusantium sit cumque ex quam voluptas neque corporis ad nobis impedit? Architecto, ipsam?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
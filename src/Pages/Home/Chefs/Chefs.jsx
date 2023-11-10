import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import img from '../../../assets/home/slide1.jpg'
const Chefs = () => {
  return (
    <div>
      <SectionTitle
        subHeading="----Should Try----"
        heading="Chef recommends"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* first card */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
            </div>
          </div>
        </div>
        {/* first card */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-black text-[#BB8506]">ADD TO CART</button>
            </div>
          </div>
        </div>
        {/* first card */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4">ADD TO CART</button>
            </div>
          </div>
        </div>


        



      </div>
    </div>
  );
};

export default Chefs;

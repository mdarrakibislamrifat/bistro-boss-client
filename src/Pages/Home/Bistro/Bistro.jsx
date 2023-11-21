import "./bistro.css";

const Bistro = () => {
  return (
    <div className="bistro h-80 bg-fixed relative">
      <div className=" text-white text-center items-center bg-black opacity-60 mx-24 my-24 p-6 absolute">
        <h1 className="uppercase text-4xl font-bold">Location Suggestion</h1>
        <p>
          A friendly location suggestion system is a digital tool designed to
          recommend welcoming and pleasant places based on various preferences.
          Using advanced algorithms, user input, and location-based data, this
          system aims to provide personalized suggestions that cater to an
          individual's interests and needs.
        </p>
      </div>
    </div>
  );
};

export default Bistro;

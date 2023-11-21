import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
            <img className="h-96" src="https://i.ibb.co/k275WH8/5203299.jpg" alt="" />
        </div>
        <Link to='/'><button className="btn">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;
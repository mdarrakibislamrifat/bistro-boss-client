import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate();
    const location=useLocation();
    const handleGoogleSingIn=()=>{
        googleSignIn()
        .then(res=>{
            navigate(location?.state ? location.state : '/')
            const userInfo={
                email:res.user.email,
                name:res.user.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSingIn} className="btn">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
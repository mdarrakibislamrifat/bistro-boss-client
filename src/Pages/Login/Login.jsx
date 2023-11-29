import { useContext, useEffect,  useState } from "react";
import animation from '../../assets/Animation - 1700490734067.json'


import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";



const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const { user, signIn } = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
    .then((res) => {
      const user = res.user;
      navigate(location?.state ? location.state : '/')
      Swal.fire({
        title: "user login successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace: true});
    })
    .catch(error=>{
      setError(error.message)
    })
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
    <Helmet>
      <title>Bistro Boss | SignIn</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div><Lottie animationData={animation}></Lottie></div>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text" onBlur={handleValidateCaptcha}
                  
                  placeholder="Type The captcha above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
               
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center p-4">
              <small>
                New here ?{" "}
                <Link to="/signup">
                  Create an <span className="text-green-500 font-bold">account</span>
                </Link>
              </small>
            </p>
            <div className="divider"></div>
            <p className="text-center text-red-500">{error}</p>
            <div className="text-center mb-2">
            <SocialLogin></SocialLogin>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;

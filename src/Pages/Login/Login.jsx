import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
const captchaRef=useRef(null);
const [disabled,setDisabled]=useState(true)

const {user,signIn}=useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])


    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        signIn(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user)
        })
        
    }


    const handleValidateCaptcha=()=>{
        const user_captcha_value=captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
        
    }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} placeholder="Type The captcha above" name="captcha" className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
          </div>
          
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center '><small>New here ? <Link to='/signup'>Create an <span className='text-green-500'>account</span> </Link></small></p>
    </div>
  </div>
</div>
    );
};

export default Login;
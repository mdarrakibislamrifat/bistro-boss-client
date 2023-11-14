import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id}=item || {};
    const navigate=useNavigate();
    const location=useLocation();
    const {user}=useAuth();
  const axiosSecure=useAxiosSecure();
  const  [cart,refetch]=useCart()

const handleAddToCart=(food)=>{
  if(user && user.email){
    // send cart item to the database

    const cartItem={menuId:_id,email:user.email,name,image,price}
    axiosSecure.post('/carts',cartItem)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          title: `${name} added to your cart`,
          text: "You clicked the button!",
          icon: "success"
        });
        refetch()
      }
      
    })

  }
  else{
    Swal.fire({
      title: "You are not login",
      text: "Please login to add to the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{state:{from:location}})
      }
    });
  }
}

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">$ {price}</p>
      <div className="card-body flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        
        <div className="card-actions justify-end">
        <button onClick={()=>handleAddToCart(cart)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensilSpoon } from "react-icons/fa";

const UpdateItem = () => {
  const item = useLoaderData();
  const {name,category,recipe,price,_id}=item;
  const { register, handleSubmit,reset } = useForm();
  const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const axiosSecure=useAxiosSecure()
    const axiosPublic=UseAxiosPublic()
  const onSubmit =async (data) => {
    // image upload to imagebb and then get an url
    const imgFile={image:data.image[0]}
    const res=await axiosPublic.post(image_hosting_api,imgFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
    if(res.data.success){
        // now send the menu item data to the server 
        const menuItem={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        const menuRes=await axiosSecure.patch(`/menu/${_id}`,menuItem)
        
        if(menuRes.data.modifiedCount>0){
            // dfdf
            Swal.fire({
                title: "Good job!",
                text: `${data.name} is updated to menu`,
                icon: "success"
              });
        }
    }
    

  };
 
  return (
    <div>
      <SectionTitle
        heading="update item"
        subHeading="refresh info"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="recipe name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select 
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span>Price*</span>
              </label>
              <input defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="recipe details"
            ></textarea>
          </div>

          <div className="w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn mt-6">
            Update Menu Item <FaUtensilSpoon className="ml-4"></FaUtensilSpoon>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;

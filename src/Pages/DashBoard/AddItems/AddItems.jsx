import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import { FaBook, FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic"
import useAxiosSecure from "../../../Hooks/UseAxiosSecure"
import Swal from "sweetalert2";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {

  const { register, handleSubmit,reset } = useForm();
    const axiosSecure=useAxiosSecure()
    const axiosPublic=useAxiosPublic()
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
        const menuRes=await axiosSecure.post('/menu',menuItem)
        console.log(menuRes.data)
        reset()
        if(menuRes.data.insertedId){
            // dfdf
            Swal.fire({
                title: "Good job!",
                text: `${data.name} is added to site`,
                icon: "success"
              });
        }
    }
    

  };

  return (
    <div>
      <SectionTitle heading="add an item" subHeading="whats new"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              {...register("name",{required:true})}
              type="text"
              placeholder=" name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue='default'
                {...register("category",{required:true})}
                className="select select-bordered w-full "
              >
                <option disabled value='default'>Select a category</option>
                <option value="mirpur">Mirpur</option>
                <option value="dhanmondi">Dhanmondi</option>
                <option value="gulshan">Gulshan</option>
                <option value="boshundhara">Boshundhara</option>
                <option value="agargaon">Agargaon</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span>Price*</span>
              </label>
              <input
                {...register("price",{required:true})}
                type="number"
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>


          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details*</span>
              
            </label>
            <textarea {...register('recipe',{required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="details"
            ></textarea>
            
          </div>

                <div className="w-full">
                <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                </div>


          <button className="btn mt-6">Add Item <FaBook className="ml-4"></FaBook> </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

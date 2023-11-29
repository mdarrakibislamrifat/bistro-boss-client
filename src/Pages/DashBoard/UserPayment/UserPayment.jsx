import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const UserPayment = () => {
    const axiosPublic=UseAxiosPublic();
    const axiosSecure=useAxiosSecure()
    const { data: userPayment= [],refetch } = useQuery({
        queryKey: ["userPayment"],
        queryFn: async () => {
          const res = await axiosPublic.get("/payments");
          return res.data;
        },
      });

      const handleMakeAccept=async(item)=>{
        
           const res=await axiosSecure.patch(`/payments/${item._id}`)
              if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    title: "Accepted!",
                    icon: "success"
                  });
              }
             
      }
      
    return (
        <div>
            
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {userPayment.map((item,i)=><tr key={item._id}  className="bg-base-200">
        <th>{i+1}</th>
        <td>{item.email}</td>
        <td>$ {item.price}</td>
        <td>{item.status}</td>
        <td>{item.status==='payment'?'Done':<button onClick={()=>handleMakeAccept(item)} className="btn btn-sm btn-primary">Accept</button>}</td>
      </tr>)}
      
      
    </tbody>
  </table>
        </div>
    );
};

export default UserPayment;
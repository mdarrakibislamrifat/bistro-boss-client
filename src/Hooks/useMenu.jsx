import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import UseAxiosPublic from "./UseAxiosPublic";

const useMenu=()=>{
    // const [menu,setMenu]=useState([]);
    // const [loading,setLoading]=useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])

const axiosPublic=UseAxiosPublic()
    const {data:menu=[],isPending:loading,refetch}=useQuery({
        queryKey:['menu',],
        queryFn:async()=>{
            const res=await axiosPublic.get('/menu')
            return res.data;
        }
    })
    return [menu,loading,refetch];
}
export default useMenu;
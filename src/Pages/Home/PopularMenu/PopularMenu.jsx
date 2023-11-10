import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    console.log(menu)

    return (
        
        <section className="mb-12">
            <SectionTitle
            subHeading={'Popular Items'}
            heading={'From Our Menu'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {menu?.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
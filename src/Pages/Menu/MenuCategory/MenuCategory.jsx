import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,coverImg,coverTitle,paragraph}) => {
    return (
        <div className="pt-8">
            {coverTitle && <Cover img={coverImg} coverTitle={coverTitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <Link to={`/ourShop/${coverTitle}`}><button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;
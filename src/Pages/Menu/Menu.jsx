import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/location-symbol-with-landscape-background (1).jpg'
import dessertImg from '../../assets/menu/34632309636_90e776df_b.jpg'
import pizzaImg from '../../assets/menu/IMG_0427.jpg'
import saladImg from '../../assets/menu/Photo-SL_From-Top_01-15.jpg'
import soupImg from '../../assets/menu/download.jpeg'
import gulshanImg from '../../assets/menu/aerial-view-of-gulshan-2-circle-in-dhaka-bangladesh-PY6XW9.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/Sectiontitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {
    const [menu]=useMenu()
    const mirpur=menu.filter(item=>item.category === 'mirpur')
    const dhanmondi=menu.filter(item=>item.category === 'dhanmondi')
    const gulshan=menu.filter(item=>item.category === 'gulshan')
    const boshundhara=menu.filter(item=>item.category === 'boshundhara')
    const agargaon=menu.filter(item=>item.category === 'agargaon')

    return (
        <div>
            <Helmet>
                <title>Location | Service</title>
            </Helmet>
            <Cover img={menuImg} coverTitle='Our Service' ></Cover>

           <SectionTitle subHeading='Check Locations' heading='Here are some category'></SectionTitle>

          

           <MenuCategory items={mirpur}  coverImg={dessertImg} coverTitle='Mirpur' ></MenuCategory>

           <MenuCategory items={dhanmondi}  coverImg={pizzaImg} coverTitle='Dhanmondi' ></MenuCategory>

           <MenuCategory items={gulshan} coverImg={gulshanImg} coverTitle='Gulshan' ></MenuCategory>

           <MenuCategory items={boshundhara}  coverImg={saladImg} coverTitle='Boshundhara' ></MenuCategory>

           <MenuCategory items={agargaon}  coverImg={soupImg} coverTitle='Agargaon' ></MenuCategory>
            
        </div>
    );
};

export default Menu;
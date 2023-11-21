import { useState } from "react";
import orderCover from "../../assets/menu/Photo-SL_From-Top_01-15.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams();
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu();
    
    
    const mirpur=menu.filter(item=>item.category === 'mirpur')
    const dhanmondi=menu.filter(item=>item.category === 'dhanmondi')
    const gulshan=menu.filter(item=>item.category === 'gulshan')
    const boshundhara=menu.filter(item=>item.category === 'boshundhara')
    const agargaon=menu.filter(item=>item.category === 'agargaon')


 return (
    <div>
        <Helmet>
            <title>Location | Category</title>
        </Helmet>
      <Cover coverTitle="Location category" img={orderCover}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Mirpur</Tab>
        <Tab>Dhanmondi</Tab>
        <Tab>Gulshan</Tab>
        <Tab>Boshundhara</Tab>
        <Tab>Agargaon</Tab>
      </TabList>
      <TabPanel>
       <OrderTab items={mirpur}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={dhanmondi}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={gulshan}></OrderTab>
      </TabPanel>
      <TabPanel><OrderTab items={boshundhara}></OrderTab></TabPanel>
      <TabPanel><OrderTab items={agargaon}></OrderTab></TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;

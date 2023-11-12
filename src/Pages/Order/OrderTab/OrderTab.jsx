import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";

const OrderTab = ({ items }) => {
  const [currentPage,setCurrentPage]=useState(0);
  const swiperRef = useRef();

console.log(swiperRef.current)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      setCurrentPage(index+1)
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  
  
  return (
    <div>
      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>


      </Swiper> */}


      <Swiper onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default OrderTab;

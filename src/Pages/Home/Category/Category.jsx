import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";



const Category = () => {
  return (
    <section>
        <SectionTitle subHeading={''}
          heading={'Some Popular Location'}>
          
        </SectionTitle>
        
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src='https://i.ibb.co/ckZgV8H/bashundhara-city.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Boshundhara
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/vJqR0s8/03-Botanical-Garden-Dhaka.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Botanical
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/98Tx4S7/70-big.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Shiya Mosjid
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/pfNFxjn/exterior.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Gulshan
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/qpyyHDR/ebf8fc620ad1323e8499c9a441997194.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Dhanmondi
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/g98jXJK/1000-F-309142440-LK010ek-Ms6-V3r-Obc0c-Ex-DYZErm6-F3x-KE.jpg' alt="" />
          <h3 className="uppercase text-4xl text-center -mt-16 text-white shadow-lg">
            Sonargaon
          </h3>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Category;

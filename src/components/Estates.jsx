import { useEffect, useState } from "react";
import Estate from "./Estate";
import { useRef,} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAuth from "../hooks/useAuth";


const Estates = () => {

   const {estates} = useAuth();

    console.log('Estates', estates);


    return (
        <div className=" max-w-6xl mx-auto">
        
            
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

{
                estates.map((estate, idx)=><SwiperSlide key={idx}> <Estate estate={estate}  /> </SwiperSlide>)
            }

      </Swiper>
      </div>
    );
};

export default Estates;
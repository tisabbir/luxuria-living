
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = ({banners}) => {


    console.log(banners)
    
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
        <div>
           <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        


        {
            banners.map((banner, index) => {

                console.log(banner);
                
              return  <SwiperSlide key={index} > 
                    <img className=' w-full h-[500px]  bg-cover rounded-2xl' src={banner} alt="" />
                 </SwiperSlide>
            })
        }



      </Swiper>
        </div>
    );
};

export default Banner;
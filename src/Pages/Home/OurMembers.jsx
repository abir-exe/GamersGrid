import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
import { useEffect, useState } from "react";

const OurMembers = () => {

    const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Members.json');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
// console.log(userData)

    return (
        <div>
            <div className="w-2/6 mx-auto uppercase text-3xl font-exo text-center border-b py-1 mb-20 mt-20">Our Peoples</div>
            <div className="mb-20">
            <Swiper
              modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              
              className="mySwiper"
            >
              {
                userData.map(user => <SwiperSlide key={user.id}>
                    <div className="card my-10 lg:card-side bg-base-100 shadow-xl">
        <figure><img src={user.imageLink} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user.name}</h2>
          <p className="font-exo">Profession: {user.type}</p>
          <p>Benefit: {user.benefit}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn text-black bg-secondary text-[18px] hover:text-xl">Join</button> */}
          </div>
        </div>
      </div>
                    </SwiperSlide>)
              }
              
            </Swiper>
            </div>
        </div>
    );
};

export default OurMembers;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import flavorAttack from "../../assets/Images/1x/FLOVAR ATTACK-100.jpg"
import imageBurgur from "../../assets/Images/1x/2nd image-100.jpg"
import imageNagets from "../../assets/Images/1x/3nd image-100.jpg"


import "swiper/css";

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2000, // ⏱ 2 seconds
                disableOnInteraction: false, // user click kare to bhi continue rahe
            }}
            loop={true} // infinite loop
        >
            <SwiperSlide>
                <img src={flavorAttack} style={{ width: "100%" }} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={imageBurgur} style={{ width: "100%" }} />
            </SwiperSlide>

            <SwiperSlide>
                <img src={imageNagets} style={{ width: "100%" }} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
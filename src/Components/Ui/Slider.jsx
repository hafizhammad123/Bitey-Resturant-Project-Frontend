import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IconButton, Box, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import flavorAttack from "../../assets/Images/1x/FLOVAR ATTACK-100.jpg";
import imageBurgur from "../../assets/Images/1x/2nd image-100.jpg";
import imageNagets from "../../assets/Images/1x/3nd image-100.jpg";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ position: "relative" }}>
            {/* Custom Buttons */}
            <IconButton
                className="custom-prev"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "20px",
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "#E53935",
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.8)",

                    },
                   
                    height:isMobile ? "30px" : "60px",
                    width: isMobile ? "30px" : "60px",
                }}
            >
                <ArrowBackIosNewIcon  sx={{fontSize :isMobile && 12  }}/>
            </IconButton>

            <IconButton
                className="custom-next"
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "20px",
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "#E53935",
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.8)",
                    },
                    
                    height:isMobile ? "30px" : "60px",
                    width: isMobile ? "30px" : "60px",
                }}
            >
                <ArrowForwardIosIcon  sx={{fontSize :isMobile && 12  }}/>
            </IconButton>

            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
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
        </Box>
    );
};

export default Slider;




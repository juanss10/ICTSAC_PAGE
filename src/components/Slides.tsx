import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Slides = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="https://www.xtrafondos.com/descargar.php?id=3183&resolucion=3840x1633"
          alt="img"
          style={{
            width: "100%",
            height: "86vh",
            objectFit: "fill",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://a-static.besthdwallpaper.com/city-night-wallpaper-5120x2880-103285_55.jpg"
          alt="img"
          style={{
            width: "100%",
            height: "86vh",
            objectFit: "fill",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.wallpapers13.com/wp-content/uploads/2016/01/New-York-blue-neon-lighting-of-the-city-night-view-HD-Wallpaper-1920x1440.jpg"
          alt="img"
          style={{
            width: "100%",
            height: "86vh",
            objectFit: "fill",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/938/796/non_2x/night-scene-of-after-rain-city-in-cyberpunk-style-futuristic-nostalgic-80s-90s-neon-lights-vibrant-colorsrealistic-horizontal-illustration-ai-generated-free-photo.jpg"
          alt="img"
          style={{
            width: "100%",
            height: "86vh",
            objectFit: "fill",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;

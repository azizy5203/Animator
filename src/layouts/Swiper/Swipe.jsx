import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  A11y,
  Scrollbar,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "./Swipe.scss";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

const imgs = [
  "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
  "/aFDYcmwEWRiEh58Ri1tMpCUWPBp.jpg",
  "/vmzauGqSgx25rzavUbuN6c5Vdfc.jpg",
  "/7cjrEMDo2xDT95fvCNb0CssokxZ.jpg",
];

function Swipe() {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
          clickable: true,
        }}
        modules={[Autoplay, Navigation, A11y, Scrollbar, Pagination]}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {imgs.map((imgSrc) => (
          <SwiperSlide
            key={imgSrc}
            className="h-screen blur-[7px]">
            <img
              src={`${imgBaseUrl}${imgSrc}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipe;

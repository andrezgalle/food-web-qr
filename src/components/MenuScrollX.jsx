import { Link } from "react-router-dom"
import { useRef,useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Pollo from "../pages/Pollo";

function MenuScrollX() {

  let index =0;
  const navigate = useNavigate();
  //dependiendo este index se debe cargar el componente
  const slideChange = (e) => {
    index = e.activeIndex;
    console.log(index)
  }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-10" onSlideChange={slideChange}>
        <SwiperSlide id="1"><Link className="font-bold" to={'/Pollo'}>Pollos</Link></SwiperSlide>
        <SwiperSlide><Link className="font-bold" to={'/Plato a la Carta'}>Plato a la Carta</Link></SwiperSlide>
        <SwiperSlide><Link className="font-bold" to={'/Sopas'}>Sopas</Link></SwiperSlide>
        <SwiperSlide><Link className="font-bold" to={'/Adiciones'}>Adiciones</Link></SwiperSlide>
        <SwiperSlide><Link className="font-bold" to={'/Bebidas'}>Bebidas</Link></SwiperSlide>
      </Swiper>
      
      
    </>
  )
}

export default MenuScrollX
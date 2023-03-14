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
    <div className="w-full mx-auto flex gap-2 flex-col justify-center items-center">
      <Link to={'/pollo'} className="font-bold">Pollo</Link>
      <Link to={'/plato a la carta'}className="font-bold">Plato a la carta</Link>
      <Link to={'/sopas'}className="font-bold">Sopas</Link>
      <Link to={'/adiciones'}className="font-bold">Adiciones</Link>
      <Link to={'/bebidas'}className="font-bold">Bebidas</Link>
    </div>
  )
}

export default MenuScrollX
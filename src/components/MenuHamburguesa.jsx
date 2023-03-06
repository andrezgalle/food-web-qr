import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../assets/menu-burger-svgrepo-com.svg';
import Navegacion from './Navegacion';
import x from '../assets/x.png'
import RedesSociales from './RedesSociales';
import logo from '../assets/pollo-removebg-preview.png'

const MenuHamburguesa = ({setBody}) => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleHamburguer = () =>{
    setToggle(true);

    if(toggle){
      setToggle(false);
      console.log('cerrando');
      setBody(false)
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    }else{
      setToggle(true);
      console.log('abriendo')
      setBody(true)
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
    }
  }

  return (
    <>
    <div className='p-6 pt-2 w-full flex justify-between items-center z-10'>
      <img src={!toggle ? img : x} onClick={toggleHamburguer} className={`w-8 h-8  ${!toggle ? 'invert' : 'w-8'}`} alt="menu-hamburguesa" />
      <img src={logo} onClick={()=>navigate('/')} alt="logo" className='w-28' />
    </div>
      <div className={`h-screen w-screen fixed overflow-hidden z-10 bg-black flex flex-col pt-8 justify-between ${!toggle ? 'right-full transition-all duration-500':'right-0 transition-all duration-500'}`}>
        <Navegacion/>
        <RedesSociales/>
      </div>
    </>
  )
}

export default MenuHamburguesa
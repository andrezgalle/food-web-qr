import {useState} from 'react'
import img from '../assets/menu-burger-svgrepo-com.svg';
import Navegacion from './Navegacion';
import x from '../assets/x.png'
import RedesSociales from './RedesSociales';

const MenuHamburguesa = ({setBody}) => {

  const [toggle, setToggle] = useState(false);

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
    <div className='p-6'>
      <img src={!toggle ? img : x} onClick={toggleHamburguer} className={`w-8  ${!toggle ? 'invert' : ''}`} alt="menu-hamburguesa" />
    </div>
      <div className={`h-screen w-screen fixed overflow-hidden bg-black flex flex-col pt-8 justify-between ${!toggle ? 'right-full transition-all duration-500':'right-0 transition-all duration-500'}`}>
        <Navegacion/>
        <RedesSociales/>
      </div>
    </>
  )
}

export default MenuHamburguesa
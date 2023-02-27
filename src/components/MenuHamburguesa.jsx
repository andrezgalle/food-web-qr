import {useState} from 'react'
import img from '../assets/menu-burger-svgrepo-com.svg';
import Navegacion from './Navegacion';
import RedesSociales from './RedesSociales';

const MenuHamburguesa = ({setBody}) => {

  const [toggle, setToggle] = useState(false);

  const toggleHamburguer = () =>{
    setToggle(true);

    if(toggle){
      setToggle(false);
      console.log('cerrando');
      setBody(false)
    }else{
      setToggle(true);
      console.log('abriendo')
      setBody(true)
    }
  }

  return (
    <>
    <div className='p-6'>
      <img src={img} onClick={toggleHamburguer} className='w-8 invert' alt="menu-hamburguesa" />
    </div>
      <div className={`h-screen w-screen fixed overflow-hidden bg-black flex flex-col pt-8 justify-between ${!toggle ? 'right-full transition-all duration-500':'right-0 transition-all duration-500'}`}>
        <Navegacion/>
        <RedesSociales/>
      </div>
    </>
  )
}

export default MenuHamburguesa
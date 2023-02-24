import Splash from '../components/Splash';
import MenuHamburguesa from '../components/MenuHamburguesa';
import TargetFood from '../components/TargetFood';
import { useState, useEffect } from 'react';
import pollo from '../assets/pngwing.com (5).png'
import platoCarta from '../assets/pngwing.com (6).png'
import sopa from '../assets/pngwing.com (7).png'
import bebida from '../assets/pngwing.com (8).png'


const Menu = () => {

  const [showSplash, setShowSplash] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 3000);

    const timer2 = setTimeout(()=>{
      setEliminar(true);
    },2500)

    return () => clearTimeout(timer,timer2);
  }, []);

  return (
    <div className='bg-gray-100 h-full'>
      <Splash/>
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-1000 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-500'} ${eliminar ? '':'hidden'}`}>
      
      <div className='p-6'>
        <MenuHamburguesa/>
      </div>

      <h1 className='text-black mt-4 text-5xl font-bold text-center leading-tight'>¿Qué Quieres Comer Hoy?</h1>

      <div className='mt-8 grid grid-cols-1 justify-center  w-8/12 mx-auto gap-4 justify-items-center	p-4'>
        <TargetFood
          img={pollo}
          texto={'Pollo'}
        />
        <TargetFood
          img={platoCarta}
          texto={'Plato Carta'}       
        />
        <TargetFood
          img={sopa}
          texto={'Sopas'}
        />
        <TargetFood
          img={bebida}
          texto={'Bebidas'}
        />
      </div>

      </div>
    </div>
  );
}

export default Menu
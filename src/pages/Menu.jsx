import Splash from '../components/Splash';
import MenuHamburguesa from '../components/MenuHamburguesa';
import TargetFood from '../components/TargetFood';
import { useState, useEffect } from 'react';
import pollo from '../assets/pngwing.com (5).png'
import platoCarta from '../assets/pngwing.com (6).png'
import sopa from '../assets/pngwing.com (7).png'
import bebida from '../assets/pngwing.com (8).png'
import adiciones from '../assets/pngwing.com (9).png'
import BotonWppFlotante from '../components/BotonWppFlotante';
import Domicilios from '../components/Domicilios';

const Menu = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }, [])

  const [showSplash, setShowSplash] = useState(false);
  const [eliminar, setEliminar] = useState(false);

  const [body,setBody] = useState(false);

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
    <div className={`bg-gray-100 h-full ${body ? 'overflow-hidden h-screen':''}`}>
      <Splash/>
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-1000 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-500'} ${eliminar ? '':'hidden'}`}>
      
      <div className=''>
        <MenuHamburguesa
          setBody={setBody}
        />
      </div>

      <h1 className='text-black mt-4 text-5xl font-bold text-center leading-tight'>¿Qué Quieres Comer Hoy?</h1>
      <Domicilios/>
      <BotonWppFlotante/>

      <div className='mt-8 grid grid-cols-1 justify-center  w-8/12 mx-auto gap-4 justify-items-center	p-4'>
        <TargetFood
          img={pollo}
          texto={'Pollo'}
          productos={'9'}
        />
        <TargetFood
          img={platoCarta}
          texto={'Plato a la Carta'}
          productos={'12'}      
        />
        <TargetFood
          img={sopa}
          texto={'Sopas'}
          productos={'3'}
        />
        <TargetFood
          img={adiciones}
          texto={'Adiciones'}
          productos={'6'}
        />
        <TargetFood
          img={bebida}
          texto={'Bebidas'}
          productos={'12'}
        />
      </div>

      </div>
    </div>
  );
}

export default Menu
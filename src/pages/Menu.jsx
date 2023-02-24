import Splash from '../components/Splash';
import { useState, useEffect } from 'react';
import MenuHamburguesa from '../components/MenuHamburguesa';
import TargetFood from '../components/TargetFood';
import imgPollo from '../assets/pngwing.com.png'
import platoCarta from '../assets/pngwing.com (1).png'
import sopa from '../assets/pngwing.com (3).png'
import bebida from '../assets/pngwing.com (4).png'


const Menu = () => {

  const [showSplash, setShowSplash] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 2900);

    const timer2 = setTimeout(()=>{
      setEliminar(true);
    },2500)

    return () => clearTimeout(timer,timer2);
  }, []);

  return (
    <div className='h-screen'>
      <Splash/>
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-1000 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-500'} ${eliminar ? '':'hidden'}`}>
        <div className='clase'>
          <MenuHamburguesa/>

          <div className='mt-24 pt-2'>
            <TargetFood
              titulo={'Pollo'}
              img={imgPollo}
            />
            <TargetFood
              titulo={'Plato Carta'}
              img={platoCarta}
            />
            <TargetFood
              titulo={'Sopas'}
              img={sopa}
            />
            <TargetFood
              titulo={'Bebidas'}
              img={bebida}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu
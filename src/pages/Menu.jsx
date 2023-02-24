import Splash from '../components/Splash';
import { useState, useEffect } from 'react';



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
    <div>
      <Splash/>
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-1000 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-500'} ${eliminar ? '':'hidden'}`}>
       <p>hola</p>
      </div>
    </div>
  );
}

export default Menu
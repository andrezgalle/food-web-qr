import img from '../assets/pollo.jpg'
import { useState, useEffect } from 'react';
function Splash() {

  const [showSplash, setShowSplash] = useState(true);
  const [eliminar, setEliminar] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    const timer2 = setTimeout(()=>{
      setEliminar(false);
    },3000)

    return () => clearTimeout(timer,timer2);
  }, []);

  return (
    <div className={`w-screen h-screen flex justify-center items-center ${eliminar ? '':'hidden'}`}>
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-200 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-200'} ${eliminar ? '':'hidden'}`}>
        <img src={img} alt="Splash Logo" className='m-auto'/>
        <p className='text-3xl font-bold text-black text-center uppercase mt-1'>Asadero Don Kiko</p>
      </div>
    </div>
  );
}

export default Splash
import img from '../assets/pollo-asado.png'
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
    <div className={`w-full h-screen flex justify-center items-center bg-black
        ${showSplash ? 'transition-opacity ease-in-out duration-500 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-500'}
        ${eliminar ? '':'hidden'}`}
    >
      <div className={`${showSplash ? 'transition-opacity ease-in-out duration-200 opacity-100' : 'opacity-0 transition-opacity ease-in-out duration-200'} ${eliminar ? '':'hidden'}`}>
        <img src={img} alt="Splash Logo" className='m-auto w-36'/>
        <p className='text-3xl font-bold text-white text-center uppercase mt-4'>Asadero<span className='text-red-600'> Don Kiko</span></p>
      </div>
    </div>
  );
}

export default Splash
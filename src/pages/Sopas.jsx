import MenuHamburguesa from '../components/MenuHamburguesa'
import { useState, useEffect } from 'react';
import MenuScrollX from '../components/MenuScrollX';
import CardFood from '../components/CardFood';
import menudencia from '../assets/minificado/menudencia-removebg-preview.png'
import ajiaco from '../assets/minificado/ajiaco-removebg-preview.png'
import mondongo from '../assets/minificado/mondongo-removebg-preview.png'

const Sopas = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }, [])
  
  const [body,setBody] = useState(false);
  return (
    <>
        <MenuHamburguesa
          setBody={setBody}
        />
        <MenuScrollX/>

        <h1 className="text-3xl mt-20 text-center">Sopas</h1>

        <div className='mt-4 px-6'>
              <CardFood
                titulo={'Sopa de Menudencia'}
                imagen={menudencia}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />              
              <CardFood
              titulo={'Sopa de Mondongo'}
              imagen={mondongo}
              descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
              precio={'11.000'}
            />              
            <CardFood
            titulo={'Sopa de Ajiaco'}
            imagen={ajiaco}
            descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
            precio={'11.000'}
          />
        </div>
    </>
  )
}

export default Sopas
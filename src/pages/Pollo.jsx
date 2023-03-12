import MenuHamburguesa from '../components/MenuHamburguesa'
import { useState, useEffect } from 'react';
import MenuScrollX from '../components/MenuScrollX';
import CardFood from '../components/CardFood';
import unCuarto from '../assets/pollo1-4-removebg-preview.png'
import unMedio from '../assets/pollo1-2-removebg-preview.png'
import completo from '../assets/minificado/pollo broaster 02 (1).png'
import asadoUnCuarto from '../assets/minificado/pollo-asado-1-4-removebg-preview.png';
import asadoMedio from '../assets/minificado/pollo-asado-1-2-removebg-preview.png';
import asadoCompleto from '../assets/minificado/pollo-asado-removebg-preview (1).png';
import fritoUnCuarto from '../assets/minificado/pollo-frito-1-4-removebg-preview.png';
import fritoMedio from '../assets/minificado/pollo-frito-1-2-removebg-preview.png';
import fritoCompleto from '../assets/minificado/pollo-frito-completo.png'
import Domicilios from '../components/Domicilios';



const Pollo = () => {
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
        <Domicilios/>
        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Broaster</h2>
          <div className='mt-4 '>
              <CardFood
                titulo={'1 / 4  Pollo Broaster'}
                imagen={unCuarto}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'8.000'}
              />
              <CardFood
                titulo={'1 / 2 Pollo Broaster'}
                imagen={unMedio}
                descripcion={'Cuatro presas de pollo, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'16.000'}
              />
              <CardFood
                titulo={'Pollo Broaster Completo'}
                imagen={completo}
                descripcion={'Pollo completo, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'29.000'}
              />
          </div>
        </div>

        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Asado</h2>
          <div className='mt-4 '>
          <CardFood
                titulo={'1 / 4 Pollo Asado'}
                imagen={asadoUnCuarto}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'7.500'}
              />
              <CardFood
                titulo={'1 / 2 Pollo Asado'}
                imagen={asadoMedio}
                descripcion={'Cuatro presas de pollo, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'15.000'}
              />
              <CardFood
                titulo={'Pollo Asado Completo'}
                imagen={asadoCompleto}
                descripcion={'Pollo completo, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'27.000'}
              />
          </div>
        </div>

        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Frito</h2>
          <div className='mt-4 '>
            <CardFood
                titulo={'1 / 4 Pollo Frito'}
                imagen={fritoUnCuarto}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'7.500'}
              />
              <CardFood
                titulo={'1 / 2 Pollo Frito'}
                imagen={fritoMedio}
                descripcion={'Cuatro presas de pollo, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'15.000'}
              />
              <CardFood
                titulo={'Pollo Frito Completo'}
                imagen={fritoCompleto}
                descripcion={'Pollo completo, acompañado con papa salada, arepa, salsas y aji al gusto'}
                precio={'27.000'}
              />
          </div>
        </div>
    </>
  )
}

export default Pollo
import MenuHamburguesa from '../components/MenuHamburguesa'
import { useState, useEffect } from 'react';
import MenuScrollX from '../components/MenuScrollX';
import CardFood from '../components/CardFood';
import unCuarto from '../assets/pollo1-4-removebg-preview.png'
import unMedio from '../assets/pollo1-2-removebg-preview.png'
import completo from '../assets/pollocompleto-removebg-preview.png'
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

        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Broaster</h2>
          <div className='mt-4 '>
              <CardFood
                titulo={'Pollo Broaster 1 / 4'}
                imagen={unCuarto}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Pollo Broaster 1 / 2'}
                imagen={unMedio}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Pollo Broaster Completo'}
                imagen={completo}
                descripcion={'Dos presas de pollo a tu elección, acompañado con papas a la francesa, arepa frita, salsas y aji al gusto'}
                precio={'11.000'}
              />
          </div>
        </div>

        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Asado</h2>
          <div className='mt-4 '>

          </div>
        </div>

        <div className='px-6 my-4'>
          <h2 className='text-3xl font-bold'>Pollo Frito</h2>
          <div className='mt-4 '>

          </div>
        </div>
    </>
  )
}

export default Pollo
import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import MenuScrollX from "../components/MenuScrollX";
import CardFood from "../components/CardFood";
import arrozConPollo from '../assets/minificado/arroz-con-pollo-removebg-preview.png'
import bagreFrito from '../assets/minificado/bagre-frito-removebg-preview.png';
import bagreEnSalsa from '../assets/minificado/bagreensalsa-removebg-preview.png'
import bandejaConPollo from '../assets/minificado/bandeja-pollo-removebg-preview.png'
import churrasco from '../assets/minificado/churrasco-removebg-preview.png'
import costillitas from '../assets/minificado/costillitas-removebg-preview.png'
import mojarra from '../assets/minificado/mojarra-removebg-preview.png'
import pechugaPlancha from '../assets/minificado/pechuga-a-la-plancha-removebg-preview.png'
import pechugaGratinada from '../assets/minificado/pechuga-gratinada-removebg-preview.png'
import sobreBarriga from '../assets/minificado/sobrebarriga-removebg-preview.png'

const PlatoCarta = () => {
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

        <h1 className="text-3xl mt-20 text-center">Platos a la Carta</h1>

        <div className='mt-4 px-6'>
              <CardFood
                titulo={'Arroz con Pollo'}
                imagen={arrozConPollo}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Bagre Frito'}
                imagen={bagreFrito}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Bagre en Salsa'}
                imagen={bagreEnSalsa}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Bandeja con Pollo'}
                imagen={bandejaConPollo}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Churrasco'}
                imagen={churrasco}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Costillitas'}
                imagen={costillitas}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Mojarra'}
                imagen={mojarra}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Pechuga a la plancha'}
                imagen={pechugaPlancha}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'Pechuga Gratinada'}
                imagen={pechugaGratinada}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
              <CardFood
                titulo={'SobreBarriga'}
                imagen={sobreBarriga}
                descripcion={'Arroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con PolloArroz con Pollo'}
                precio={'11.000'}
              />
        </div>
    </>
  )
}

export default PlatoCarta
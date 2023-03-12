import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import MenuScrollX from "../components/MenuScrollX";
import CardFood from "../components/CardFood";
import papaFrancesa from '../assets/minificado/papa-francesa-removebg-preview.png'
import papaSalada from '../assets/minificado/papa-salada-removebg-preview.png'
import yuca from '../assets/minificado/yuca-removebg-preview.png'
import ensalada from '../assets/minificado/ensalada-removebg-preview.png'
import arroz from '../assets/minificado/arroz-removebg-preview.png'
import platano from '../assets/minificado/platano-removebg-preview.png'
import Domicilios from "../components/Domicilios";

const Adiciones = () => {
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

        <h1 className="text-3xl mt-20 text-center">Adiciones</h1>

        <Domicilios/>

        <div className='mt-4 px-6'>
              <CardFood
                titulo={'Papa Francesa'}
                imagen={papaFrancesa}
                descripcion={'papa francesa como adición de tus platos favoritos'}
                precio={'5.000'}
              />
              <CardFood
                titulo={'Papa Salada'}
                imagen={papaSalada}
                descripcion={'papa salada como adición de tus platos favoritos'}
                precio={'5.000'}
              />
              <CardFood
                titulo={'Yuca'}
                imagen={yuca}
                descripcion={'Yuca como adición de tus platos favoritos'}
                precio={'5.000'}
              />
              <CardFood
                titulo={'Ensalada'}
                imagen={ensalada}
                descripcion={'Ensalada como adición de tus platos favoritos'}
                precio={'5.000'}
              />
              <CardFood
                titulo={'Arroz'}
                imagen={arroz}
                descripcion={'arroz como adición de tus platos favoritos'}
                precio={'3.000'}
              />
              <CardFood
                titulo={'Platano'}
                imagen={platano}
                descripcion={'Platano como adición de tus platos favoritos'}
                precio={'3.000'}
              />

        </div>
    </>
  )
}

export default Adiciones
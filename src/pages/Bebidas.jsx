import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import MenuScrollX from "../components/MenuScrollX";
import CardFood from "../components/CardFood";
import cerveza from '../assets/minificado/cerveza-removebg-preview (1).png'
import gaseosa2l from '../assets/minificado/gaseosas-2l-removebg-preview (1).png'
import gaseosa3l from '../assets/minificado/gaseosas-3l-removebg-preview (1).png'
import gaseosa350ml from '../assets/minificado/gaseosas-350-removebg-preview.png'
import jugo500ml from '../assets/minificado/jugo-500-removebg-preview.png'
import gaseosa400ml from '../assets/minificado/gaseosa-400-removebg-preview (1).png'
import jugo15l from '../assets/minificado/jugos-1-5-removebg-preview.png'
import jugoAgua from '../assets/minificado/jugo-agua-removebg-preview.png'
import jugoLeche from '../assets/minificado/jugo-leche-removebg-preview.png'
import ponymalta from '../assets/minificado/Pony-Malta-1.5L-removebg-preview.png'
import colaypola from '../assets/minificado/colaypola-1-5-removebg-preview.png'
import agua from '../assets/minificado/botella-de-agua-removebg-preview.png'
import gaseosa1500ml from '../assets/minificado/gaseosa1.5.png'
import cocaCola1500ml from '../assets/minificado/cocacola1.5.png'
import quatro1500ml from '../assets/minificado/quatro1.5.png'
import cocacolaPersonal from '../assets/minificado/cocaColaPersonal.png'
import quatroPersonal from '../assets/minificado/quatroPersonal.png'
import BotonWppFlotante from "../components/BotonWppFlotante";
const Bebidas = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }, [])
  const [body, setBody] = useState(false);
  return (
    <>
      <MenuHamburguesa
        setBody={setBody}
      />
      <MenuScrollX />

      <h1 className="text-3xl mt-20 text-center">Bebidas</h1>
      <BotonWppFlotante />

      <div className='mt-4 px-6'>
        <CardFood
          titulo={'Cerveza'}
          imagen={cerveza}
          descripcion={''}
          precio={'4.000'}
        />

        <CardFood
          titulo={'Coca Cola Personal'}
          imagen={cocacolaPersonal}
          descripcion={''}
          precio={'3.000'}
        />

        <CardFood
          titulo={'Quatro Personal'}
          imagen={quatroPersonal}
          descripcion={''}
          precio={'3.000'}
        />

        <CardFood
          titulo={'Gaseosa 1.5 Litros'}
          imagen={gaseosa1500ml}
          descripcion={''}
          precio={'6.000'}
        />

        <CardFood
          titulo={'Coca Cola 1.5 Litros'}
          imagen={cocaCola1500ml}
          descripcion={''}
          precio={'6.500'}
        />

        <CardFood
          titulo={'Quatro 1.5 Litros'}
          imagen={quatro1500ml}
          descripcion={''}
          precio={'6.500'}
        />

        <CardFood
          titulo={'Gaseosa 3 Litros'}
          imagen={gaseosa3l}
          descripcion={''}
          precio={'7.000'}
        />
        <CardFood
          titulo={'Gaseosa 350ml'}
          imagen={gaseosa350ml}
          descripcion={''}
          precio={'2.500'}
        />
        <CardFood
          titulo={'Jugo 500ml'}
          imagen={jugo500ml}
          descripcion={''}
          precio={'3.000'}
        />
        <CardFood
          titulo={'Gaseosa 400ml'}
          imagen={gaseosa400ml}
          descripcion={''}
          precio={'2.500'}
        />
        <CardFood
          titulo={'Jugo 1.5 Litros'}
          imagen={jugo15l}
          descripcion={''}
          precio={'5.000'}
        />
        <CardFood
          titulo={'Jugos en Agua'}
          imagen={jugoAgua}
          descripcion={'Sabores: Mora, frutos - rojos, fresa, guanabana, maracuya'}
          precio={'5.000'}
        />
        <CardFood
          titulo={'Jugos en Leche'}
          imagen={jugoLeche}
          descripcion={'Sabores: Mora, frutos - rojos, fresa, guanabana, maracuya'}
          precio={'6.000'}
        />
        <CardFood
          titulo={'Pony Malta'}
          imagen={ponymalta}
          descripcion={''}
          precio={'6.500'}
        />
        <CardFood
          titulo={'Cola y Pola'}
          imagen={colaypola}
          descripcion={''}
          precio={'6.500'}
        />
        <CardFood
          titulo={'Botella de Agua'}
          imagen={agua}
          descripcion={''}
          precio={'2.500'}
        />
      </div>
    </>
  )
}

export default Bebidas
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
import lomodeCerdo from '../assets/minificado/sobrebarriga-removebg-preview.png'
import sobrebarriga from '../assets/minificado/sobre-barriga-a-la-plancha-removebg-preview.png'
import Domicilios from "../components/Domicilios";
import BotonWppFlotante from "../components/BotonWppFlotante";


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
        <BotonWppFlotante/>

        <div className='mt-4 px-6'>
              <CardFood
                titulo={'Arroz con Pollo'}
                imagen={arrozConPollo}
                descripcion={'Delicioso arroz con pollo acompañado con papa francesa, platano , yuca frita  y ensalada'}
                precio={'19.000'}
              />
              <CardFood
                titulo={'Bagre Frito'}
                imagen={bagreFrito}
                descripcion={'Delicioso bagre frito acompañado con papa francesa, platano , yuca frita , arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Bagre en Salsa'}
                imagen={bagreEnSalsa}
                descripcion={'Delicioso bagre en salsa acompañado con papa francesa, platano , yuca frita , arroz y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Bandeja con Pollo'}
                imagen={bandejaConPollo}
                descripcion={'Deliciosa bandeja de pollo acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'18.000'}
              />
              <CardFood
                titulo={'Churrasco'}
                imagen={churrasco}
                descripcion={'Delicioso churrasco acompañado con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Costillitas'}
                imagen={costillitas}
                descripcion={'Deliciosas costillitas acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Mojarra'}
                imagen={mojarra}
                descripcion={'Deliciosa mojarra acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Pechuga a la plancha'}
                imagen={pechugaPlancha}
                descripcion={'Deliciosa pechuga a la plancha acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'Pechuga Gratinada'}
                imagen={pechugaGratinada}
                descripcion={'Deliciosa pechuga gratinada acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'29.000'}
              />
              <CardFood
                titulo={'Lomo Gratinado'}
                imagen={pechugaGratinada}
                descripcion={'Delicioso lomo gratinado acompañado con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'29.000'}
              />
              <CardFood
                titulo={'Lomo de Cerdo'}
                imagen={lomodeCerdo}
                descripcion={'Delicioso lomo de cerdo acompañado con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
              <CardFood
                titulo={'SobreBarriga'}
                imagen={sobrebarriga}
                descripcion={'Deliciosa sobre-barriga acompañada con papa francesa, platano , yuca frita, arroz  y ensalada'}
                precio={'27.000'}
              />
        </div>
    </>
  )
}

export default PlatoCarta
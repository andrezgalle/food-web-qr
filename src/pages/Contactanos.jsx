import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import CardInformation from "../components/CardInformation";
import BotonWppFlotante from "../components/BotonWppFlotante";

const Contactanos = () => {
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
        <h1 className="mt-10 w-5/6 mx-auto font-bold uppercase text-2xl text-center">¿Donde podrás encontrarnos?</h1>
        <BotonWppFlotante/>
        <div className="mt-5">
          <CardInformation
            titulo={'Don Kiko Localidad Ciudad Bolivar'}
            direccion={'Calle 67 C sur # 18 p-98'}
            telefonos={'7910591 - 31234331013'}
            apertura={'12:00pm - 10:00pm'}
            cierre={'11:30am - 10:00pm'}
            url={'https://www.google.com/maps?q=Asadero+Don+KIKO,+Calle+67c+Sur,+Bogotá'}
          />
          <CardInformation
            titulo={'Don Kiko Municipio Funza'}
            direccion={'Carrera 9 # 19 - 13'}
            telefonos={'3143492395'}
            apertura={'12:00pm - 10:00pm'}
            cierre={'11:30am - 10:00pm'}
            url={'https://www.google.com/maps/search/?api=1&query=Asadero+Don+KIKO%2C+Calle+19%237b+46%2C+Funza%2C+Cundinamarca'}

          />
        </div>
    </>
  )
}

export default Contactanos
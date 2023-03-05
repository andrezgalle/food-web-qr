import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import CardInformation from "../components/CardInformation";
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

        <div className="mt-5">
          <CardInformation
            titulo={'Don Kiko Localidad Ciudad Bolivar'}
            direccion={'Calle 69 b sur # 18 h-65'}
            telefonos={'3126613327'}
            apertura={'11:AM'}
            cierre={'11:AM'}
            url={'https://www.google.com/maps?q=Asadero+Don+KIKO,+Calle+67c+Sur,+Bogotá'}
          />
          <CardInformation
            titulo={'Don Kiko Municipio Funza'}
            direccion={'Calle 69 b sur # 18 h-65'}
            telefonos={'3126613327'}
            apertura={'11:AM'}
            cierre={'11:AM'}
            url={'https://www.google.com/maps?q=Asadero+Don+KIKO,+Calle+67c+Sur,+Bogotá'}
          />
        </div>
    </>
  )
}

export default Contactanos
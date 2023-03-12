import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import BotonWppFlotante from "../components/BotonWppFlotante";

const Nosotros = () => {
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

        <div className="background mt-2">
          <h1 className="text-4xl text-center font-semibold text-white">Conoce un poco más sobre nosotros</h1>
          <BotonWppFlotante/>
        </div>

        <div className="my-10 px-8">
          <h2 className="mb-4 text-2xl font-bold">¡Bienvenidos a Don Kiko!</h2>
          <p className="mb-4 text-lg text-justify">Somos un asadero familiar con más de 25 años de experiencia en ofrecer lo mejor de la gastronomía colombiana.</p>
          <p className="mb-4 text-lg text-justify">En Don Kiko, ofrecemos una gran variedad de platos deliciosos, entre ellos nuestra especialidad: el pollo asado, siempre preparado con ingredientes frescos y de alta calidad, adobado con nuestras especias colombianas secretas y asado al carbón para lograr ese sabor auténtico que tanto nos gusta.</p>
          <p className="mb-4 text-lg text-justify">Además, nos enorgullece preparar cada uno de nuestros platos con ingredientes frescos y de calidad, para ofrecerte siempre la mejor comida en un ambiente auténtico y familiar.</p>
          <p className="mb-4 text-lg text-justify">Ven y prueba nuestros platos y descubre por qué somos un asadero de renombre en nuestra localidad.</p>
          <p className="mb-4 text-lg text-justify"><span className="font-bold">¡Gracias por elegir Don Kiko para tu próxima comida!</span> Te esperamos con los brazos abiertos.</p>
        </div>
    </>
  )
}

export default Nosotros
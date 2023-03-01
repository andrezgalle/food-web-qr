import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import MenuScrollX from "../components/MenuScrollX";
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
        <p>Contáctanos</p>
    </>
  )
}

export default Contactanos
import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
const Bebidas = () => {
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

        <h1>Bebidas</h1>
    </>
  )
}

export default Bebidas
import MenuHamburguesa from "../components/MenuHamburguesa"
import { useState, useEffect } from 'react';
import MenuScrollX from "../components/MenuScrollX";
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
        <MenuScrollX/>

        <h1 className="text-3xl mt-20 text-center">Bebidas</h1>
    </>
  )
}

export default Bebidas
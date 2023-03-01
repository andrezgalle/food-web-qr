import MenuHamburguesa from '../components/MenuHamburguesa'
import { useState, useEffect } from 'react';
const Sopas = () => {
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

        <h1>Sopas</h1>
    </>
  )
}

export default Sopas
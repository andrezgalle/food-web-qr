import React from 'react'
import MenuHamburguesa from '../components/MenuHamburguesa'
import { useState, useEffect } from 'react';
const Pollo = () => {
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

        <h1>Pollo</h1>
    </>
  )
}

export default Pollo
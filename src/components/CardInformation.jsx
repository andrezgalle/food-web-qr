import React from 'react'
import img from '../assets/background-img.jfif'
import time from '../assets/time-svgrepo-com.svg'
import phone from '../assets/phone-svgrepo-com.svg'
import location from '../assets/location-1-svgrepo-com.svg'

const CardInformation = ({titulo,direccion,telefonos,apertura,cierre,url,email}) => {
  return (
    <div className='card-information overflow-hidden'>
        <div className='img-card-information-div'>
            <img src={img} alt="img-card" />
        </div>
        <div className='texto-card-information-div'>
            <h2 className='text-2xl text-center mb-4 font-semibold'>{titulo}</h2>
            <p className='text-xs flex gap-2 items-center mb-2 font-bold'>Dirección: <span className='font-normal'>{direccion}</span><img src={location} className='w-6 inline-block' alt=""/></p>
            <p className='text-xs flex gap-2 items-center mb-2 font-bold'>Telefonos: <span className='font-normal'>{telefonos}</span><img src={phone} className='w-6 inline-block' alt=""/></p>
            <p className='text-xs flex gap-2 items-center mb-2 font-bold'>Lunes a Viernes: <span className='font-normal'>{apertura}</span><img src={time} className='w-6 inline-block' alt=""/></p>
            <p className='text-xs flex gap-2 items-center mb-2 font-bold'>Sábado a Domingo: <span className='font-normal'>{cierre}</span> <img src={time} className='w-6 inline-block' alt=""/></p>
        
        </div>
        <button className='boton-map' onClick={()=>window.open(url)}>¿Cómo puedo llegar?</button>
    </div>
  )
}

export default CardInformation
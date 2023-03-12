import React from 'react'

const CardFood = ({titulo,imagen,descripcion,precio}) => {
  return (
    <div className='mt-10 border-b-2 py-6 flex justify-between items-center'>
        <div>
            <h3 className='text-lg font-medium text-black mb-2'>{titulo}</h3>
            <p className='text-sm font-semibold text-gray-500'>{descripcion}</p>
            <p className='font-bold mt-2 text-lg'>${precio}</p>
        </div>
        <div className='w-full'>
            <img src={imagen} className='w-full'/>
        </div>
    </div>
  )
}

export default CardFood
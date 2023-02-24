import React from 'react'

const TargetFood = ({titulo,img}) => {
  return (
    <div className='bg-gray-100 w-full p-4 rounded-2xl flex items-center mb-8'>
      <div className='img-container'>
        <img src={img} className='w-15 imagen-target' alt="" />
      </div>
      <div>
        <h2 className='text-red-900 uppercase text-2xl font-bold mb-2'>{titulo}</h2>
        <p className='text-black text-medium font-medium'>25 Variedades</p>
      </div>
    </div>
  )
}

export default TargetFood
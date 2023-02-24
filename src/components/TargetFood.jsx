import React from 'react'

const TargetFood = ({img,texto}) => {
  return (
    <div className='w-full overflow-hidden rounded-3xl bg-white shadow-lg text-center pb-6'>
      <div className='text-center p-4 w-full'>
        <img src={img} alt="img-targetFood" className='w-32 inline-block h-32' />
      </div>
      <div className='p-4'>
        <h2 className='text-3xl text-black texto-card text-center'>{texto}</h2>
        <p className='text-center text-lg text-gray-400 font-medium'>25 Productos</p>
      </div>
      <button className='p-4 bg-red-600 w-9/12 text-lg text-white rounded-2xl font-semibold hover:bg-red-700 cursor-pointer transition-colors'>Ver Productos</button>
    </div>
  )
}

export default TargetFood
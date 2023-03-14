import wppFlotante from '../assets/minificado/whatsapp (1).png'

const BotonWppFlotante = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=573123431013" target="_blank">
        <div className='fixed right-0 mr-2 flex flex-col justify-center items-center rounded-full top-1/3'>
            <img src={wppFlotante} className='w-10 mb-2' alt="" />
            <p className='text-xs font-bold bg-green-700 p-1 rounded-lg text-white'>Pide Aquí</p>
        </div>
    </a>
  )
}

export default BotonWppFlotante
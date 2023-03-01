import { Link } from "react-router-dom"

const Navegacion = () => {
  return (
    <nav className='flex flex-col w-full justify-center items-center gap-8'>
        <Link to={'/'} className='text-white text-2xl font-semibold'>Menú</Link>
        <Link to={'/nosotros'} className='text-white text-2xl font-semibold'>Nosotros</Link>
        <Link to={'/contactanos'} className='text-white text-2xl font-semibold'>Contáctanos</Link>
    </nav>
  )
}

export default Navegacion
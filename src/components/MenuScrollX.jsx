import { Link } from "react-router-dom"

function MenuScrollX() {
  return (
    <div className="contenedor-scroll">
        <Link to={'/Pollo'} className='item'>Pollo</Link>
        <Link to={'/Plato a la Carta'} className='item'>Platos a la Carta</Link>
        <Link to={'/Sopas'} className='item'>Sopas</Link>
        <Link to={'/Adiciones'} className='item'>Adiciones</Link>
        <Link to={'/Bebidas'} className='item'>Bebidas</Link>
    </div>
  )
}

export default MenuScrollX
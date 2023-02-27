import facebook from '../assets/facebook.png';
import instagram from '../assets/logotipo-de-instagram.png';
import twitter from '../assets/gorjeo.png';

const RedesSociales = () => {
  return (
    <div className='absolute bottom-44 w-full flex justify-between px-12'>
        <img src={facebook} className='invert w-16' alt="facebook" />
        <img src={twitter} className='invert w-16' alt="twitter" />
        <img src={instagram} className='invert w-16' alt="instagram" />
    </div>
  )
}

export default RedesSociales
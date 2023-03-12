import facebook from '../assets/facebook.png';
import instagram from '../assets/logotipo-de-instagram.png';
import wpp from '../assets/minificado/whatsapp.png'

const RedesSociales = () => {
  return (
    <div className='absolute bottom-44 w-full flex justify-between px-12'>
        <a href="https://www.facebook.com/AsaderoDonKiko" target="_blank"><img src={facebook} className='invert w-12' alt="facebook" /></a>
        <a href="https://api.whatsapp.com/send?phone=573123431013" target="_blank"><img src={wpp} className='invert w-12' alt="facebook" /></a>
        <a href="https://www.instagram.com/donkiko_oficial/" target="_blank"><img src={instagram} className='invert w-12' alt="instagram" /></a>
    </div>
  )
}

export default RedesSociales
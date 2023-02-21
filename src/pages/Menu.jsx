import {useState,useEffect} from 'react'
import Splash from '../components/Splash';
const Menu = () => {
  const [showSplash, setShowSplash] = useState(true);


  return (
    <div>
      <div>
        <Splash />
      </div>
    </div>
  );
}

export default Menu
import Splash from "./components/Splash";
import React, { useState, useEffect } from 'react';
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos de duración del splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash && <Splash />}
      {!showSplash && <div>Tu aplicación React aquí</div>}
    </div>
  );
}

export default App

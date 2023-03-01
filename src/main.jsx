import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Menu from './pages/Menu'
import Pollo from './pages/Pollo'
import PlatoCarta from './pages/PlatoCarta'
import Sopas from './pages/Sopas'
import Adiciones from './pages/Adiciones'
import Bebidas from './pages/Bebidas'
import Nosotros from './pages/Nosotros'
import Contactanos from './pages/Contactanos'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Menu/>
  },
  {
    path:'/pollo',
    element:<Pollo/>
  },
  {
    path:'/Plato a la Carta',
    element:<PlatoCarta/>
  },
  {
    path:'/Sopas',
    element:<Sopas/>
  },
  {
    path:'/Adiciones',
    element:<Adiciones/>
  }
  ,
  {
    path:'/Bebidas',
    element:<Bebidas/>
  }
  ,
  {
    path:'/nosotros',
    element:<Nosotros/>
  }
  ,
  {
    path:'/contactanos',
    element:<Contactanos/>
  },
  {
    path:'*',
    element:<Menu/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)

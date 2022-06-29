import React from 'react'
import { Encabezado } from '../assets/styles/Header'
const Header = () => {
  return (
    <Encabezado>
        <img/>
        <div>
            <img/>
            <p>Perfil</p>
        </div>
        <ul>
            <li><a>Cuenta</a></li>
            <li><a>Cerrar</a></li>
        </ul>
    </Encabezado>
  )
}

export default Header
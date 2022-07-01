import React from 'react'
import { Link } from 'react-router-dom'
import { Encabezado, ImgLogo, Item, MenuProfile, OptionsProfile, UserProfile } from '../assets/styles/Header'
import Logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
const Header = () => {
  return (
    <Encabezado>
        <Link to='/' >
          <ImgLogo src={Logo}/>
        </Link>  
        <MenuProfile>
          <UserProfile>
            <img src={userIcon}/>
              <p>Perfil</p>
          </UserProfile>
          <OptionsProfile>
              <Item>Cuenta</Item>
              <Item>Cerrar</Item>
          </OptionsProfile>
        </MenuProfile>   
    </Encabezado>
  )
}

export default Header
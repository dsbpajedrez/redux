import React from 'react'
import { Anchor } from '../resgister/styles'
import { Container, ContainerRegister, Formulario, Input, Labels, LogInContainer, Recuerdame, SocialMeida } from './styles'
import googleIcon from "../../assets/static/google-icon.png"
import twitterIcon from "../../assets/static/twitter-icon.png"

const LogIn = () => {
  return (
    <LogInContainer>
    <Container>
      <h2>Inicia sesión</h2>
      <Formulario>
        <Input  type="text" placeholder="Correo"/>
        <Input  type="password" placeholder="Contraseña"/>
        <button >Iniciar sesión</button>
        <Recuerdame>
          <Labels>
            <Input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
          </Labels>
          <Anchor to="/">Olvidé mi contraseña</Anchor>
          </Recuerdame>
        </Formulario>
      <SocialMeida>
        <div><img src={googleIcon} /> Inicia sesión con Google</div>
        <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
        </SocialMeida>
      <ContainerRegister>No tienes ninguna cuenta <Anchor to="/register">Regístrate</Anchor></ContainerRegister>
      </Container>
    </LogInContainer>
  )
}

export default LogIn
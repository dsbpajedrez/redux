import React from 'react'
import { Link } from 'react-router-dom'
import { Boton, ContenedorRegistro, Input, RegisterContainerForm, Registro } from './styles'

const Register = () => {
  return (
    <Registro>
        <ContenedorRegistro>
        <h2>Regístrate</h2>
        <RegisterContainerForm>
            <Input class="input" type="text" placeholder="Nombre"/>
            <Input class="input" type="text" placeholder="Correo"/>
            <Input class="input" type="password" placeholder="Contraseña"/>
            <Boton class="Button">Registrarme</Boton>
        </RegisterContainerForm>
        <Link to="/login">Iniciar sesión</Link>
        </ContenedorRegistro>
    </Registro>
  )
}

export default Register
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Registro = styled.div`
grid-column: 1/14;
grid-row:3/8;
background: linear-gradient(#21c08b, #8f57fd);
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 200px);
padding:0.5rem;
`
export const Anchor = styled(Link)`
color: white;
font-size: 16px;
text-align: center;
text-decoration: none;
`
export const ContenedorRegistro = styled.div`
background-color: rgba(255,255,255,0.1);
border: 2px solid white;
border-radius: 40px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
min-height: 600px;
padding: 60px 68px 40px;
width: 300px;
& ${Anchor}:hover{
    text-decoration: underline;
}
`

export const RegisterContainerForm = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
background-color: transparent;
border-bottom: 2px solid white;
border-left: 0px;
border-right: 0px;
border-top: 0px;
color: white;
font-family: 'Muli', sans-serif;
font-size: 16px;
height: 50px;
margin-bottom: 20px;
outline: none;
padding: 0px 20px;
`

export const Boton = styled.button`
background-color: rgba(255, 255, 255, 0.3);
border: none;
border-radius: 25px;
color: white;
cursor: pointer;
font-size: 16px;
font-weight: bold;
font-family: 'Muli', sans-serif;
height: 50px;
letter-spacing: 1px;
margin: 10px 0px;
`
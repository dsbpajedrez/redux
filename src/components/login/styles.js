import styled from "styled-components";
import { Anchor } from "../resgister/styles";

export const LogInContainer = styled.div`
    grid-column:1/14;
    grid-row:3/8;
    background-image: linear-gradient(#21c08b, #8f57fd);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    min-height: calc(100vh - 200px); 
    padding:0.5rem;
`

export const Container = styled.div`
    background-color: rgba(255,255,255,0.1);
    border: 2px solid white;
    border-radius: 40px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 700px;
    padding: 60px 68px 40px;
    width: 300px;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`
export const  Labels = styled.label`
    font-size: 14px;
`

export const Recuerdame = styled.div`
color: white;
display: flex;
justify-content: space-between;
margin-top: 10px;
`
export const Achor = styled.a`
color: white;
font-size: 14px;
text-decoration: none;
& : hover {
    text-decoration:underline;
}
`
export const SocialMeida = styled.section`
    & > div {
        align-items: center;
        display: flex;
        font-size: 14px;
        margin-bottom: 10px;
    }
    & > div > img {
        margin-right: 10px;
        width: 30px;
    }

`
export const ContainerRegister = styled.p` 
    font-size: 14px;
    & > a {
        color: white;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
    }
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
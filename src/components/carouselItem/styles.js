import styled from "styled-components";

export const ContenedorItem = styled.div`
    width:200px;
    overflow:hidden;
    cursor:pointer;
    transition:450ms all;
    opacity:0.8;
    -webkit-transform-origin: center right;
            transfrom-origin:center right;
    &:hover {
        -webkit-transform: translate3d(100px,0,0);
                transform:translate3d(100px,0,0);
                transform:scale(1.3);
                opacity:1;
    }
`
export const Imagen = styled.img`
    width:200px;
    height:250px;
    border-radius:2rem;
    object-fit:cover;
`
export const ContenedorIconos = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`
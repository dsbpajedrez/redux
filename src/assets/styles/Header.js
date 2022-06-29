import styled from "styled-components";
export const OptionsProfile= styled.ul`
    display:none;
    list-style:none;
    position:absolute;
    text-align:left;
    background-color:#8f57fd;
    right:0;
    top:100px;
    border-radius:0 0 0 20px;
    padding:0.5rem;
    width:60px;

`

export const Encabezado = styled.div`
    grid-column:1/14;
    grid-row:1/3;
    background-color:#8f57fd;
    display:flex;
    justify-content: space-between;
    color:white;
    padding:0.5rem;
    position:relative;
    height:100px;
`
export const ImgLogo = styled.img`
    width:20rem;
`

export const UserProfile = styled.div`
 

`

export const MenuProfile = styled.div`
&:hover ${OptionsProfile}{        
    display:block;        
}
    text-align:left;
  
`
export const Item = styled.li`
    width:100%;
    text-align:left;
`
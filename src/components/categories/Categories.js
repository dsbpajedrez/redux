import React from 'react'
import { ContenedorCategorias, Subtitulo } from './styles'

const Categories = ({children, title}) => {
  return (
    <>
      <Subtitulo >{title}</Subtitulo> 
      <ContenedorCategorias >
        {children}
    </ContenedorCategorias>
    </>
  )
}

export default Categories
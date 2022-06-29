import React from 'react'
import { CarrouselContainer, Seccion } from './styles'

const Carrousel = ({children}) => {
  return (
    <Seccion>
        <CarrouselContainer>
            {children}
        </CarrouselContainer>
    </Seccion>
  )
}

export default Carrousel
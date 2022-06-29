import React from 'react'
import PropTypes from 'prop-types';
import playIcon from '../../assets/static/play-icon.png'
import plusIcon from '../../assets/static/plus-icon.png'
import { ContenedorIconos, ContenedorItem, Imagen } from './styles';

const CarrouselItem = ({cover, title, contentRating,year, duration}) => {
  return (
    <ContenedorItem>
    <Imagen src={cover} alt={title}  />
    <div>
      <ContenedorIconos>
        <img  src={playIcon} alt="Play Icon" />
        <img  src={plusIcon} alt="Plus Icon" />
      </ContenedorIconos>
      <p >{title}</p>
      <p >
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </ContenedorItem>
  )
}
CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
  }

export default CarrouselItem
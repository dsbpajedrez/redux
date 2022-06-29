import React from 'react'
import { ContenedorPrincipal } from '../assets/styles/Main'
import useInitialState from '../hooks/useInitialState'
import CarrouselItem from './carouselItem/CarrouselItem'
import Categories from './categories/Categories'

const Main = () => {
  const API = 'http://localhost:3000/initalState'
  let videos = useInitialState(API)
  console.log(videos);
  return (
    <ContenedorPrincipal>
      <Categories title='Mi lista'>
        {videos?.mylist?.length>0 && videos?.mylist?.map(item=>{
          return <CarrouselItem key={item.id} {...item}/>
        })}
      </Categories>
      <Categories title='Tendencias'>
        {videos?.trends?.length>0 && videos?.trends?.map(item=>{
          return <CarrouselItem key={item.id} {...item}/>
        })}
      </Categories>
      <Categories title='Originales'>
        {videos?.originals?.length>0 && videos?.originals?.map(item=>{
          return <CarrouselItem key={item.id} {...item}/>
        })}
      </Categories>
    </ContenedorPrincipal>
  )
}

export default Main
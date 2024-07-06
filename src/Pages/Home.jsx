import React from 'react'
import Header from '../Componets/Header'
import Slider from '../Componets/Slider'
import ProductionHouse from '../Componets/ProductionHouse'
import GenreMovieList from '../Componets/GenreMovieList'
import Footer from '../Componets/Footer'

function Home() {
  return (
    <div>
    <Header/>
       
                
    <Slider/>

    <ProductionHouse/>

   <GenreMovieList/>
   <hr className='border-gray-600'></hr>

   <Footer/>
   </div> 
 


  )
}

export default Home
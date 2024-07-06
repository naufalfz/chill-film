import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'
import Footer from './Componets/Footer'
// import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="">
     


          <Router>
            <Routes>

{/*               
              <Route path="/Login">
              <Login />
              </Route>
               <Route path="/Register">
               <Register />
              </Route>
              <Route path="/">
              <Home />
              </Route> */}


        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

             </Routes>
           </Router>
{/*              
              <Header/>
       
            

        
             <Slider/>

             <ProductionHouse/>

            <GenreMovieList/>
            <hr className='border-gray-600'></hr>

            <Footer/>
          
          
 */}

    </div>
    
   
  )

}

export default App

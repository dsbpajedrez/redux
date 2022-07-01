import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from '../../assets/styles/Layout'
import Home from '../../containers/Home'
import Footer from '../Footer'
import Header from '../Header'
import Register from '../resgister/Register'
import NotFound from '../notFound/NotFound'
import LogIn from '../login/Login'
const App = () => {
  return (
    <BrowserRouter>
      <Layout >
        <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/login' element={<LogIn/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </Layout>
    </BrowserRouter> 

  )
}

export default App
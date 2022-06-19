import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import Business from './pages/business/Business'
import Sports from './pages/sports/Sports'
import Entertainment from './pages/entertainment/Entertainment'
import Technology from './pages/technology/Technology'
import Error from './pages/error/Error'
import './pages/page.css'
import axios from 'axios'

const App = () => {
 
  return (
    <BrowserRouter>
        <Routes>
              <Route path='/' exact element={<Layout heading="Main"><Home/></Layout>}/>
              <Route path='/business' exact element={<Layout heading="Business"><Business/></Layout>}/>
              <Route path='/sports' exact element={<Layout heading="Sports"><Sports/></Layout>}/>
              <Route path='/entertainment' exact element={<Layout heading="Entertainment"><Entertainment/></Layout>}/>
              <Route path='/technology' exact element={<Layout heading="Technology"><Technology/></Layout>}/>
              <Route path='*' exact element={<Layout heading="Error"><Error/></Layout>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
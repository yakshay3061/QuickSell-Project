import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Status from './Components/Grouping/Status';
import User from './Components/Grouping/User';
import Priority from './Components/Grouping/Priority';
import Nav from './Components/Navbar/Nav';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element = { <><Nav/> <Status/> </>}/>
          <Route path='/user' element = {<><Nav/> <User/></>}/>
          <Route path='/priority' element = {<><Nav/> <Priority/></>}/>
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Mainpage} from './components/Mainpage/Mainpage';
import {Reg} from './components/Reg/Reg';
const  App:React.FC = () => {  
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Reg />}/>
      <Route path='/Mainpage' element={<Mainpage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

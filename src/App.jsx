
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Vedio from './Pages/Vedios/Vedio'
import { useState } from 'react'

function App() {
const [sidebar,setSidebar]=useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Vedio/>}/>
      </Routes>
    </div>
  )
}

export default App

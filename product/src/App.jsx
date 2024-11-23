
import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Index from './component/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './component/Details'

function App() {
const[search,setSearch]=useState("")
console.log(search);

  return (
    <>
      <BrowserRouter>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Index search={search}/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
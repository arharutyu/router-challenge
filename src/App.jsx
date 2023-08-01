import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Articles from './Articles'
import NavBar from './NavBar'
import Article from './Article'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/articles/:id' element={<Article />}></Route>
      </Routes>
    </>
  )
}

export default App

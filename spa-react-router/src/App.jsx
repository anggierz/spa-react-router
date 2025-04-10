import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter> 
   );
}

export default App

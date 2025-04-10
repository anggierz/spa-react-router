import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="movie/:movieId" element={<Movie />} />
     </Routes>
    </BrowserRouter> 
   );
}

export default App

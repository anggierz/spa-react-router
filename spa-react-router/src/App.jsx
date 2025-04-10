import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="search" element={<Search />}></Route>
       <Route path="movie/:movieId" element={<Movie />} />
     </Routes>
    </BrowserRouter> 
   );
}

export default App

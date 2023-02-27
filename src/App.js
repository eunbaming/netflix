import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <Navigation setKeyword={setKeyword}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies keyword={keyword} setKeyword={setKeyword} />}></Route>
        <Route path='/movies/:id' element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

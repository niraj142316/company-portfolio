import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;

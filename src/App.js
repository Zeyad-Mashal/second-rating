import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Rejester from './components/Login/Rejester';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create/Create';
import AllCards from './components/AllCards/AllCards';
import Home from './components/Home/Home';
import VirfyNumber from './components/Virfy Number/VirfyNumber';
import More from './components/More Componets/More';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rejester' element={<Rejester />} />
        <Route path='/login' element={<Login />} />
        <Route path='/virfy-number' element={<VirfyNumber />} />
        <Route path='/create' element={<Create />} />
        <Route path='/all-Cards' element={<AllCards />} />
      </Routes>
      <More />

      <Footer />
    </div>
  );
}

export default App;

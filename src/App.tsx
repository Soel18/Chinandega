import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./app/Inicio";
import Historia from "./components/Historia";
import Economia from './components/Economia';
import Cultura from './components/Cultura';
import Musica from './app/Musica';
import Turismo from './components/Turismo';
import Problematica from './components/Problematica';
import Personajes from './components/Personajes';



const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/Economia" element={<Economia />} />
        <Route path="/Cultura" element={<Cultura />} />
        <Route path="/Musica" element={<Musica />} />
        <Route path="/Turismo" element={<Turismo />} />
        <Route path="/Problematica" element={<Problematica />} />
        <Route path="/Personajes" element={<Personajes />} />
      </Routes>
    </Router>
  );
};

export default App;


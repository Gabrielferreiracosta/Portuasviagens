import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './Home';
import About from './About';
import Tips from './Tips';
import Travels from './Travels';
import Contents from './Contents';
import Projects from './Projects';
import Agadir from './Agadir';

export default function App() {
  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path="/Portuasviagens" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Tips" element={<Tips />} />
        <Route path="Travels" element={<Travels />} />
        <Route path="Contents" element={<Contents />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Marrocos" element={<Agadir />} />
        <Route path="Portugal" />
        <Route path="Espanha" />
        <Route path="Argentina"  />
      </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export function Instafeed() {
  return(
    <>
    <div id='instafeed'></div>
        </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const instafeed = document.createElement(document.getElementById('instafeed'));
instafeed.append(Instafeed)




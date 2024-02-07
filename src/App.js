import React from "react";
import './index.css';
import Home from './routes/Home';
import Presentes from './routes/Presentes';
import Flores from './routes/Flores';
import Contato from './routes/Contato';
import {FaWhatsapp} from 'react-icons/fa';


import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";





function App(){
    return(
        <>

            <a className="whats-link" href='https://wa.me/5511981081390/'> <FaWhatsapp className="fa-whats"
                size={40} 
                /></a>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flores" element={<Flores />} />
                <Route path="/presentes" element={<Presentes />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/detail" element={<Detail />} />
                
            </Routes>           
            
        
        </>
    );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Tickets from './components/Tickets';
import Facturas from './components/Facturas';
import CarSales from './components/CarSales';
import AdminProduct from './components/AdminProduct';
import AdminSales from './components/AdminSales';
import Prodinamic from './components/Prodinamic'
import Home from "./pages/Home"
import About from "./pages/About"



const Talleres = () => {
  return <h1>Talleres</h1>;
};
const Actividades = () => {
  return <Tickets/>;
};
const Productos = () => {
  
  return <AdminProduct/>;
};

const Kop = () => {
  return <h1>taller Kopal</h1>;
};
const Jm = () => {
  return <h1>taller Jm</h1>;
};
const Ma = () => {
  return <h1>taller Ma</h1>;
};

function App() {
  
  const [inactive,setInactive] = useState(false);
  return (
    <div className="App">
      
      
    <BrowserRouter>
    <Sidemenu
      onCollapse={(inactive)=>{
        console.log(inactive);
        console.log("entra");
        setInactive(inactive);
      }}
    />
    <div className={`container ${inactive ? "inactive" : ""}`}>
    <Routes>
              
              
              <Route exact path={'/'} element={ <div id="vurent5">

                <Home/>
      

    </div>}/>
                      
              
              <Route  path={'/Productos'} element={<Prodinamic/>}/>


              <Route path={'/Talleres/Kop'} element={<Kop/>}/>
              <Route path={'/Talleres/JacM'} element={<Jm/>}/>
              <Route path={'/Talleres/Mah'} element={<Ma/>}/>
                      
              
             <Route path={'/Actividades'} element={<About/>}/>
                      
              
             
                      
              
              <Route path={'/Carrito'} element={<AdminSales/>}/>
              <Route path={'/Esta'} element={<AdminProduct/>}/>
                      
              
              
            
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

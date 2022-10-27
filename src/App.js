import React, { useState } from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./components/Carousel";
import presentationMode from './components/presentationMode';
import ProductoDetalle from './components/ProductoDetalle';
import Tickets from './components/Tickets';
import Facturas from './components/Facturas';
import CarSales from './components/CarSales';
import AdminProduct from './components/AdminProduct';
import AdminSales from './components/AdminSales';


const Home = () => {
 
     return <div className="Xz">
       <Carousel/>
       <div className="info-home">
          <h2 className="tytle">Algo sobre alebrijes</h2>
          <div className="uy">
          <p>Hace 30 años nuestro pueblo San Martín Tilcajete no era como ahora. El trabajo principal era el campo y muy pocos se dedicaban a la talla en madera y existía una fuerte inclinación a migrar a Estados Unidos.</p>
          </div>
       </div>
     </div> ;
};
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
              
              
              <Route exact path={'/'} element={<Home/>}/>
                      
              
              <Route exact path={'/Talleres'} element={<Talleres/>}/>


              <Route path={'/Talleres/Kop'} element={<Kop/>}/>
              <Route path={'/Talleres/JacM'} element={<Jm/>}/>
              <Route path={'/Talleres/Mah'} element={<Ma/>}/>
                      
              
              <Route path={'/Actividades'} element={<Actividades/>}/>
                      
              
              <Route path={'/Productos'} element={<Productos/>}/>
                      
              
              <Route path={'/Carrito'} element={<AdminSales/>}/>
              <Route path={'/Esta'} element={<AdminProduct/>}/>
                      
              
              
            
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

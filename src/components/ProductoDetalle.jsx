import React from 'react';
import { Link } from 'react-router-dom';
import proimag1 from "../assets/pro1.jpg";
import prostar from "../assets/estrellas.png";
import prostar2 from "../assets/pro3.jpg";
import prostar3 from "../assets/pro4.jpg";
import prostar4 from "../assets/pro5.jpg";
import prostar5 from "../assets/pro6.jpg";
import prostar7 from "../assets/pro7.jpg";
const ProductoDetalle = (props) => {
    const cafes = document.getElementById('lista-cafe');
    
    
    return (
        <div id="lista-cafe" className="containerdos">
        <h1 id="encabezado" className="encabezado">COBRIJE</h1>
        <div className="row">
            <div className="four columns">
                <div className="card">
                    <img src={proimag1} className="u-tol-width"/>
                    <div className="info-card">
                        <h4>Conejo</h4>
                        <p>Taller:Kopal</p>
                        <img src={prostar} />
                        <p className="precio">$200 <span className="u-pull-right">$15</span></p>
                        <button 
                        className="u-full-width button-primary button input agregar-carrito                        
                        ">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>


            <div className="four columns">
                <div className="card">
                    <img src={prostar3} className="u-tol-width"/>
                    <div className="info-card">
                        <h4>Jaguar alado</h4>
                        <p>Taller:Jacobo&María</p>
                        <img src={prostar} />
                        <p className="precio">$67000</p>
                        <button 
                        className="u-full-width button-primary button input agregar-carrito                        
                        ">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>


            <div className="four columns">
                <div className="card">
                    <img src={prostar4} className="u-tol-width"/>
                    <div className="info-card">
                        <h4>Grifo</h4>
                        <p>Taller:Jacabo&María</p>
                        <img src={prostar} />
                        <p className="precio">$107000</p>
                        <button
                        className="u-full-width button-primary button input agregar-carrito                        
                        ">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="four columns">
                <div className="card">
                    <img src={prostar5} className="u-tol-width"/>
                    <div className="info-card">
                        <h4>Cmaleón con oja de Oro</h4>
                        <p>Taller:Jacabo&María</p>
                        <img src={prostar} />
                        <p className="precio">$267000</p>
                        <button 
                        className="u-full-width button-primary button input agregar-carrito                        
                        ">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    <img src={prostar2} className="u-tol-width"/>
                    <div className="info-card">
                       <h4>Búho</h4>
                        <p>Taller: Mahuayel</p>
                        <img src={prostar} />
                        <p className="precio">$15000</p>
                        <button
                        className="u-full-width button-primary button input agregar-carrito                        
                        ">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    <img src={prostar7} className="u-tol-width"/>
                    <div className="info-card">
                        <h4>Toro</h4>
                        <p>Taller:Mahuayel</p>
                        <img src={prostar} />
                        <p className="precio">$10000</p>
                        <button  
                        className="u-full-width">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
            </div>


            

            </div>


            
             
    );
}


export default ProductoDetalle;
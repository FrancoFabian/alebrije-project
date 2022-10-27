import { Button } from "bootstrap";
import React from "react";
import imgd from "../assets/pro1.jpg";
import imgd2 from "../assets/pro4.jpg";

const CarSales = (props) =>{
    
    return (
        <div id="frank">
                       
                         <div className="rty">
                         <div className="wer">
                         <table className="table-container">
                             <thead>
                             <tr>
                                 <th>Cantidad</th>
                                 <th>Producto</th>
                                 <th>Nombre</th>
                                 <th>Precio</th>
                                 <th></th>
                                 </tr>
                             </thead>
                             
                             <tbody>
                                <tr>
                                <td>1</td>
                                 <td><img className="img-carrito" src={imgd}/></td>
                                 <td>Conejo</td>
                                 <td>$1600</td>
                                 <td><a className="poi">Eliminar</a></td>
                                 </tr>
                             </tbody>
                         </table>

                         <table className="table-container">
                             <thead>
                             <tr>
                                 <th>Cantidad</th>
                                 <th>Producto</th>
                                 <th>Nombre</th>
                                 <th>Precio</th>
                                 <th></th>
                                 </tr>
                             </thead>
                             
                             <tbody>
                                <tr>
                                <td>1</td>
                                 <td><img className="img-carrito" src={imgd2}/></td>
                                 <td>Jaguar alado</td>
                                 <td>$67000</td>
                                 <td><a className="poi">Eliminar</a></td>
                                 </tr>
                             </tbody>
                         </table>
                         </div>
                         <a className="poi2">Vaciar Carrito</a>
                         <div className="total">
                            
                             <table className="ponch">
                                 <thead>
                                     <tr>
                                         <th>Total</th>
                                         <th>$68900</th>
                                         <th><a className="poi3">Pagar</a></th>
                                     </tr>
                                 </thead>
                             </table>

                         </div>
                         </div>  
                            
                        
                </div>
    );
    

}
export default CarSales;
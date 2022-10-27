import React from 'react';
import prostar2 from "../assets/pro3.jpg";
import prostar3 from "../assets/pro4.jpg";
import prostar4 from "../assets/pro5.jpg";
import prostar5 from "../assets/pro6.jpg";
import prostar7 from "../assets/pro7.jpg";
import prostar9 from "../assets/pro9.png";
import prostar10 from "../assets/pro10.jpg";
import prostar12 from "../assets/pro12.png";
import prostar13 from "../assets/ALX.jpg";
const AdminSales = (props) => {
    return(<div className='Adminsales'>
           <h1>Ventas<i className='bi bi-clipboard-check-fill'></i></h1>
            <div className='LIne'></div>
            <div className='Categorias'>
                    <div className='TypeCat1'>
                    <div className='ax1'><h2>Todos(10)</h2></div>
                            

                    </div>
                    <div className='TypeCat1'>
                            <div className='ax1'><h2>Precio</h2></div>
                           

                    </div>
                    <div className='TypeCat1'>
                            <div className='ax1'><h2>Cliente</h2></div>
                           

                    </div>
                    <div className='TypeCat1'>
                            <div className='ax1'><h2>Fecha</h2></div>
                           

                    </div>

            </div>
            <div className='content-Adminpro'>
            <div class="Asdta">
    
    <table className='Admin-Salestable'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Precio Unitario</th>
                <th>Proveedor</th>
                <th>Descripcion</th>
                <th>Color</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Monto Total</th>
                <th>Cliente</th>

                
            </tr>
        </thead>
        <tbody>
           
            <tr>
                <td >
                 1
                </td>
                <td>
                     <div className='DisplayAdmitable1'>
                          <div id='stonksadmi1'>$88,000 </div>
                          

                     </div>
                </td>
                <td >     
                     <div className='DisplayAdmitable1'>
                          <div>Kopal </div>
                          

                     </div>     
                     
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Jaguar Asecho </div>
                          

                     </div>
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Blanco </div>
                          

                     </div>
                </td>
                <td >          
                    <div className='DisplayAdmitable1'>
                          <div>5 </div>
                          
                     </div>
                </td>
                <td >          
                7/07/2022
                </td>
                <td id='stonksadmi1'>          
                     $440,000
                </td>
                <td >    
                <div className='DisplayAdmitable1'>
                          <div><img className='imgadmipro1' src={prostar13}/></div>  
                          <div>Alex Zedra</div>
                          

                     </div>      
                     
                </td>
               
                
               
            </tr>


            
            <tr>
                <td >
                 23
                </td>
                <td>
                     <div className='DisplayAdmitable1'>
                          <div id='stonksadmi1'>$15,000 </div>
                          

                     </div>
                </td>
                <td >     
                     <div className='DisplayAdmitable1'>
                          <div>Mahuayel </div>
                          

                     </div>     
                     
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Búho </div>
                          

                     </div>
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Blanco </div>
                          

                     </div>
                </td>
                <td >          
                    <div className='DisplayAdmitable1'>
                          <div>2 </div>
                          
                     </div>
                </td>
                <td >          
                7/02/2022
                </td>
                <td id='stonksadmi1'>          
                     $30,000
                </td>
                <td >    
                <div className='DisplayAdmitable1'>
                          <div><img className='imgadmipro1' src={prostar12}/></div>  
                          <div>Auronplay</div>
                          

                     </div>      
                     
                </td>
               
                
               
            </tr>
            <tr>
                <td >
                 67
                </td>
                <td>
                     <div className='DisplayAdmitable1'>
                          <div id='stonksadmi1'>$67,000 </div>
                          

                     </div>
                </td>
                <td >     
                     <div className='DisplayAdmitable1'>
                          <div>Jacobo&María </div>
                          

                     </div>     
                     
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Jaguar Alado </div>
                          

                     </div>
                </td>
                <td >          
                     <div className='DisplayAdmitable1'>
                          <div>Café </div>
                          

                     </div>
                </td>
                <td >          
                    <div className='DisplayAdmitable1'>
                          <div>1 </div>
                          
                     </div>
                </td>
                <td >          
                23/07/2022
                </td>
                <td id='stonksadmi1'>          
                     $67,000
                </td>
                <td >    
                <div className='DisplayAdmitable1'>
                          <div><img className='imgadmipro1' src={prostar10}/></div>  
                          <div>Kevin Kaarl</div>
                          

                     </div>      
                     
                </td>
               
                
               
            </tr>




           
           
          
        </tbody>
    </table>
</div>

            </div>

    </div>);
}
export default AdminSales;
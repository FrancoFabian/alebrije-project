import React from 'react';
const Tickets = (props) => {
    return(

        <div className='Ticket-master'>
            <h1 className='text-titi'>Mis pedidos</h1>
            <div className='Cards-ticket'>

            <div class="coltic">
                    <div className='linetick3'></div>
                    <div className='Tickinfo'>
                    <h1>MXN74,500.00</h1>
                    <h3>N° 3000236</h3>
                    <h2><i id='Tickicon4' className='bi bi-arrow-clockwise'></i> En espera de confirmación</h2>
                    
                    </div>
                        
    
            </div>


            <div class="coltic">
                    <div className='linetick2'></div>
                    <div className='Tickinfo'>
                    <h1>MXN3,500.00</h1>
                    <h3>N° 3000237</h3>
                    <h2><i id='Tic2' className='bi bi-truck'></i> En camino</h2>
                    
                    </div>
                        
    
            </div>

            
            
            <div class="coltic">
                    <div className='linetick'></div>
                    <div className='Tickinfo'>
                    <h1>MXN88,000.00</h1>
                    <h3>N° 3000235</h3>
                    <h2><i id='Tickicon' className='bi bi-check-circle-fill'></i> Entregado al cliente</h2>
                    
                    </div>
                        
    
            </div>

            <div class="coltic">
                    <div className='linetick'></div>
                    <div className='Tickinfo'>
                    <h1>MXN23,500.00</h1>
                    <h3>N° 3000234</h3>
                    <h2><i id='Tickicon' className='bi bi-check-circle-fill'></i> Entregado al cliente</h2>
                    
                    </div>
                        
    
            </div>

            </div>
        </div>
    );
}
export default Tickets;
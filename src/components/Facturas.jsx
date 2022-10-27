import React from 'react';
const Facturas = (props) => {
    return(
        <div className='UltFact'>
        <div className='Pedi'>
            <i className='bi bi-arrow-left-square-fill'></i><h4>Pedidos</h4>

          </div>
        <h1>COBRIJES</h1>
        
        <div className='LineStack'>

        </div>
        <div className='content-fact'>

        <div className='Af-fact'>
        <p id='texfact'><span id='qwr'>CLIENTE :</span> <br/>
        ALEX ZEDRA<br/>
        LOMBARD STREET 255<br/>
        ESTADOS UNIDOS DE AMERICA<br/>
        SAN FRANCISCO<br/>
        CALIFORNIA<br/>
        94111
        </p>

        </div>

        <div className='Af-fact2'>
        <p id='texfact'><span id='qwr'>Nº DOCUMENTO: C9447 / 469480</span> <br/>
        
        FECHA OPERACIÓN: 23/12/21<br/>
        PÁGINA: 1/1<br/><br/>
        COBRIJES MEXICO, S.A. DE C.V.<br/>
        C/ PONIENTE 146, Nº 730, COLONIA INDUSTRIAL<br/>
        VALLEJO, SAN MARTIN TILCAJETE<br/>
        02300 OAXACA<br/>
        C.I.F.: BME0004112J6<br/><br/>

       
        <span id='qwr'>Nº PEDIDO: 3000234</span>
        <br/>
        C.T.:9447
        

        </p>

        </div>

        <div class="coldos">
    <table class="table-container">
        <thead>
            <tr>
                <th>TALLER</th>
                <th>COLOR</th>
                <th>DESCRIPCION</th>
                <th>I.V.A</th>
                <th>PRECIO UNITARIO</th>
                <th>UNIDADES</th>
                <th>IMPORTE</th>
            </tr>
        </thead>
        <tbody>
           
            <tr>
                <td id="kl">
                KOPAL
                </td>
                <td>
                     NEGRO
                </td>
                <td id="Dat">          
                     JAGUAR DURMIENTE
                </td>
                <td id="Qwe">
                     16.00%
                </td>
                
                <td id="Buy">
                
                88,000.00
                </td> 
                <td>
                      1
                </td> 
                <td id="Cash">
                88,000.00
                </td> 
                
            </tr>
          
        </tbody>
    </table>
</div>

<div class="coldos">
    <h5>DESGLOSE I.V.A</h5>
    <table id='NERD' class="table-container">
        <thead>
            <tr>
                <th>BASE IMP.</th>
                <th>I.V.A</th>
                <th>IMPORTE</th>
                
            </tr>
        </thead>
        <tbody>
           
            <tr>
                <td id="kl">
                73,920.00
                </td>
                <td>
                     16.00%
                </td>
                <td id="Dat">          
                     14,000.00
                </td>
               
                
               
            </tr>
          
        </tbody>
    </table>
</div>

<div class="coldos">
    <h5>TOTAL</h5>
    <table id='NERD' class="table-container">
        <thead>
            <tr>
                <th>IMPORTE MXN(I.V.A. incluído)</th>
                <th>88,000.00</th>
                
                
            </tr>
        </thead>
        
    </table>
</div>

    <div className='Codefact'>
        <h4>www.cobrijes.com </h4>
        <i className='bi bi-qr-code'></i>
        <h4>Haz click aquí o escanea el QR para convertir tu ticket en factura</h4>
    </div>
        </div>

          

        </div>
    );
}

    export default  Facturas;

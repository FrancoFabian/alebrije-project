import React, { useEffect, useState }  from "react";
import logo from "../img/logotipo2.png";
import user from "../assets/admin3.jpg";
import Menuitems from "./Menuitmes";


const menuItems = [{ name:"Home",exact:true, to:"/",iconClassName:"bi bi-house-fill"},
                   { name:"Catalogo",exact:true,to:"/Productos",iconClassName:"bi bi-bag-fill",/*subMenus:[{name:"Kopal",to:"/Talleres/Kop"},{name:"Zorros",to:"/Talleres/JacM"},{name:"Mahuayel",to:"/Talleres/Mah"}]*/}/*,
                   { name:"",to:"/Actividades",iconClassName:"bi bi-ticket-perforated-fill"},
                   { name:"Ventas",to:"/Carrito",iconClassName:"bi bi-clipboard-check-fill"},
                   { name:"Estadisticas",to:"/Esta",iconClassName:"bi bi-reception-3"},
                   { name:"Usuarios",to:"/Users",iconClassName:"bi bi-people-fill"},
                   { name:"Promociones",to:"/Promotions",iconClassName:"bi bi-bag-check-fill"},
                   { name:"Envios",to:"/Envi",iconClassName:"bi bi-truck"}*/
                
                ];
const Sidemenu = (props) =>{
    const [inactive,setInactive] = useState(false);
    useEffect(()=>{
        if(inactive){
            document.querySelectorAll(".sub-menu").forEach((el)=>{
                 el.classList.remove("active");
            });
        }
        props.onCollapse(inactive);
    },[inactive]);
    
return <div className={`side-menu ${inactive? "inactive": ""}`}>
    <div className={`top-section ${inactive? "inactive":""}`}>
        <div className="logo" onClick={()=>setInactive(!inactive)}>
        
            <img src={logo} alt="webscript"/>
            <p className={`pp2 ${inactive? "inactive":""}`}>CASA CRUZ</p>
            <p className={`pp3 ${inactive? "inactive":""}`}>TIERRA DE ALEBRIJES</p>
            
            
            
            
        </div>
        

        <div onClick={()=>setInactive(!inactive)} className="toggle-menu-btn">
        
        {inactive ?<i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>}  
        
        </div>
        {/*<div  className="search-controller">
            <button  className="search-btn">
            <i onClick={()=>setInactive(!inactive)} className="bi bi-search"></i>
            </button>
            <input type="text" placeholder="Search"/>
        </div>*/}
    </div>
    <div className={`divider${inactive?"inactive":""}`}>
        <div className="main-menu">
            <ul>
            {
                menuItems.map((menuItems,index) => 
                <Menuitems key={index} 
                           name={menuItems.name}
                           exact={menuItems.exact}
                           to={menuItems.to}
                           subMenus={menuItems.subMenus ||[]}
                           iconClassName={menuItems.iconClassName}
                           onClick={()=>{
                              if(inactive){
                                  setInactive(false);
                              }}
                           }
                           />)
            }
              
            </ul>
        </div>
    </div>
    
   { /*<div className="side-menu-footer">
        <div className="avatar">
            <img src={user} alt="user"></img>
        </div>
        <div className="user-info">
            <h5>Franco Fabián</h5>
            <p>Adminstrador</p>
            
        </div>

        </div>*/}
</div>;
};

export default Sidemenu; 

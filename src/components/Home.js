import IconEmp from '../img/aaa.png'
import logo from "../img/logotipo3.png";

const Home = ()=>{
    return(
     
    <div className="Home">
        <div><img className="ImgGH" src={logo}/></div>
         <div className='content-img'>
         <div className='sombra'>Isodoro Cruz Hernández<br/>  1934-2015</div>
         <div className='sombra2'>PIONERO DE LA <br/>TALLA <br/>DE MADERA</div>
           <div className='img'><img className='homi' src={IconEmp}/></div>
           </div>
         
        

    </div>
    
    );
 
}
export default Home

import img1 from '../img/001.jpg'
import imgB from '../img/002.jpg'
import imgB1 from '../img/003.jpg'
import imgB2 from '../img/004.jpg'
import imgB3 from '../img/005.jpg'
import imgB4 from '../img/006.jpg'
import img2 from '../img/007.jpg'
import imgA1 from '../img/008.jpg'
import imgA2 from '../img/009.jpg'
import img3 from '../img/011.jpg'
import imgC1 from '../img/012.jpg'
//CAtrina Naranja
import imgC2 from '../img/013.jpg'
import imgC3 from '../img/014.jpg'
import imgC4 from '../img/015.jpg'
//Fin
import img4 from '../img/016.jpg'
import imgD1 from '../img/017.jpg'
import imgD2 from '../img/018.jpg'
import img5 from '../img/019.jpg'
import imgE1 from '../img/021.jpg'
import imgE2 from '../img/022.jpg'
import imgE3 from '../img/023.jpg'
import imgE4 from '../img/024.jpg'
import imgE5 from '../img/025.jpg'
import img6 from '../img/026.jpg'
import imgF1 from '../img/027.jpg'
import imgF2 from '../img/028.jpg'
import img7 from '../img/029.jpg'
import img8 from '../img/031.jpg'
import img9 from '../img/032.jpg'
import img10 from '../img/033.jpg'
import img11 from '../img/034.jpg'
import img12 from '../img/035.jpg'
import img13 from '../img/036.jpg'
import imgF3 from '../img/037.jpg'
import imgF4 from '../img/038.jpg'

import imgF6 from '../img/041.jpg'
import img14 from '../img/042.jpg'
import img15 from '../img/043.jpg'
import imgF7 from '../img/044.jpg'
import img16 from '../img/045.jpg'
import F22 from '../img/046.jpg'
import img17 from '../img/047.jpg'
import imgF8 from '../img/048.jpg'

import Backlogo  from '../components/Backlogo';
import React,{useState,useEffect} from "react";



import imto from "../assets/toro.png";
import imt2 from "../assets/Blank.png";
import imt3 from "../assets/Xc.png";
import { StoreMallDirectory } from "@mui/icons-material";
import { maxWidth } from "@mui/system";
const Prodinamic = (props)=>{
    
    const DB = [{
        nombre:"Pareja de catrines",
        precio:"15000",
        stock:"1",
        Altura:"38.5",
        Ancho:"13.5",
        Largo:"7.5",
        Descripcion:"Pareja de catrines campecinos haciendo referencia a un dia de compras en la plaza de Ocotlan de Morelos, cada pieza fue tallada de un solo tronco de copal, hecho a mano con tecnicas ancestrales",
        Peso:"23kg",
        img:img1,
        imgDB:[{imgA:img1},{imgA:imgB},{imgA:imgB1},{imgA:imgB2},{imgA:imgB3},{imgA:imgB4}]


    },{
        nombre:"Pulpo Azul",
        precio:"15000",
        stock:"1",
        Altura:"28.5",
        Ancho:"24",
        Largo:"26",
        Descripcion:"Pieza hecha con madera de copal, proceso de 6 meses",
        Peso:"23kg",
        img:img2,
        imgDB:[{imgA:img2},{imgA:imgA1},{imgA:imgA2}]


    },{
        nombre:"Gato Montés",
        precio:"10000",
        stock:"1",
        Altura:"37.5",
        Ancho:"14",
        Largo:"26",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img3,
        imgDB:[{imgA:img3},{imgA:imgC1}]


    },{
        nombre:"Catrina Carnavalera",
        precio:"3500",
        stock:"1",
        Altura:"25",
        Ancho:"11",
        Largo:"5",
        Descripcion:"Pieza hecha con madera de copal, pintada con colores que hacen alusión al carnaval de San Martín Tílcajete",
        Peso:"23kg",
        img:img4,
        imgDB:[{imgA:img4},{imgA:imgD1},{imgA:imgD2}]


    },{
        nombre:"Ajolote",
        precio:"5000",
        stock:"1",
        Altura:"12.5",
        Ancho:"14",
        Largo:"22.5",
        Descripcion:"Pieza elaborada de madera de copal, como tributo a la especie en peligro de extinción",
        Peso:"23kg",
        img:img5,
        imgDB:[{imgA:img5},{imgA:imgE1}]


    },{
        nombre:"Tlacuache",
        precio:"3000",
        stock:"1",
        Altura:"10",
        Ancho:"15",
        Largo:"17",
        Descripcion:"Pieza hecha con madera de copal, el ladrón del fuego",
        Peso:"23kg",
        img:img6,
        imgDB:[{imgA:img6},{imgA:imgE5},{imgA:imgF1}]


    },{
        nombre:"Camaleón",
        precio:"4000",
        stock:"1",
        Altura:"8",
        Ancho:"17",
        Largo:"21",
        Descripcion:"Pieza hecha con madera de copal, simboliza la intuición y la adaptabilidad",
        Peso:"23kg",
        img:img7,
        imgDB:[{imgA:img7},{imgA:imgF2}]


    },{
        nombre:"Corazón de Angel",
        precio:"5000",
        stock:"1",
        Altura:"24",
        Ancho:"29",
        Largo:"7",
        Descripcion:"Pieza hecha con madera de zompantle, inspirado en los buenos sentimientos y el deseo de proteger",
        Peso:"23kg",
        img:img8,
        imgDB:[{imgA:img8}]


    },{
        nombre:"Corazón Floreado",
        precio:"5000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, inspirado en los sentimientos que nacen por ver los resultados dde tu esfuerzo",
        Peso:"23kg",
        img:img9,
        imgDB:[{imgA:img9}]


    },{
        nombre:"Corazón Indio Cruz",
        precio:"10000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, representa el corazón del fundador Isidoro Cruz",
        Peso:"23kg",
        img:img10,
        imgDB:[{imgA:img10}]


    },{
        nombre:"Corazón entre guias y grecas",
        precio:"5000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, representa el sufrimiento del mal de amores",
        Peso:"23kg",
        img:img11,
        imgDB:[{imgA:img11}]


    },{
        nombre:"Corazón purpura",
        precio:"5000",
        stock:"1",
        Altura:"31",
        Ancho:"20",
        Largo:"8",
        Descripcion:"Pieza hecha con madera de zompantle, representa a un corazón apunto de colapsar por emociones reprimidas",
        Peso:"23kg",
        img:img12,
        imgDB:[{imgA:img12}]


    },{
        nombre:"Zorra Corazón de copal",
        precio:"20000",
        stock:"1",
        Altura:"21.5",
        Ancho:"17",
        Largo:"67",
        Descripcion:"Pieza hecha con la parte mas dura del tronco de copal, expresa la inteligencia y el instinto para sobrevivir",
        Peso:"23kg",
        img:img13,
        imgDB:[{imgA:img13},{imgA:imgF3},{imgA:imgF4}]


    },{
        nombre:"Chapulin",
        precio:"3000",
        stock:"1",
        Altura:"30",
        Ancho:"20",
        Largo:"33",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img14,
        imgDB:[{imgA:img14}]


    },{
        nombre:"Gato Alegre",
        precio:"4000",
        stock:"1",
        Altura:"21.5",
        Ancho:"14.5",
        Largo:"19.5",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img15,
        imgDB:[{imgA:img15},{imgA:imgF7}]


    },{
        nombre:"Venado",
        precio:"5000",
        stock:"1",
        Altura:"32.5",
        Ancho:"13.5",
        Largo:"17",
        Descripcion:"Pieza hecha con madera de copal, representa la serenidad y la paciencia",
        Peso:"23kg",
        img:img16,
        imgDB:[{imgA:img16},{imgA:F22}]


    },{
        nombre:"Armadillo cola enrroszcada",
        precio:"5000",
        stock:"1",
        Altura:"14",
        Ancho:"13",
        Largo:"31.5",
        Descripcion:"Pieza hecha con madera de copal, simboliza la seguridad y la empatia",
        Peso:"23kg",
        img:img17,
        imgDB:[{imgA:img17},{imgA:imgF8}]


    },{
        nombre:"Conejo mirando a la Luna",
        precio:"3000",
        stock:"1",
        Altura:"21",
        Ancho:"6.5",
        Largo:"13.5",
        Descripcion:"Pieza hecha con madera de copal,  inspirado en la leyenda del conejo que está en la Luna",
        Peso:"23kg",
        img:imgE2,
        imgDB:[{imgA:imgE2},{imgA:imgE3},{imgA:imgE4}]


    },{
        nombre:"Catrina Coqueta",
        precio:"3500",
        stock:"1",
        Altura:"27",
        Ancho:"11",
        Largo:"7",
        Descripcion:"Pieza hecha con madera de copal, representa a alguien que no pudo amar en vida",
        Peso:"23kg",
        img:imgC2,
        imgDB:[{imgA:imgC2},{imgA:imgC3}]


    }]
    let neew = ""
    let itemList = [];
    const [query,setQuery] = useState("");
    const [anchos,setAnchos] = useState("")
    const [dess,setDess] = useState("")
    const [press,setPress] = useState("")
    const [altos,setAltos] = useState("")
    const [largos,setLargos] = useState("")
    const [mostrar, setMostrar] = useState(false);
    const [mostrar2,setMostrar2] = useState(Object);
    const [aps,setAps] = useState(Object)
    const [caro,setCaro] = useState(true);
    const [lup,setLup] = useState(true);
    const [parachutes, setParachutes] = useState(Object)

   
     
    /*

   thumbnails.forEach(thumb =>{
   thumb.addEventListener('click',function(){
          const actie = document.querySelector('.actie')
          actie.classList.remove('actie')
          this.classList.add('actie')
          main_img.src = this.src
          console.log('No mames')
     }) 
   })*/
    
    
    console.log(query)
    return(
        
        <div className="master-products">
          
            {caro?<Backlogo />:null}
            { mostrar?

           
          
           <div className="Galery-Multimedia">

<div className="Galery-pieza" >
                
                
                <div className="Galery-info">
              <p>{query}</p>
              <table id="Config-table">
                <thead>
                    <tr>
                        <th>Altura</th>
                        <th>Ancho</th>
                        <th>Largo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{altos} cm</td>
                        <td>{anchos} cm</td>
                        <td>{largos} cm</td>
                    </tr>
                </tbody>
              </table>
              <div className="DescripcionSS"><h4>Descripcion : {dess}</h4></div>
              <h2>${press}MXN</h2>
                

              <div className="GalBtn" onClick={()=>{
                setMostrar(false)
                setCaro(true)
                
            
            }}>
                
                
                <div className="Qa"><i class="bi bi-arrow-left" ></i></div><div className="Qa1"><a>Volver atrás</a></div></div>
           </div>

           <div className="product-galery"> 
           
           <div className="img-container-g" id="#Boxxx" onClick={()=>{ 
                  console.log("entraperonohace nada")
                  let Elm2 = document.querySelector(".img-container-g img")
                  let ZOOM = 400;
                  Elm2.style.width = ZOOM + '%'
                  Elm2.style.height = 'auto';
                  Elm2.style.transform = 'translate(-40%,-40%) scale(1);'

           }}  onMouseLeave={()=>{
            console.log("entraperonohace nadarrr")
                   let INyec = document.querySelector(".img-container-g img")
                   INyec.style.width = 'auto';
                   INyec.style.height = '400px';
                   
                   
                   
                   
           }} onMouseMove={()=>{
            let INyec4 = document.querySelector(".img-container-g")
            let INyec8 = document.querySelector(".img-container-g img")
            let clientX = Event.clientX - INyec4.offsetLeft;
            let clientY = Event.clientY - INyec4.offsetTop;
             console.log('CTM')
           let  mWidth = INyec4.offsetWidth;
           let  mHeigth = INyec4.offsetHeight;
            clientX = clientX/mWidth * 100;
            clientY = clientY/mHeigth * 100;
            INyec8.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(2)'

            let xpos;
            let ypos;
           
           }}> 

               <img className="imageBox" src={mostrar2}/>
               
                
               
           
           </div>
           <div className="product-small-img">
             {
                 aps.map(rayos=>(
                     
                    <img src={rayos.imgA} className="thumbnail" onClick={()=>{
                        const imgAlfa = document.querySelector('.imageBox')
                        imgAlfa.src = rayos.imgA
                        

 
                    }}  />
                    
                 ))
                 
                
             
             }
            
           
            
             </div>
           
           
           </div>


            
           </div>
           
        

        </div>:null}

        
            
        <div className='Products-content'  >
        {
            caro?
            DB.map((objeto)=>(
                <div className="rew" key={objeto.name} >

            <div className="contend-card" onClick={()=>{
                
                 
               
                setMostrar2(objeto.img)
                setQuery(objeto.nombre.toString())
                setAltos(objeto.Altura.toString())
                setAnchos(objeto.Ancho.toString())
                setLargos(objeto.Largo.toString())
                setPress(objeto.precio.toString())
                setDess(objeto.Descripcion.toString())
                setAps(objeto.imgDB)
                setParachutes(objeto.imgDB)
                setCaro(false)
                
                setMostrar(true)
                  
                  
            
            }} >
            
            <div className='divone'><img className='imgl' src={objeto.img}/></div>
            <div className='divtwo'><p className="text-card">{objeto.nombre}</p></div>
            <div className='divtres' id='divtres'><p className="text-cards">${objeto.precio} mx</p></div>
            
        </div>
                    
                </div>
            ))    
          
            :null
        }
        
        </div>
        </div>

    );

}
export default Prodinamic

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
import "../pages/Styles/Styleslideshowproducts.css"
import Btnprodinamic from "../components/Btnprodinamic"

import imto from "../assets/toro.png";
import imt2 from "../assets/Blank.png";
import imt3 from "../assets/Xc.png";
import { StoreMallDirectory } from "@mui/icons-material";
import { maxWidth } from "@mui/system";
const Prodinamic = (props)=>{
    
    const DB = [{
        id:1,
        nombre:"Pareja de catrines",
        precio:"15000",
        stock:"1",
        Altura:"38.5",
        Ancho:"13.5",
        Largo:"7.5",
        Descripcion:"Pareja de catrines campecinos haciendo referencia a un dia de compras en la plaza de Ocotlan de Morelos, cada pieza fue tallada de un solo tronco de copal, hecho a mano con tecnicas ancestrales",
        Peso:"23kg",
        img:img1,
        imgDB:[{Id:1,imgA:img1},{Id:2,imgA:imgB},{Id:3,imgA:imgB1},{Id:4,imgA:imgB2},{Id:5,imgA:imgB3},{Id:6,imgA:imgB4}]


    },{ 
        id:2,
        nombre:"Pulpo Azul",
        precio:"15000",
        stock:"1",
        Altura:"28.5",
        Ancho:"24",
        Largo:"26",
        Descripcion:"Pieza hecha con madera de copal, proceso de 6 meses",
        Peso:"23kg",
        img:img2,
        imgDB:[{Id:1,imgA:img2},{Id:2,imgA:imgA1},{Id:3,imgA:imgA2}]


    },{
        id:3,
        nombre:"Gato Montés",
        precio:"10000",
        stock:"1",
        Altura:"37.5",
        Ancho:"14",
        Largo:"26",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img3,
        imgDB:[{Id:1,imgA:img3},{Id:2,imgA:imgC1}]


    },{ 
        id:4,
        nombre:"Catrina Carnavalera",
        precio:"3500",
        stock:"1",
        Altura:"25",
        Ancho:"11",
        Largo:"5",
        Descripcion:"Pieza hecha con madera de copal, pintada con colores que hacen alusión al carnaval de San Martín Tílcajete",
        Peso:"23kg",
        img:img4,
        imgDB:[{Id:1,imgA:img4},{Id:2,imgA:imgD1},{Id:3,imgA:imgD2}]


    },{
        id:5,
        nombre:"Ajolote",
        precio:"5000",
        stock:"1",
        Altura:"12.5",
        Ancho:"14",
        Largo:"22.5",
        Descripcion:"Pieza elaborada de madera de copal, como tributo a la especie en peligro de extinción",
        Peso:"23kg",
        img:img5,
        imgDB:[{Id:1,imgA:img5},{Id:2,imgA:imgE1}]


    },{
        id:6,
        nombre:"Tlacuache",
        precio:"3000",
        stock:"1",
        Altura:"10",
        Ancho:"15",
        Largo:"17",
        Descripcion:"Pieza hecha con madera de copal, el ladrón del fuego",
        Peso:"23kg",
        img:img6,
        imgDB:[{Id:1,imgA:img6},{Id:2,imgA:imgE5},{Id:3,imgA:imgF1}]


    },{
        id:7,
        nombre:"Camaleón",
        precio:"4000",
        stock:"1",
        Altura:"8",
        Ancho:"17",
        Largo:"21",
        Descripcion:"Pieza hecha con madera de copal, simboliza la intuición y la adaptabilidad",
        Peso:"23kg",
        img:img7,
        imgDB:[{Id:1,imgA:img7},{Id:2,imgA:imgF2}]


    },{
        id:8,
        nombre:"Corazón de Angel",
        precio:"5000",
        stock:"1",
        Altura:"24",
        Ancho:"29",
        Largo:"7",
        Descripcion:"Pieza hecha con madera de zompantle, inspirado en los buenos sentimientos y el deseo de proteger",
        Peso:"23kg",
        img:img8,
        imgDB:[{Id:1,imgA:img8}]


    },{
        id:9,
        nombre:"Corazón Floreado",
        precio:"5000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, inspirado en los sentimientos que nacen por ver los resultados de tu esfuerzo",
        Peso:"23kg",
        img:img9,
        imgDB:[{Id:1,imgA:img9}]


    },{
        id:10,
        nombre:"Corazón Indio Cruz",
        precio:"10000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, representa el corazón del fundador Isidoro Cruz",
        Peso:"23kg",
        img:img10,
        imgDB:[{Id:1,imgA:img10}]


    },{
        id:11,
        nombre:"Corazón entre guias y grecas",
        precio:"5000",
        stock:"1",
        Altura:"37",
        Ancho:"23",
        Largo:"10",
        Descripcion:"Pieza hecha con madera de zompantle, representa el sufrimiento del mal de amores",
        Peso:"23kg",
        img:img11,
        imgDB:[{Id:1,imgA:img11}]


    },{
        id:11,
        nombre:"Corazón purpura",
        precio:"5000",
        stock:"1",
        Altura:"31",
        Ancho:"20",
        Largo:"8",
        Descripcion:"Pieza hecha con madera de zompantle, representa a un corazón apunto de colapsar por emociones reprimidas",
        Peso:"23kg",
        img:img12,
        imgDB:[{Id:1,imgA:img12}]


    },{
        id:12,
        nombre:"Zorra Corazón de copal",
        precio:"20000",
        stock:"1",
        Altura:"21.5",
        Ancho:"17",
        Largo:"67",
        Descripcion:"Pieza hecha con la parte mas dura del tronco de copal, expresa la inteligencia y el instinto para sobrevivir",
        Peso:"23kg",
        img:img13,
        imgDB:[{Id:1,imgA:img13},{Id:2,imgA:imgF3},{Id:3,imgA:imgF4}]


    },{
        id:13,
        nombre:"Chapulin",
        precio:"3000",
        stock:"1",
        Altura:"30",
        Ancho:"20",
        Largo:"33",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img14,
        imgDB:[{Id:1,imgA:img14}]


    },{
        id:14,
        nombre:"Gato Alegre",
        precio:"4000",
        stock:"1",
        Altura:"21.5",
        Ancho:"14.5",
        Largo:"19.5",
        Descripcion:"Pieza hecha con madera de copal",
        Peso:"23kg",
        img:img15,
        imgDB:[{Id:1,imgA:img15},{Id:2,imgA:imgF7}]


    },{
        id:15,
        nombre:"Venado",
        precio:"5000",
        stock:"1",
        Altura:"32.5",
        Ancho:"13.5",
        Largo:"17",
        Descripcion:"Pieza hecha con madera de copal, representa la serenidad y la paciencia",
        Peso:"23kg",
        img:img16,
        imgDB:[{Id:1,imgA:img16},{Id:2,imgA:F22}]


    },{
        id:16,
        nombre:"Armadillo cola enrroszcada",
        precio:"5000",
        stock:"1",
        Altura:"14",
        Ancho:"13",
        Largo:"31.5",
        Descripcion:"Pieza hecha con madera de copal, simboliza la seguridad y la empatía",
        Peso:"23kg",
        img:img17,
        imgDB:[{Id:1,imgA:img17},{Id:2,imgA:imgF8}]


    },{
        id:17,
        nombre:"Conejo mirando a la Luna",
        precio:"3000",
        stock:"1",
        Altura:"21",
        Ancho:"6.5",
        Largo:"13.5",
        Descripcion:"Pieza hecha con madera de copal,  inspirado en la leyenda del conejo que está en la Luna",
        Peso:"23kg",
        img:imgE2,
        imgDB:[{Id:1,imgA:imgE2},{Id:2,imgA:imgE3},{Id:3,imgA:imgE4}]


    },{ 
        id:18,
        nombre:"Catrina Coqueta",
        precio:"3500",
        stock:"1",
        Altura:"27",
        Ancho:"11",
        Largo:"7",
        Descripcion:"Pieza hecha con madera de copal, representa a alguien que no pudo amar en vida",
        Peso:"23kg",
        img:imgC2,
        imgDB:[{Id:1,imgA:imgC2},{Id:2,imgA:imgC3}]


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

    const [slideIndex,setSlideIndex] = useState(1)
    const nextSlide = ()=>{
        if(slideIndex !== aps.length){
            setSlideIndex(slideIndex +1)

        }else if (slideIndex === aps.length){
            setSlideIndex(1)
        }

    }
    const prevSlide = ()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1){
            setSlideIndex(aps.length)
        }

    }
    const moveDot = index =>{
        setSlideIndex(index)
    }

   
     
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
    
    
   
    return(
        
        <div className="master-products">
            <div className="FiltroSearch">
                
            </div>
          
            
            { mostrar?

           
          
           <div className="Galery-Multimedia">

<div className="Galery-pieza" >
                
                


           <div className="product-galery"> 
           
           <div className="container-slider2">
            
            {
                aps.map((obj,index)=>(
                   
                     <div  key={obj.Id} className={slideIndex === index +1 ? "slide2 active-anim2": "slide2"}>
                    
                         
                        
                        <img  src={obj.imgA}/>
                       
                     </div>

                ))
            }
            <Btnprodinamic moveSlide={nextSlide} direction={"next2"}/>
            <Btnprodinamic moveSlide={prevSlide} direction={"prev2"}/>
            <div className="container-dots2">
                {Array.from({length:aps.length}).map((item,index)=>(
                    <div 
                    onClick={()=>moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot2 active2" : "dot2"}></div>
                ))}
            </div>
            
       </div>
           
           </div>

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
                setSlideIndex(1)
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
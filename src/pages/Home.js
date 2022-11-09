
import Btnslides from "../components/Btnslides"
import './Styles/style.css'
import rtImg2 from "./imagens/ctm.jpg"
import rtImg from "./imagens/closeup-of-woman-in-vr-glasses-float-in-neon-space-with-cables-attached-to-her-metaverse-avatar-concept.jpg"
import rtImg3 from "./imagens/my.png"
import React ,{useState} from "react"
import r2 from "./imagens/ctm2.jpg"
import r3 from "./imagens/ctm3.jpg"
import r4 from "./imagens/ctm4.jpg"
import r5 from "./imagens/ctm5.jpg"
import r6 from "./imagens/ctm6.jpg"
import r7 from "./imagens/ctm7.jpg"
import r8 from "./imagens/ctm8.jpg"
import r9 from "./imagens/ctm9.jpg"
import r10 from "./imagens/ctm10.jpg"
import r11 from "./imagens/ctm11.jpg"

import { Slide } from "@mui/material"
const Home = ()=>{

    const DBF = [{id:1,imgAd:rtImg3,txt:"Pionero de la talla de madera"},
    {id:2,imgAd:rtImg2},
    {id:3,imgAd:r2},
    {id:4,imgAd:r3},
    {id:5,imgAd:r4},
    {id:6,imgAd:r5}, 
    {id:7,imgAd:r6},
    {id:8,imgAd:r7},
    {id:9,imgAd:r8},
    {id:10,imgAd:r9},
    {id:11,imgAd:r10},
    {id:12,imgAd:r11}
    ]
    const [slideIndex,setSlideIndex] = useState(1)
    const nextSlide = ()=>{
        if(slideIndex !== DBF.length){
            setSlideIndex(slideIndex +1)

        }else if (slideIndex === DBF.length){
            setSlideIndex(1)
        }

    }
    const prevSlide = ()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1){
            setSlideIndex(DBF.length)
        }

    }
    const moveDot = index =>{
        setSlideIndex(index)
    }

    return(
       <div className="container-slider">
            
            {
                DBF.map((obj,index)=>(
                   
                     <div  key={obj.id} className={slideIndex === index +1 ? "slide active-anim": "slide"}>
                    
                           <div className={`REs${obj.id}`}> <h2 className="txtIsis" contentEditable="true">{obj.txt}</h2></div>
                        
                        <img src={obj.imgAd}/>
                       
                     </div>

                ))
            }
            <Btnslides moveSlide={nextSlide} direction={"next"}/>
            <Btnslides moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length:DBF.length}).map((item,index)=>(
                    <div 
                    onClick={()=>moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
            
       </div>
    );
}
export default Home;
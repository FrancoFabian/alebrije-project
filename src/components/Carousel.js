import React from "react";

import { Carousel } from "react-responsive-carousel";
import imto from "../assets/toro.png";
import imt2 from "../assets/Blank.png";
import imt3 from "../assets/Xc.png";
export default (props) => (
  
  <Carousel  showThumbs={true} showStatus={true} useKeyboardArrows className="presentation-mode" >
    <div>
	    <h1 className="np"><span className="sp22">A</span>
                         <span className="sp2">L</span>
                         
                         <span className="sp4">E</span>
                         <span className="sp5">B</span>
                         <span className="sp6">R</span>
                         <span className="sp7">I</span>
                         <span className="sp8">J</span>
                         <span className="sp9">E</span>
                         <span className="sp10">S</span>
                          </h1>
      <img alt="" src={imto}/>
      <p className="legend">Envio <span className="sp1">Gratis</span> a partir de los <span className="sp1">$1200</span> en compras</p>
    </div>
	<div>
      <img alt="" src={imt3} />
      <p className="legend">Legend 1</p>
    </div>
	<div>
      <img alt="" src={imt2} />
      <p className="legend">Legend 1</p>
    </div>
	<div>
      <img alt="" src={imto}/>
      <p className="legend">Legend 1</p>
    </div>
	<div>
      <img alt="" src={imt2} />
      <p className="legend">Legend 1</p>
    </div>
   
  </Carousel>
);

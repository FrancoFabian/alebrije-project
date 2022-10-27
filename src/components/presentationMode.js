import React from "react";
import { Carousel } from "react-responsive-carousel";
import imto from "../assets/toro.png";
import imt2 from "../assets/Blank.png";
import imt3 from "../assets/Xc.png";


const presentationMode = () => (
    <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
        <div key="content-0" className="my-slide primary">
        <img src={imto} />
        </div>
        <div key="content-1" className="my-slide secondary">
        <img src={imt2} />
        </div>
        <div key="content-2" className="my-slide content">
        <img src={imt3} />
        </div>
        <div key="content-3" className="my-slide content">
            <img src={imto} />
        </div>
        
    </Carousel>
);
export default presentationMode;
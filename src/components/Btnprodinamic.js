import React from "react";

import leftArrow from "./icons/left-1.svg";
import rightArrow from "./icons/right-1.svg";

export default function Btnprodinamic({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next2" ? "btn-slide2 next2" : "btn-slide2 prev2"}
    >
      <img src={direction === "next2" ? rightArrow : leftArrow} />
    </button>
  );
}
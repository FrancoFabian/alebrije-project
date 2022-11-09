import React from "react";

import leftArrow from "./icons/chevron-compact-left.svg";
import rightArrow from "./icons/chevron-compact-right.svg";

export default function Btnslides({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
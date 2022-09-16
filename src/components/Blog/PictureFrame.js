import React from 'react'
import picturestyles from "./PictureFrame.css";
import DialpadOne from "../../images/dialpad_one.webp"

const PictureFrame = () => {
  return (
    <figure className="figure img">
        <img src={DialpadOne} />
    </figure>
  )
}

export default PictureFrame
import "./header.css"
import messi from "../../assets/messi.mp4"

import React from 'react'

export default function Header() {
  return (
    <div className="header_container">
      <video src={messi} autoPlay progress controls className="header_video" />
    </div>
  )
}

import React from "react"
import './Components.css'

export default function PersonalDetails() {
    return(
        <div>
            <img src="../public/primary-image.jpg" className="pictureImage"></img>
            <div className="personalDetails">
            <h1 className="name">Waffen Ampatua</h1>
            <h3 className="jobPosition">Fullstack Developer</h3>
            <h6 className="websiteUrl">waffen.sultanofc@gmail.com</h6>
            </div>
        </div>
    )
}
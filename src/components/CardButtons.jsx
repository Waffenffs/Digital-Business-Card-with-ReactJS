import React from "react"

export default function CardButtons() {
    return(
        <>
            <div className="cardButtons">
            <button className="emailButton">
                <a className="email--Button" href="../public/Trollface_non-free.png " target="_blank">
                <img src="../public/Icon.svg"></img>
                    Email
                </a>
            </button>
            <button className="githubButton">
                <a className="github--Button" href="../public/Trollface_non-free.png" target="_blank">
                <img src="../public/Vector.svg"></img>
                    LinkedIn 
                </a>
            </button>
            </div>
        </>
    )
}
import React from "react"
import PersonalDetails from "./PersonalDetails"
import CardButtons from "./CardButtons"
import AboutSection from "./AboutSection"
import FooterSection from "./FooterSection"
import './Components.css'

export default function CardContainer() {
    return( 
        <article className="cardContainer">
            <PersonalDetails />
            <CardButtons />
            <AboutSection />
            <FooterSection />
        </article>
    )
}
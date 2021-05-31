import React from 'react'
import Service from './Service'
import paper from '../../assets/aper1.png'
import download from '../../assets/download.png'
import variety from '../../assets/variety.jpg'
import tutor from '../../assets/tutor.png'

const Services = () => {
    return (
        <div id="services">
            <h2 id="title">Sell, Buy and Get Your Paper</h2>
            <div id="row">
                <Service
                    image={paper}
                    title={"Sell your papers"}
                    description={"Sell research papers online"}/>
                <Service
                    image={tutor}
                    title={"Expert tutors"}
                    description={"Obtain writing techniques for better essays"}/>
                <Service
                    image={download}
                    title={"Download research papers"}
                    description={"Search, Get and Download the Paper"}/>
                <Service
                    image={variety}
                    title={"Variety of papers"}
                    description={"Check Our Rich Database to solve your paper issues."}/>
            </div>
        </div>
    )
}

export default Services

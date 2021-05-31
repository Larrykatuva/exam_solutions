import React from 'react'

const Service = ({image, title, description}) => {
    return (
        <div id="service">
            <img src={image} alt=""/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Service

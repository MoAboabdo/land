import React from 'react'

export default function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                  <img src={props.image} alt="test"/>
            </div> 
            <div className="about-text">
               <h2>{props.title}</h2>
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, blanditiis dolor! Explicabo delectus veniam praesentium, facere vitae eaque. Qui totam quaerat nemo fuga omnis nostrum non cumque numquam voluptatibus quod!
                </p>  
                <button>{props.button}</button>
            </div>
        </div>
    )
}

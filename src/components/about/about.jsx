import React from 'react';
import './about.css'
import image from '../../Assets/oculist.png'

function About() {
    return ( 
    <>
    <div className='container'>
        <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
            <h1 className='aboutHead'>
                <strong>
                    Diabetic Retinopathy Detection
                </strong>
            </h1>
            India is said to be the diabetic capital of the World.
        </div>
    </div>
    </> 
    );
}

export default About;
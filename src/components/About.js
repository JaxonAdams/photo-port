import React from 'react';
import coverImage from '../assets/cover/cover-image.jpg';

const About = () => {
    return (
        <section className="my-5">
            <h1 id='about'>Who Am I?</h1>
            <img src={coverImage} alt='cover' className='my-2' style={{ width: '100%' }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus bibendum consequat. Vivamus imperdiet mi sit amet risus volutpat, vitae elementum lectus blandit. Aenean consectetur nisl a faucibus ornare. Vestibulum.</p>
        </section>
    );
};

export default About;
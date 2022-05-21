import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import photo from '../assets/small/commercial/0.jpg';

const Gallery = (props) => {
    const currentGallery = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentGallery.name)}</h1>
            <p>{currentGallery.description}</p>
            <div className='flex-row'>
                <img className='img-thumbnail mx-1' src={photo} alt='One of my photos' />
            </div>
        </section>
    );
};

export default Gallery;
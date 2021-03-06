import React from 'react';

const Modal = ({ currentPhoto, onClose }) => {
    const { name, category, description, index } = currentPhoto;

    return (
        <div className='modalContainer'>
            <h3 className='modalTitle'>{name}</h3>
            <img src={require(`../assets/large/${category}/${index}.jpg`)} alt='current category' />
            <p>{description}</p>
            <button onClick={onClose} type='button'>Close this modal</button>
        </div>
    );
};

export default Modal;
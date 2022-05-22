import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

const Nav = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory]);

    return (
        <header>
            <h2>
                <a data-testid='link' href='/'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li style={{ marginRight: '2rem' }}>
                        <a className='mx-2' data-testid='about' href='#about' onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li style={{ marginRight: '2rem' }}>
                        <span className={`mx-2 ${contactSelected && 'navActive'}`} onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map(category => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}>{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
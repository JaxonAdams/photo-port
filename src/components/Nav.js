import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

const Nav = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
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
                        <a className='mx-2' data-testid='about' href='#about'>About Me</a>
                    </li>
                    <li style={{ marginRight: '2rem' }}>
                        <span className='mx-2'>Contact</span>
                    </li>
                    {categories.map(category => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../components/About';

afterEach(cleanup);

describe('About component', () => {
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from '../components/Nav';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav 
            categories={categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockCurrentCategory}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockCurrentCategory}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav 
            categories={categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockCurrentCategory}
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav 
            categories={categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockCurrentCategory}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});